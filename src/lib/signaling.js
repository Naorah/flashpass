import { WebSocketServer } from 'ws';

class SignalingServer {
  constructor(port = 4562, sessionTimeout = 10 * 60 * 1000, pingInterval = 30 * 1000) {
    this.sessions = {}; // Stocke les sessions WebRTC par ID
    this.sessionTimeout = sessionTimeout;
    this.pingInterval = pingInterval;

    // Initialise le serveur WebSocket
    this.wss = new WebSocketServer({ port });
    this.wss.on('connection', this.handleConnection.bind(this));

    // Ping/Pong pour détecter les connexions mortes
    this.pingLoop = setInterval(this.checkHeartbeats.bind(this), this.pingInterval);

    this.wss.on('close', () => clearInterval(this.pingLoop));
  }

  // Gère une nouvelle connexion WebSocket
  handleConnection(ws, req) {
    const sessionId = req.url.slice(1); // /abc123 → abc123

    if (!this.sessions[sessionId]) {
      this.sessions[sessionId] = {
        candidates: [],
        timeout: null,
        sender: null,
        receiver: null,
      };
    }

    const session = this.sessions[sessionId];
    this.resetSessionTimeout(sessionId);

    // Marque la connexion comme vivante
    ws.isAlive = true;
    ws.on('pong', () => (ws.isAlive = true));

    // Associe la connexion au rôle sender ou receiver
    if (!session.sender) {
      session.sender = ws;
      ws.role = 'sender';
    } else {
      session.receiver = ws;
      ws.role = 'receiver';

      // Si l'offre est déjà reçue, l’envoyer au receiver
      if (session.offer) {
        session.receiver.send(JSON.stringify({ type: 'offer', sdp: session.offer }));
      }

      // Envoyer les ICE candidates déjà reçus
      for (const candidate of session.candidates) {
        session.receiver.send(JSON.stringify({ type: 'ice', candidate }));
      }
    }

    // Écoute les messages JSON envoyés par le client
    ws.on('message', (message) => {
      this.resetSessionTimeout(sessionId);
      let data;
      try {
        data = JSON.parse(message);
      } catch {
        return; // Ignore les messages invalides
      }

      if (data.type === 'offer') {
        session.offer = data.sdp;
        session.receiver?.send(JSON.stringify({ type: 'offer', sdp: data.sdp }));

      } else if (data.type === 'answer') {
        session.answer = data.sdp;
        session.sender?.send(JSON.stringify({ type: 'answer', sdp: data.sdp }));

      } else if (data.type === 'ice') {
        session.candidates.push(data.candidate);
        const target = ws.role === 'sender' ? session.receiver : session.sender;
        target?.send(JSON.stringify({ type: 'ice', candidate: data.candidate }));
      }
    });

    // Quand un client ferme sa connexion
    ws.on('close', () => {
      if (ws.role === 'sender') session.sender = null;
      if (ws.role === 'receiver') session.receiver = null;

      // Si plus personne n'est connecté à la session, on la supprime
      if (!session.sender && !session.receiver) {
        clearTimeout(session.timeout);
        delete this.sessions[sessionId];
      }
    });
  }

  // Vérifie les connexions encore actives via ping/pong
  checkHeartbeats() {
    this.wss.clients.forEach((ws) => {
      if (!ws.isAlive) {
        ws.terminate();
        return;
      }
      ws.isAlive = false;
      ws.ping(); // Envoie un ping pour vérifier la connexion
    });
  }

  // Définit ou redémarre le timer de session
  resetSessionTimeout(sessionId) {
    const session = this.sessions[sessionId];
    if (!session) return;

    if (session.timeout) clearTimeout(session.timeout);
    session.timeout = setTimeout(() => {
      session.sender?.close(4000, 'Session expired');
      session.receiver?.close(4000, 'Session expired');
      delete this.sessions[sessionId];
    }, this.sessionTimeout);
  }
}

// Lance le serveur sur le port 4562
new SignalingServer(4562);
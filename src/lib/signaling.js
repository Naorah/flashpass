import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8765 });
console.log('🚀 Signaling server running on ws://localhost:8765');

const sessions = {}; // sessionId: { sender, receiver, offer, answer, candidates: [] }

wss.on('connection', (ws, req) => {
  const url = req.url;
  const sessionId = url.slice(1); // /abc123 => abc123

  if (!sessions[sessionId]) {
    sessions[sessionId] = { candidates: [] };
  }

  const session = sessions[sessionId];

  // Détermine si c'est le sender ou le receiver
  if (!session.sender) {
    session.sender = ws;
    ws.role = 'sender';
  } else {
    session.receiver = ws;
    ws.role = 'receiver';
    // Si l'offer existe déjà, on le renvoie tout de suite au receiver
    if (session.offer) {
      session.receiver.send(JSON.stringify({
        type: 'offer',
        sdp: session.offer
      }));
    }

    // Et on envoie tous les ICE déjà reçus
    for (const candidate of session.candidates) {
      session.receiver.send(JSON.stringify({
        type: 'ice',
        candidate
      }));
    }
  }

  ws.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type === 'offer') {
      session.offer = data.sdp;
      if (session.receiver) {
        session.receiver.send(JSON.stringify({ type: 'offer', sdp: data.sdp }));
      }

    } else if (data.type === 'answer') {
      session.answer = data.sdp;
      if (session.sender) {
        session.sender.send(JSON.stringify({ type: 'answer', sdp: data.sdp }));
      }

    } else if (data.type === 'ice') {
      session.candidates.push(data.candidate);
      const target = ws.role === 'sender' ? session.receiver : session.sender;
      if (target) {
        target.send(JSON.stringify({ type: 'ice', candidate: data.candidate }));
      }
    }

  });

  ws.on('close', () => {
    if (ws.role === 'sender') session.sender = null;
    if (ws.role === 'receiver') session.receiver = null;
  });
});
import { createServer } from 'http';
import { handler } from './build/handler.js';
import { startSignalingServer } from './src/lib/signaling.js';

const server = createServer(handler);

// Démarre le signaling WebSocket
startSignalingServer(server);

// Écoute HTTP classique
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
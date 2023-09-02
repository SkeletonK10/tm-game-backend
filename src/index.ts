import express from "express";
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();

app.use(cors());

const httpServer = app.listen("8000", () => {
  console.log("Server listening on port 8000");
});

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);
  
  socket.on('message', (data) => {
    console.log(`User message: ${data}`);
  });
});

const express = require('express');
const app = express();
const ejs = require('ejs');

const net = require('net');

const server = net.createServer((socket) => {
  console.log('Peer connected');

  socket.on('data', (data) => {
    const [address, leader] = data.toString().split("|");
    console.log("Received leader:", address);
    console.log("Received address:", leader);
  });

  socket.on('close', () => {
    console.log('Peer disconnected');
  });
});

server.listen(3001, '127.0.0.1', () => {
  console.log('Node.js server listening on 127.0.0.1:3001');
});
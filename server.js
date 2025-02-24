"use strict"

const express = require("express");
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

//require("socket.io").listen(app);

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(join(join(__dirname, 'public'), 'index.html'));
});

io.on("connection", (socket) => {
	console.log(`> ${socket.id} connected`);

	socket.on("chat-msg", (data) => {
		console.log(`${socket.id}: "${data.msg}" (${data.author})`);	
		io.emit("chat-msg", data);
		//socket.broadcast.emit("chat-msg", msg);
	});

	socket.on("disconnect", () => {
		console.log(`> ${socket.id} disconnected`);
	})
});

httpServer.listen(port, () => {
	console.log(`Server running on *:${port}`);
});

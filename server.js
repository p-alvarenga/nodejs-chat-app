"use strict"

const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

//const routes = require(

const publicPath = path.join(__dirname, 'public')

app.get('/', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

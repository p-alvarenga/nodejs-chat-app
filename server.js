"use strict"

const express = require('express');
const path = require('path')
const app = express();
const port = 8000;

//const routes = require(
app.use(express.static('public'));

const publicPath = path.join(__dirname, 'public')

app.get('/', (req, res) => {
	res.sendFile(path.join(path.join(__dirname, 'public'), 'index.html'));
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

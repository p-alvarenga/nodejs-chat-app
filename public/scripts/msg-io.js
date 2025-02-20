"use strict"

const socket = io();

const $msg_form = document.getElementById("msg-form");

const $input__msg = document.getElementById("input-msg");
const $chat_box   = document.getElementById("chat-box");

$msg_form.addEventListener("submit", (ev) => {
	ev.preventDefault();
	submitMessage(); 
	$input__msg.value = '';
});


const submitMessage = () => {
	const msg = $input__msg.value;

	if (msg) {
		socket.emit("chat-msg", msg);
	}
}; 

socket.on("chat-msg", (msg) => {
	console.log(msg);
});

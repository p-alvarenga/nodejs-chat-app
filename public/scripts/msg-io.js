"use strict"

const socket = io();

const $msg_form = document.getElementById("msg-form");

const $input__username = document.getElementById("input-username");
const $input__msg = document.getElementById("input-msg");
const $chat_box   = document.getElementById("chat-box");

$msg_form.addEventListener("submit", (ev) => {
	ev.preventDefault();
	submitMessage(); 
	$input__msg.value = '';
});

const submitMessage = () => {
	const author = $input__username?.value;
	const msg = $input__msg.value;

	const data = {
		author:  author || 'anon', 
		msg: msg || "",
		id: socket.id || null
	};
	
	if (data) {
		socket.emit("chat-msg", data);
	}
}; 

socket.on("chat-msg", (data) => {
	const $msg_container = document.createElement("span");
	$msg_container.classList.add("msg");
	
	if (data.id === socket.id)
		$msg_container.classList.add("right")
	else 
		$msg_container.classList.add("left")

	$msg_container.innerHTML = `
		<h3>${data.author}</h3>
		<p>${data.msg}</p>
	`;

	$chat_box.appendChild($msg_container);
	$chat_box.scrollTo(0, $chat_box.scrollHeight)

	console.log(data.msg);
});

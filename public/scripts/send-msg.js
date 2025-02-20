const socket = io("localhost:3000/", {
	transports: [ "websocket" ]
});

const input_msg = document.getElementById("input-msg");
const btn_msg = document.getElementById("input-btn");

btn_msg.addEventListener("click", (ev) => handleSubmitMsg(ev));

input_msg.onkeydown = (ev) => {
	if (ev.key === 'Enter') {
		handleSubmitMsg();
	}
}

const handleSubmitMsg = () => {
	const msg = input_msg.value;

	if (!msg || msg === "") {
		return null;
	}

	submitMsg(msg); 
	input_msg.value = '';

	return null;
}

const submitMsg = (msg) => {
	if (msg) {
		socket.emit('chat-msg', msg);
	}
	return null;
} 

const chatButton = document.getElementById("chatButton");
const chatBox = document.getElementById("chatBox");
const startChatButton = document.getElementById("startChat");
const closeChatButton = document.getElementById("closeChat");

chatButton.addEventListener("click", () => {
	chatBox.style.display = "block";
});

startChatButton.addEventListener("click", () => {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;

	if (name !== "" && email !== "") {
		alert(`Starting chat with ${name} (${email})`);
		chatBox.style.display = "none";
	} else {
		alert("Please enter name and email to start chat.");
    }
    });
    
    closeChatButton.addEventListener("click", () => {
    chatBox.style.display = "none";
    });

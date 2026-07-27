function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const message = input.value.trim();

  if (message === "") return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "user";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  input.value = "";

  // Bot reply
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot";

    let reply = "Sorry, I don't understand.";

    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
      reply = "Hello! 👋 Welcome to NexaAI.";
    } else if (text.includes("how are you")) {
      reply = "I'm doing great! How can I help you?";
    } else if (text.includes("your name")) {
      reply = "My name is NexaAI.";
    } else if (text.includes("bye")) {
      reply = "Goodbye! Have a nice day.";
    }

    botMsg.textContent = reply;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}

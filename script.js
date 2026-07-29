async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const message = input.value.trim();
  if (!message) return;

  // User Message
  const userDiv = document.createElement("div");
  userDiv.className = "user";
  userDiv.textContent = message;
  chatBox.appendChild(userDiv);

  input.value = "";

  // Bot Loading
  const botDiv = document.createElement("div");
  botDiv.className = "bot";
  botDiv.textContent = "Typing...";
  chatBox.appendChild(botDiv);

  chatBox.scrollTop = chatBox.scrollHeight;

  try {
        const API_KEY = "AIzaSy................................";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text:
                    "You are NexaAI. Understand Urdu, Hindi and English. Reply in the same language as the user.\n\nUser: " +
                    message
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (data.error) {
      botDiv.textContent = "Error: " + data.error.message;
      return;
    }

    botDiv.textContent =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AI.";

    chatBox.scrollTop = chatBox.scrollHeight;

  } catch (err) {
    botDiv.textContent = "Connection Error!";
    console.error(err);
  }
}

// Enter key support
document.getElementById("userInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});


async function sendMessage() {
  const message = document.getElementById("userInput").value;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=YOUR_API_KEY",
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
                text: "You are NexaAI. Reply in the same language as the user. Understand Urdu, Hindi, and English.\n\nUser: " + message
              }
            ]
          }
        ]
      })
    }
  );

  const data = await response.json();

  const reply =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response";
}

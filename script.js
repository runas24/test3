const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
    const question = userInput.value.trim();
    if (question !== "") {
        addMessage("user", question);
        getChatGPTResponse(question);
        userInput.value = "";
    }
}

function addMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = `<strong>${sender}: </strong>${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getChatGPTResponse(question) {
    const apiKey = "sk-proj-K50ad3mNqPifd08rsIu0T3BlbkFJ3dwbQwYLFThn9coUZNaZ";
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
    };
    const data = {
        "model": "text-davinci-003",
        "messages": [
            {
                "role": "system",
                "content": "User: " + question
            }
        ]
    };

    fetch(endpoint, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        const answer = data.choices[0].message.content;
        addMessage("ChatGPT", answer);
    })
    .catch(error => {
        console.error("Error:", error);
        addMessage("ChatGPT", "Произошла ошибка при получении ответа.");
    });
}

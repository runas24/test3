async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage('user', userInput);

    const response = await getChatGPTResponse(userInput);
    appendMessage('bot', response);

    document.getElementById('user-input').value = '';
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('chat-message', sender);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getChatGPTResponse(input) {
    const response = await fetch('sk-proj-K50ad3mNqPifd08rsIu0T3BlbkFJ3dwbQwYLFThn9coUZNaZ', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-proj-K50ad3mNqPifd08rsIu0T3BlbkFJ3dwbQwYLFThn9coUZNaZ' // Замените YOUR_API_KEY на ваш ключ API
        },
        body: JSON.stringify({
            input: input
        })
    });

    const data = await response.json();
    return data.output;
}

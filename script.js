const apiKey = 'sk-proj-K50ad3mNqPifd08rsIu0T3BlbkFJ3dwbQwYLFThn9coUZNaZ';
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    
    if (userInput.trim() === '') {
        return;
    }
    
    appendMessage('user', userInput);
    document.getElementById('user-input').value = '';
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: userInput,
                max_tokens: 150
            })
        });
        
        const data = await response.json();
        const botResponse = data.choices[0].text.trim();
        appendMessage('bot', botResponse);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

function appendMessage(sender, message) {
    const chatDisplay = document.getElementById('chat-display');
    const messageElement = document.createElement('div');
    
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    
    chatDisplay.appendChild(messageElement);
}

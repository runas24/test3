var bot = new ChatGPT();

// Установка API-ключа
bot.setAPIKey('sk-proj-K50ad3mNqPifd08rsIu0T3BlbkFJ3dwbQwYLFThn9coUZNaZ');

// Настройка параметров бота
bot.setOptions({
    model: 'gpt-3.5-turbo',
    // Другие параметры настройки…
});

// Функция для отправки сообщения пользователя и получения ответа от бота
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        var chatBox = document.getElementById('chat-box');
        chatBox.innerHTML += '<div class="user-message">' + userInput + '</div>';
        var response = bot.sendMessage(userInput);
        chatBox.innerHTML += '<div class="bot-message">' + response + '</div>';
        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById('user-input').value = '';
    }
}

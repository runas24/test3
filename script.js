// Создание экземпляра бота с установкой API ключа
var bot = new ChatGPT('sk-proj-K50ad3mNqPifd08rsIu0T3BlbkFJ3dwbQwYLFThn9coUZNaZ');

// Функция для отправки сообщения пользователя и получения ответа от бота
// Функция для отправки сообщения пользователя и получения ответа от бота
async function sendMessage() {
    var userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        var chatBox = document.getElementById('chat-box');
        chatBox.innerHTML += '<div class="user-message">' + userInput + '</div>';
        try {
            var response = await bot.sendMessage(userInput);
            chatBox.innerHTML += '<div class="bot-message">' + response + '</div>';
        } catch (error) {
            console.error('Ошибка при отправке сообщения:', error);
            chatBox.innerHTML += '<div class="bot-message">Извините, возникла ошибка при обработке запроса.</div>';
        }
        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById('user-input').value = '';
    }
}

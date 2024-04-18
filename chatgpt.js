class ChatGPT {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.options = {
            model: 'gpt-3.5-turbo',
            // Другие параметры настройки…
        };
    }

    async sendMessage(message) {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    message: message,
                    options: this.options
                })
            };

            const response = await fetch('https://api.chatgpt.com/ask', requestOptions);
            const responseData = await response.json();

            if (responseData.error) {
                throw new Error(responseData.error);
            }

            return responseData.response;
        } catch (error) {
            console.error('Ошибка при отправке запроса к API ChatGPT:', error);
            throw error;
        }
    }
}

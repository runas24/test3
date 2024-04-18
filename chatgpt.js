class ChatGPT {
    constructor() {
        this.apiKey = null;
        this.options = {};
    }

    setAPIKey(apiKey) {
        this.apiKey = apiKey;
    }

    setOptions(options) {
        this.options = options;
    }

    sendMessage(message) {
        return new Promise((resolve, reject) => {
            if (!this.apiKey) {
                reject('API ключ не установлен');
                return;
            }

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

            fetch('https://api.chatgpt.com/ask', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        reject(data.error);
                    } else {
                        resolve(data.response);
                    }
                })
                .catch(error => reject(error));
        });
    }
}

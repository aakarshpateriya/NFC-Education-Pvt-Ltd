document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', function() {
        sendMessage();
    });

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            displayMessage('user', userMessage);
            userInput.value = '';
            // Simulate bot response (replace with actual bot logic)
            setTimeout(function() {
                displayMessage('bot', generateBotResponse(userMessage));
            }, 500); // Delay for bot response (simulated)
        }
    }

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.innerHTML = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }

    function generateBotResponse(userMessage) {
        // Replace with your actual bot logic
        return "Sorry, I'm just a demo bot. I can't provide real responses.";
    }
});

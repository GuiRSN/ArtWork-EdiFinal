$(document).ready(function() {
    const userList = document.querySelectorAll('.user-list li');
    const chatMessages = document.querySelector('.chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    userList.forEach(user => {
        user.addEventListener('click', () => {
            userList.forEach(u => u.classList.remove('active-user'));
            user.classList.add('active-user');
            chatMessages.innerHTML = ''; // Limpa as mensagens ao trocar de usuário (você pode implementar uma lógica mais avançada para preservar mensagens)
        });
    });

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value;
        if (messageText) {
            const activeUser = document.querySelector('.active-user');
            if (activeUser) {
                const messageElement = document.createElement('div');
                messageElement.textContent = messageText;
                chatMessages.appendChild(messageElement);
                messageInput.value = '';
            }
        }
    });
});

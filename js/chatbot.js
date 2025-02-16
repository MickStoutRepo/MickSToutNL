// Bishmillah

document.getElementById('sendButton').addEventListener('click', function() {
    handleUserInput();
});

document.getElementById('chatInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

let step = 0;
let userData = {};

function handleUserInput() {
    const input = document.getElementById('chatInput').value;
    document.getElementById('chatInput').value = '';
    if (input.trim() === '') return;

    const chatContent = document.getElementById('chatContent');
    chatContent.innerHTML += `<div class="user-message">${input}</div><br>`;
    chatContent.scrollTop = chatContent.scrollHeight;

    switch (step) {
        case 0:
            userData.name = input;
            chatContent.innerHTML += `<div class="bot-message">Hallo ${userData.name}, wat is je reden van contact?</div>`;
            break;
        case 1:
            userData.reason = input;
            chatContent.innerHTML += `<div class="bot-message">Bedankt! Wat is je e-mailadres?</div>`;
            break;
        case 2:
            userData.email = input;
            chatContent.innerHTML += `<div class="bot-message">En wat is je telefoonnummer?</div>`;
            break;
        case 3:
            userData.phone = input;
            chatContent.innerHTML += `<div class="bot-message">Bedankt voor de informatie! We nemen snel contact met je op.</div>`;
            sendEmail(userData);
            break;
    }
    step++;
}

function sendEmail(data) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('reason', data.reason);
    formData.append('email', data.email);
    formData.append('phone', data.phone);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        console.log('E-mail verzonden:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('visible');
    if (chatbot.classList.contains('visible')) {
        document.getElementById('chatContent').innerHTML = '<div class="bot-message">Hallo! Wat is je naam?</div>';
        step = 0;
        userData = {};
    }
}

// Elhamdulillah
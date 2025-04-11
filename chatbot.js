const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const closeChat = document.getElementById('close-chat');
const chatIcon = document.getElementById('chat-icon');
const chatbotContainer = document.getElementById('chatbot-container');

// Predefined responses
const responses = {
    "what is markedium": "Markedium is a platform that helps brands tell their stories through digital storytelling.",
    "how does markedium work": "Markedium works by crafting compelling brand stories using data-driven insights.",
    "what services does markedium offer": "We offer branding strategies, digital storytelling, social media management, and content creation.",
    "who can use markedium": "Markedium is designed for brands, marketers, and businesses looking to enhance their didital presence.",
    "what is the cost of markedium": "The cost of markedium varies based on the services you choose. please contact us for a quote.",
    "how can i get started with markedium": "You can get started by contacting us through our website or signing up for a consultation.",
    "default": "I'm sorry, I don't have an answer for that. Please contact our support team for more information."
};

// Function to add a message to the chat
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
}

// Handle user input
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage) {
        addMessage(userInput.value, 'user');
        userInput.value = '';

        // Get bot response
        const botResponse = responses[userMessage] || responses["default"];
        setTimeout(() => addMessage(botResponse, 'bot'), 500);
    }
});

// Open chatbot when chat icon is clicked
chatIcon.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
});

// Close chatbot when close button is clicked
closeChat.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
});
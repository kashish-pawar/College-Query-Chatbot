// Event listener for send button
    document.getElementById('send-btn').addEventListener('click', sendMessage);

    function sendMessage() {
      const input = document.getElementById('user-input');
      const message = input.value.trim();
      if (message === '') return;

      addMessage('You', message);         // Show user message
      addMessage('Bot', getAnswer(message)); // Get and show bot reply
      input.value = '';                   // Clear input
    }


    function addMessage(sender, text) {
      const chatBox = document.getElementById('chat-box');
      const messageDiv = document.createElement('div');
      messageDiv.className = sender === 'Bot' ? 'bot-message' : 'user-message';
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      messageDiv.innerHTML = `
        ${sender === 'Bot'
          ? `<img src="./images/good-colleges.webp" alt="Bot" />`
          : `<img src="./images/men.jpg" alt="User" />`}
        <div class="message-content">
          ${sender === 'Bot' ? `<p class="bot-name">GPCK ChatBot</p>` : ''}
          <p>${text}</p>
          <span class="time">${time}</span>
        </div>
      `;

      chatBox.appendChild(messageDiv);
       // Smooth scroll here
  chatBox.scrollTo({
    top: chatBox.scrollHeight,
    behavior: 'smooth'
  });
}


   function getAnswer(question) {
  const msg = question.toLowerCase();

  // First try exact match (includes)
  for (const pair of qaPairs) {
    if (msg.includes(pair.question.toLowerCase())) {
      return pair.answer;
    }
  }

  // If no exact match, try keyword matching by splitting question into words and check any word present
  for (const pair of qaPairs) {
    const words = pair.question.toLowerCase().split(/\W+/); // split by non-word chars
    for (const word of words) {
      if (word.length > 3 && msg.includes(word)) { 
        // ignore very small words like "is", "to", "in"
        return pair.answer;
      }
    }
  }

  return "Sorry, I couldn't understand your question. Please ask something else.";
}

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevents default form submission
        document.getElementById("send-btn").click();  // Trigger send
    }
});

  // Open modal on nav link click
document.querySelector('a[data-section="about"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('aboutModal').style.display = 'flex';
});

// Close modal on button or X
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.getElementById('aboutModal').style.display = 'none';
  });
});

// Click outside to close
window.onclick = function (event) {
  const modal = document.getElementById('aboutModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");

  // Change icon ☰ <-> ✖
  if (this.textContent === "☰") {
    this.textContent = "✖";
  } else {
    this.textContent = "☰";
  }
});

document.getElementById("logout-btn").addEventListener("click", function () {
  console.log("Logging out...");

  // Chatbot band karo
  document.getElementById("chatbot-container").style.display = "none";
});

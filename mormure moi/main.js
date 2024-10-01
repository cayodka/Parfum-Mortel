const textArea = document.querySelector("#text-area");
const chat = document.querySelector("#chat-container")

textArea.addEventListener('keydown', (e) => {
    if (e.key === "Enter"){
        const mensagem = document.createElement("div");
        mensagem.textContent = textArea.value;

        chat.appendChild(mensagem)
        textArea.value = '';
    }
})

function scrollToBottom() {
    var chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

var chatContainer = document.getElementById('chat-container');
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        scrollToBottom();
      });
    });

observer.observe(chatContainer, { childList: true });
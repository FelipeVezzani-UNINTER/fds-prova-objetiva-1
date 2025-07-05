// JavaScript – adicionar um botão para interagir com a página 
// Criar um botão abaixo do parágrafo com o texto "Clique para ver uma mensagem!". 
// Quando o usuário clicar, uma mensagem (por exemplo uma frase de motivação,  saudação, boas vindas, etc.) deverá aparecer abaixo do botão.
const messageButton = document.getElementById('messageButton');
const messageContainer = document.getElementById('messageContainer');

function showMessage() {
    if (messageContainer.textContent) {
        messageContainer.textContent = '';
        return;
    }
    messageContainer.textContent = 'Bem-vindo! Continue aprendendo e construindo coisas incríveis.';
}

messageButton.addEventListener('click', showMessage);
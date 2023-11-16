// Obtém o elemento da lista dinâmica pelo seu ID
let lista = document.getElementById("listaDinamica");

// Laço para adicionar 5 itens à lista
for (let i = 1; i <= 5; i++) {
    let listItem = document.createElement("li"); // Cria um novo elemento de lista (li)
    listItem.textContent = "Item " + i; // Define o texto do item da lista
    lista.appendChild(listItem); // Adiciona o item à lista
}

// Adiciona um ouvinte de eventos ao novo botão para mudar a cor de fundo
document.getElementById("botaoMudarFundo").addEventListener("click", function() {
    var container = document.querySelector(".container"); // Obtém o elemento container
    // Alterna a cor de fundo para vermelho
    if(container.style.backgroundColor === "red") {
        container.style.backgroundColor = ""; // Reseta a cor de fundo se já for vermelha
    } else {
        container.style.backgroundColor = "red"; // Muda a cor de fundo para vermelho
    }
});

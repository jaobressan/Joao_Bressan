// Obtém o elemento da lista dinâmica pelo seu ID
let lista = document.getElementById("listaDinamica");

// Laço para adicionar 5 itens à lista
for (let i = 1; i <= 5; i++) {
    let listItem = document.createElement("li"); // Cria um novo elemento de lista (li)
    listItem.textContent = "Item " + i; // Define o texto do item da lista
    lista.appendChild(listItem); // Adiciona o item à lista
}

// Adiciona um ouvinte de eventos ao botão para mudar a cor do título
document.getElementById("botaoMudarCor").addEventListener("click", function() {
    var titulo = document.getElementById("titulo"); // Obtém o elemento do título
    // Verifica se o título já tem a classe 'corVermelha'
    if(titulo.classList.contains("corVermelha")) {
        titulo.classList.remove("corVermelha"); // Remove a classe se estiver presente
    } else {
        titulo.classList.add("corVermelha"); // Adiciona a classe se não estiver presente
    }
});
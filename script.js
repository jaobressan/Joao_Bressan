// Adiciona um segundo ouvinte de eventos ao mesmo botão para alternar a animação de arco-íris
document.getElementById("botaoMudarCor").addEventListener("click", function() {
    var titulo = document.getElementById("titulo"); // Obtém o elemento do título novamente
    titulo.classList.toggle("rainbow-text"); // Alterna a classe 'rainbow-text' (animação de arco-íris)
});

// Adiciona um ouvinte de eventos ao botão para mostrar/ocultar a lista
document.getElementById("botaoMostrarLista").addEventListener("click", function() {
    var lista = document.getElementById("listaDinamica"); // Obtém o elemento da lista
    // Alterna a exibição da lista entre visível e oculta
    lista.style.display = lista.style.display === "block" ? "none" : "block";
});
// Obtém a data atual e insere no rodapé
const data = new Date();
document.getElementById("data").textContent = data.getFullYear();

// Função para abrir o modal
function openModal(img) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("img01").src = img.src;
}

// Função para fechar o modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    document.getElementById("modal").style.display = "none";
}
function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const escolaridade = document.getElementById('escolaridade').value;
    const cidade = document.getElementById('cidade').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = `Obrigado, ${nome}, por responder ao formulário!`;
}
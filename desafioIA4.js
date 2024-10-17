const formulario = document.getElementById('calculadora');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const valor = parseFloat(document.getElementById('valor').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const meses = parseInt(document.getElementById('meses').value);

    if (meses) {
        let valorFinal = valor;
        for (let i = 0; i < meses; i++) {
            valorFinal += valorFinal * taxa;
        }

        resultado.textContent = `O valor total da dívida após ${meses} meses será de R$ ${valorFinal.toFixed(2)}`;
    } else {
        resultado.textContent = 'Por favor, informe o número de meses.';
    }
});
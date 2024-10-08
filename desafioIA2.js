const imagens = document.querySelectorAll('.imagem');

imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        imagens.forEach(img => img.classList.remove('ativa'));
        imagem.classList.add('ativa');
    });
});
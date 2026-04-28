document.getElementById('position-button').addEventListener('click', function() {
    const imageContainer = document.getElementById('image-container');
    const images = [
        'imagen/mesa/sexo/1.png',
        'imagen/mesa/sexo/2.png',
        'imagen/mesa/sexo/3.png',
        'imagen/mesa/sexo/4.png',
        'imagen/mesa/sexo/5.png',
        'imagen/mesa/sexo/6.png',
        'imagen/mesa/sexo/7.png',
        'imagen/mesa/sexo/8.png',
        'imagen/mesa/sexo/9.png'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    imageContainer.innerHTML = `<img src="${randomImage}" alt="Posición" style="width: 100%; height: 100%; object-fit: cover;">`;
});
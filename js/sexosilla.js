document.getElementById('position-button').addEventListener('click', function() {
    const imageContainer = document.getElementById('image-container');
    const images = [
        'imagen/silla/sexo/1.png',
        'imagen/silla/sexo/2.png',
        'imagen/silla/sexo/3.png',
        'imagen/silla/sexo/4.png',
        'imagen/silla/sexo/5.png',
        'imagen/silla/sexo/6.png',
        'imagen/silla/sexo/7.png',
        'imagen/silla/sexo/8.png',
        'imagen/silla/sexo/9.png'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    imageContainer.innerHTML = `<img src="${randomImage}" alt="Posición" style="width: 100%; height: 100%; object-fit: cover;">`;
});
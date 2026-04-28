document.getElementById('position-button').addEventListener('click', function() {
    const imageContainer = document.getElementById('image-container');
    const images = [
        'imagen/cama/sexo/1.png',
        'imagen/cama/sexo/2.png',
        'imagen/cama/sexo/3.png',
        'imagen/cama/sexo/4.png',
        'imagen/cama/sexo/5.png',
        'imagen/cama/sexo/6.png',
        'imagen/cama/sexo/7.png',
        'imagen/cama/sexo/8.png',
        'imagen/cama/sexo/9.png'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    imageContainer.innerHTML = `<img src="${randomImage}" alt="Posición" style="width: 100%; height: 100%; object-fit: cover;">`;
});

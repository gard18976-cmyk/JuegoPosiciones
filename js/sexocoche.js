document.getElementById('position-button').addEventListener('click', function() {
    const imageContainer = document.getElementById('image-container');
    const images = [
        'imagen/coche/sexo/1.png',
        'imagen/coche/sexo/2.png',
        'imagen/coche/sexo/3.png',
        'imagen/coche/sexo/4.png',
        'imagen/coche/sexo/5.png',
        'imagen/coche/sexo/6.png',
        'imagen/coche/sexo/7.png',
        'imagen/coche/sexo/8.png',
        'imagen/coche/sexo/9.png'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    imageContainer.innerHTML = `<img src="${randomImage}" alt="Posición" style="width: 100%; height: 100%; object-fit: cover;">`;
});
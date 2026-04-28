document.getElementById('position-button').addEventListener('click', function() {
    const imageContainer = document.getElementById('image-container');
    const images = [
        'imagen/baño/sexo/1.png',
        'imagen/baño/sexo/2.png',
        'imagen/baño/sexo/3.png',
        'imagen/baño/sexo/4.png',
        'imagen/baño/sexo/5.png',
        'imagen/baño/sexo/6.png',
        'imagen/baño/sexo/7.png',
        'imagen/baño/sexo/8.png',
        'imagen/baño/sexo/9.png'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    imageContainer.innerHTML = `<img src="${randomImage}" alt="Posición" style="width: 100%; height: 100%; object-fit: cover;">`;
});
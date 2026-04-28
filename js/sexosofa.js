document.getElementById('position-button').addEventListener('click', function() {
    const imageContainer = document.getElementById('image-container');
    const images = [
        'imagen/sofa/sexo/1.png',
        'imagen/sofa/sexo/2.png',
        'imagen/sofa/sexo/3.png',
        'imagen/sofa/sexo/4.png',
        'imagen/sofa/sexo/5.png',
        'imagen/sofa/sexo/6.png',
        'imagen/sofa/sexo/7.png',
        'imagen/sofa/sexo/8.png',
        'imagen/sofa/sexo/9.png'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    imageContainer.innerHTML = `<img src="${randomImage}" alt="Posición" style="width: 100%; height: 100%; object-fit: cover;">`;
});
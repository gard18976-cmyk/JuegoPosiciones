const cuadro = document.getElementById("cuadro");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {

  // número aleatorio entre 1 y 60
  const numeroAleatorio = Math.floor(Math.random() * 30) + 1;

  // ruta de la imagen
  const ruta = `imagen/cama/sexo/${numeroAleatorio}.png`;

  // limpiar cuadro
  cuadro.innerHTML = "";

  // crear imagen
  const img = document.createElement("img");
  img.src = ruta;
  img.style.width = "100%";
  img.style.height = "100%";

  cuadro.appendChild(img);
});
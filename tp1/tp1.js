//Melani Bello
//122608/5
//https://youtu.be/aQ6hz-0ijAE

let poArt, aumentarCuadraditos, colorCuadraditos, transparencia;

function preload() {
  poArt= loadImage('data/poArt.jpg');
}

function setup() {
  createCanvas(800, 400);
  reiniciar();
}

function draw() {
  background(255);
  image(poArt, 0, 0, 400, 400);
  transparencia = map( mouseX, 0, width, 0, 255);
  funcionFondo(0, 0, 50, aumentarCuadraditos);
  

}


function reiniciar() {
  aumentarCuadraditos = 8;
  colorCuadraditos = color(255);
}

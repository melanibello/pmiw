//Melani Bello y Ludmila Gomez
//tpfinalparte2
//link: https://www.youtube.com/watch?v=ZfkPLehQQiI

let fondo, ataque, dragon, caballero, inicio, tutorial, ganaste, perdiste, creditos;

let principal;

let fuego, musica;


function preload() {
  inicio = loadImage('data/inicio.jpg');
  fondo=loadImage('data/fondo.png');
  ataque=loadImage('data/ataque.png');
  caballero=loadImage('data/caballero.png');
  dragon=loadImage('data/dragon.png');
  tutorial=loadImage('data/tutorial.jpg');
  perdiste=loadImage('data/perdiste.jpg');
  ganaste=loadImage('data/ganaste.jpg');
  creditos=loadImage('data/creditos.jpg');
  
  fuego=loadSound('data/fuego.mp3');
  musica=loadSound('data/musica.mp3');
}

function setup() {
  createCanvas(640, 480);
  principal = new Juego(6);
  principal = new Estados();
}

function draw() {
  background(200);
  principal.dibujar();
}
function keyPressed() {
  principal.teclaPresionada(keyCode); //funciona solo dentro de keypressed
}

function mousePressed(){
principal.estadosPantallas();
} 

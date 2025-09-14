//los clicks inician el conteo de cuadrados
//cualquier tecla les agrega color y la "r" reinicia todo
function keyPressed() {
  if (key == 'r' || key == 'R') {
    reiniciar(); // vuelve todo al estado inicial
  } else {
    colorCuadraditos = color(0, 0, 255); // azulcito
  }
}


function mousePressed() {
  aumentarCuadraditos++;
  if (aumentarCuadraditos > 8) {
    aumentarCuadraditos = 1;
  }
}
function calcularCentro(tam) {
  return tam / 2.0;
}

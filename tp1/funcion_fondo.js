function funcionFondo(posX, posY, tam, cantidad) {
translate (400, 0);
  for (X=0; X<cantidad; X++) {
    for (Y=0; Y<cantidad; Y++) {
      let x = posX + X * tam;
      let y = posY + Y  * tam;
      let centro = calcularCentro(tam)

        fill(200);
      rect(x, y, tam, tam);

      fill(0);
      quad(x+ tam/2, y, x+tam/2, y+tam/2, x, y+tam, x, y+tam/2);
      quad(x+tam/2, y+tam/2, x+tam, y+tam/2, x+tam/2, y+tam, x, y+tam);

      fill(colorCuadraditos, transparencia); // de blanco a azulcito
      rect(x + 25, y, tam / 2, tam / 2);

      fill(0);
      quad(x + centro, y, x + centro, y + centro, x, y + tam, x, y + centro);
    }
  }
}

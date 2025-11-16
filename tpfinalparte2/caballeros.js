class Caballeros {

  constructor(X, Y) {
    this.X = X;
    this.Y = Y;
    this.ancho = 70;
    this.alto = 90;
    this.velocidad = random(1.2, 2);
    this.vidaCaballeros = true;    
  }

  dibujar() {
    if (this.vidaCaballeros) {      
      image(caballero, this.X, this.Y, this.ancho, this.alto);
    }
  }

  movimiento() {
    if (this.vidaCaballeros) {      
      this.Y += this.velocidad;
    }
  }

  choqueAtaque(ataque) {
    if (dist(this.X, this.Y, ataque.X, ataque.Y) < 45) {
      this.vidaCaballeros = false;
    }
  }
}

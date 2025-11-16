class Dragon {
  constructor() {
    this.X = width/2;
    this.Y = 340;
    this.ancho = 140;
    this.alto = 140;
    this.ataque = new Ataque();
    this.fuego = fuego;
  }

  dibujar() {
    this.ataque.dibujar();
    image(dragon, this.X, this.Y, this.ancho, this.alto);
  }

  accionTeclado() {
    if (keyIsDown(LEFT_ARROW)) this.moverIzquierda();
    else if (keyIsDown(RIGHT_ARROW)) this.moverDerecha();
  }
  
  sonidoEscupir(){
  this.fuego.play(); 
  }

  teclaPresionada(keyCode) {
    if (keyCode === 32) {   
      this.sonidoEscupir();
      this.escupir();
    }
  }

  moverDerecha() {
    this.X += 6;
    if (this.X + this.ancho > width) this.X = width - this.ancho;
  }

  moverIzquierda() {
    this.X -= 6;
    if (this.X < 0) this.X = 0;
  }

  escupir() {
    this.ataque = new Ataque(this.X + 40, this.Y);
    this.ataque.escupir();
  }

  escupio() {
    return this.ataque.escupido;
  }
}

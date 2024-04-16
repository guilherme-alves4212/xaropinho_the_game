function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
  print("Ajude o Xaropinho a chegar ao SBT!");
}

function draw() {
  //alert ("Xaropinho precisa ir ao trabalho, ajude-o a atravessar a rua.")
  background(imagemDaEstrada);
  image(imagemDoSBT, 100, 5, 25, 25);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosition();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
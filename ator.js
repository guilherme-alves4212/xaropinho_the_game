//ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 6;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if (yPodeMover()){
    yAtor += 6;
    }
  }

  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 6;
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 6;
    }
}

function verificaColisao(){
  for (let i = 0; i < imagemDoCarro.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtor();
      somDaColisao.play();
        if (pontosNegativos()){
          meusPontos -= 1;
        }
    }
  }
}

function voltaAtor(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25);
  fill(color(78, 222, 39))
  text(meusPontos, width / 3, 26);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtor();
    somDoPonto.play();
  }
}

function pontosNegativos(){
  return meusPontos > 0;
    
}

function yPodeMover(){
  return yAtor < 366;
}
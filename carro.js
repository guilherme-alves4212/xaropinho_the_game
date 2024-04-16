//lista carros

let xCarro = [600, 600, 600, 600, 600, 600]
let yCarro = [40, 96, 150, 210, 262, 318]
let velocidadeCarro = [5, 3.3, 9, 7, 2.5, 4.5]
let comprimentoCarro = 50;
let alturaCarro = 40;

//movimento carro
function mostraCarro(){
  for (let i = 0; i < imagemDoCarro.length; i++ )
    image(imagemDoCarro[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro); 
}

function movimentaCarro(){
  for (let i = 0; i < imagemDoCarro.length; i++ )
    xCarro[i] -= velocidadeCarro[i];
}

function voltaPosition(){
  for (let i = 0; i < imagemDoCarro.length; i++ )
  if(passouATela(xCarro[i])){
    xCarro[i] = 600;     
  }
}

function passouATela(xCarro){
  return xCarro < - 50;
}
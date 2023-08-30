
function setup() {

createCanvas(400, 400);

}

function draw() {

background("white");

fill("black");

textSize(64);

textAlign(CENTER, CENTER);

let maximo = width;

let minimo = 0;

let palavra = "Caminhante";

// o número é responsável por deixar ao menos um caractere na

// tela mesmo com a posição do mouse em 0

let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);

// passando todos os caracteres da posição 0 até a passada pelo map

let parcial = palavra.substring(0, quantidade)

text(parcial, 200, 200)

}

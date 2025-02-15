let frutas = ["manzana", "naranja", "banana", "manzana", "pera", "naranja", "manzana"];

let cantidadFrutas = {};

let i = 0;

while (i < frutas.length) {
    let fruta = frutas[i];

if (cantidadFrutas[fruta]) {
    cantidadFrutas[fruta]++;
} else {
        cantidadFrutas[fruta] = 1;
}
    
    i++;
}

console.log(cantidadFrutas);
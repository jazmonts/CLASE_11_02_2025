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

//Ahora el mismo ejercio pero utilizando for

let fruts = ["manzana", "naranja", "banana", "manzana", "pera", "naranja", "manzana"];

let quantifyFruits = {};

for (let i = 0; i < fruts.length; i++) {
    let Fruta = fruts[i];
    
    if (quantifyFruits[Fruta]) {
        quantifyFruits[Fruta]++;
    } else {
        quantifyFruits[Fruta] = 1;
    }
}

console.log(quantifyFruits);

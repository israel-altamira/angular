
// el indice esta basado en O -- 0-based-index
// tienen el estilo de accesarlos como propiedades --- access-property style ---
// accesso como constantes Animals.monkey
enum Animals {cat, lion, dog, cow, monkey}
let c: Animals = Animals.cat;

console.log(Animals[3]); // cow
console.log(Animals.monkey); // 4

enum Playeras { COTTON, NYLON , PLASTIC, FABRIC}
console.log(Playeras.COTTON);

// -- cuales son sus propiedades?????
//  .value() ???
//


// Alteramos la numeracion . incremento en uno
// podemos asignar manualmente los valores a los miembros (dog=11)
enum Animals {cat = 1000, lion, dog = 11, cow, monkey}
let c: Animals = Animals.cat;

console.log(Animals[3]); // undefined
console.log(Animals.monkey); // 13


//EJERCICIO 1//

/* let fruta1 = [];
let fruta;


for(let i=0;i<5;i++) {
    fruta = prompt("Ingrese una fruta");
    fruta1.push(fruta);
} 

console.log(fruta1);


let fruta2 = [];
let frut;

do {
    frut = prompt("Ingrese una fruta. Para finalizar ingrese ´E´");
    fruta2.push(frut);
} while (frut !== "E" && frut !== "e");

console.log(fruta2);

fruta3 = fruta1.concat(fruta2);

console.log(fruta3);

fruta4 = fruta2.concat(fruta1);

console.log (fruta4);  


//EJERCICIO 2//

let ciudades = ["Buenos Aires","La Plata","Rosario","Mar del Plata","Posadas","Ushuaia","Viedma","Puerto Madryn","Bahía Blanca","Comodoro Rivadavia"];

numero = parseInt(prompt("Ingrese un número del 0 al 9"));

if(numero>=0 && numero<=9) {
    console.log(ciudades[numero]);
} else{
    alert("El número ingresado no es válido");
}  


//EJERCICIO 3//

let ciudades = ["Buenos Aires","La Plata","Rosario","Mar del Plata","Posadas","Ushuaia","Viedma","Puerto Madryn","Bahía Blanca","Comodoro Rivadavia"];
let numero = prompt("Ingrese un número");

for(let i=0;i<numero;i++){
    ciudades.shift(i);
}  alert(ciudades); 

for(let i=0;i<numero;i++){
    ciudades.pop(i);
} alert(ciudades);  


//EJERCICIO 4//

let artistas = ["Drake","Snoop Dog","Eminem","2Pac","50 Cent","Kanye West","Dr Dre","Eazy-e"];

console.log(artistas.length); //a

console.log(artistas.lenght-1); //b

for(let i=0;i<8;1++) {
    if(i%%2===0) {
        alert(artistas[i]);
    }
}                               //c

console.log(artistas); //d

console.log(artistas.pop()); //e

console.log(artistas.shift()); //f  

console.log(artistas.join(*));  //g

let artista = prompt("Ingrese un nuevo artista");
artistas[7] = artista;
console.log(artistas);                             //h    */


//EJERCICIO 5//

let numeros = [1,2,3,4,5,6,7,8];

console.log(numeros.length); //a

for(let i=0;i<numeros.length;i++){
    if(i%2!==0) {
        console.log(numeros[i]);
    }
}                                  //b

for(let i=0;i<numeros.length;i++){
    if(numeros[i]%2!==0){
        console.log(numeros[i]);
    }
}                                 //c

let mayor = 0;

for(let i=0;i<numeros.length;i++){
    if(numeros[i]>mayor){
        mayor = numeros[i];
    }
} console.log("El número mayor es " + mayor);    //d

let mitad;

for(let i=0;i<numeros.length;i++){

} mitad = i/2;

console.log("La mitad es " + mitad);

for(let i=0;i<mitad;i++){
    console.log("Los numeros que están a la mitad son " + numeros);   //e
}



























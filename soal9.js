const prompt = require('prompt-sync')({sigint: true});
console.log('Rumus Persegi Panjang');
console.log('_____________________');

let p = Number(prompt("masukkan panjang: "));
let l = Number(prompt("masukkan lebar  :   "));

let L = p*l
let K = 2 * (p+l)

console.log(`
    Luas      : ${L}
    Keliling  : ${K} `);
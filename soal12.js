const prompt = require("prompt-sync")({ sigint: true });

console.log("BOLA");
console.log("____");

let r = Number(prompt("Jari-jari : "));

let phi;
if (r % 7 === 0) {
  phi = 22.0 / 7.0;
} else {
  phi = 3.14;
}
let v = (4.0 / 3.0) * phi * (r ** 3);
let l = 4 * phi * (r ** 2);

v = parseFloat(v.toFixed(2));
l = parseFloat(l.toFixed(2));

console.log(`
    Volume         : ${v} cm3
    Luas Permukaan : ${l} cm2`);
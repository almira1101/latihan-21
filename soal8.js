const prompt = require('prompt-sync')({sigint: true});

let nama = String(prompt("Masukkan nama anda: "));
console.log(`Apakabar ${nama}? Wish you luck!`);
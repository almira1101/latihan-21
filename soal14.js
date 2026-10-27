const prompt = require("prompt-sync")({ sigint: true });
let angka = Number(prompt("Masukkan angka : "));
if (angka > 100)
  console.log("Nilai kamu sempurna!");
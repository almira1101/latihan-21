const prompt = require("prompt-sync")({ sigint: true });
let bilangan = Number(prompt("Masukkan bilangan bulat : "));
if (bilangan % 7 === 0) {
  console.log("ini adalah kelipatan 7!");
} else {
  console.log("Anda belum beruntung");
}
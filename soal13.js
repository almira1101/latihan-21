const prompt = require("prompt-sync")({ sigint: true });
const hargaMakanan = Number(prompt("Masukkan harga makanan : "));
const pajak = hargaMakanan * 0.10;
const fee = hargaMakanan * 0.05;
let hargaBayar = hargaMakanan + pajak + fee;
console.log(`
Harga makanan : ${hargaMakanan}
Pajak         : ${pajak}
Fee           : ${fee}
Harga bayar   : ${hargaBayar}`);
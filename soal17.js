const prompt = require("prompt-sync")({ sigint: true });
let totalHarga = Number(prompt("Masukkan total harga barang : "));
let diskon = 0;
if (totalHarga >= 200000) {
  diskon = totalHarga * (7.5 / 100);
}
let totalBayar = totalHarga - diskon;
console.log("_______________________________");
console.log("Total Harga  : Rp " + totalHarga);
console.log("Diskon (7.5%): Rp " + diskon);
console.log("Total Bayar  : Rp " + totalBayar);
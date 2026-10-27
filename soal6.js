const prompt = require('prompt-sync')({sigint: true});
let namaSiswa = prompt("Masukkan nama siswa: ");
let ukuranSepatu = Number(prompt("Masukkan ukuran sepatu: "));
let rataRapor = Number(prompt("Masukkan nilai rata-rata rapor: "));
let statusLulus;
if (rataRapor >= 75.00) {
    statusLulus = true;
} else {
    statusLulus = false;
}
let dataSiswa = `
Nama          : ${namaSiswa}
Ukuran Sepatu : ${ukuranSepatu}
Nilai Rapor   : ${rataRapor.toFixed(2)}
Kelulusan     : ${statusLulus}`;
console.log(dataSiswa);
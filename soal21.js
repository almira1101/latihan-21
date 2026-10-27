const prompt = require("prompt-sync")({ sigint: true });
let namaSiswa = prompt("Masukkan nama siswa : ");
let nilai = Number(prompt("Masukkan nilai (0-100) : "));
let grade = "";
if (nilai < 0 || nilai > 100) {
  grade = "Nilai tidak valid! (Harus rentang 0-100)";
} else if (nilai >= 90) {
  grade = "A";
} else if (nilai >= 80) {
  grade = "B";
} else if (nilai >= 70) {
  grade = "C";
} else if (nilai >= 60) {
  grade = "D";
} else {
  grade = "E";
}
console.log("_________________________");
console.log(`Nama Siswa : ${namaSiswa}`);
console.log(`Nilai      : ${nilai}`);
console.log(`Grade      : ${grade}`);
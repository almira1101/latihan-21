const prompt = require("prompt-sync")({ sigint: true });
let input = prompt("Masukkan satu karakter: ");
let karakter = input.toLowerCase();
if (karakter.length !== 1 || karakter < "a" || karakter > "z") {
  console.log("Bukan berupa huruf");
} else if ("aiueo".includes(karakter)) {
  console.log("Huruf Vokal");
} else {
  console.log("Huruf Konsonan");
}
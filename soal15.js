const prompt = require("prompt-sync")({ sigint: true });
let kode = prompt("Masukkan kode 5 digit : ");
if (kode === "78821") {
  console.log("You are authenticated");
} else {
  console.log("You have no access");
}
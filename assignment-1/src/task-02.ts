// Kalkulator

import { input, select } from "@inquirer/prompts";
import { multiply, divide } from "./libs/math";

const formulas = await select ({
  message: "Pilih operasi?",
  choices: [
    {name: "Perkalian", value: "multiply" },
    {name: "Pembagian", value: "divide" },
  ],
});

const angkaPertama = await input ({message: "Masukkan angka pertama?"});
const angkaKedua = await input ({message: "Masukkan angka kedua?"});

if (formulas === "multiply") {
  const hasil = multiply(Number(angkaPertama), Number(angkaKedua));
  console.log (`Hasil ${formulas} adalah ${hasil}`);
} else {
  const hasil = divide(Number(angkaPertama), Number(angkaKedua));
  console.log (`Hasil ${formulas} adalah ${hasil}`);
}

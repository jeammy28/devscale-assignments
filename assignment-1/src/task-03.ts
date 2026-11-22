// Konverter Suhu C ke K

import { input, select } from "@inquirer/prompts";
import { ctok, ktoc } from "./libs/temperature-converter";


const konversi = await select ({
  message: "Pilih konversi?",
  choices: [
    {name: "Celcius ke Kelvin", value: "ctok"},
    {name: "Kelvin ke Celcius", value: "ktoc"},
  ],
})
const suhu = await input ({
  message: "Masukkan suhu yang mau dikonversi?"
});

if (konversi === "ctok") {
  const hasil = ctok(Number(suhu), 273.15);
  console.log (`Nilainya dalam Kelvin adalah ${hasil}`);
} else {
  const hasil = ktoc(Number(suhu), 273.15);
  console.log (`Nilainya dalam Celcius adalah ${hasil}`);
}
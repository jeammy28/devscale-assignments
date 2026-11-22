// Discount Calculator Programm

import { input } from "@inquirer/prompts";
import { diskonBelanja, totalDiskon } from "./libs/discount";

const belanjaan = await input ({
  message: "Berapa belanjaan kamu?"
})

const totalBelanja = Number(belanjaan);

if (totalBelanja > "100000") {
  const nilaiPotongan = diskonBelanja(totalBelanja, 10) ;
  const hasil = totalDiskon(Number(totalBelanja), Number(nilaiPotongan));
  console.log (`Kamu dapat diskon sebesar ${nilaiPotongan} jadi kamu cukup membayar ${hasil}`);
} else {
  console.log (`Maaf kamu belum dapat diskon, silakan bayar ${totalBelanja}`);
}

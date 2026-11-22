import { input } from "@inquirer/prompts";

const name = await input ({
  message: "Nama Kamu siapa?"
});
console.log (`Salam kenal ${name}`);
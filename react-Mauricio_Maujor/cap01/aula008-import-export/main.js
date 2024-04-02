import estudar from "./utils.js";
import { elogiar } from "./utils.js";

//const btn1 = document.querySelector("#btn1");
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  estudar("Vamos estudar React!");
});

//const btn2 = document.querySelector("#btn2");
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  elogiar("O livro React do Maujor é muito bom!");
});

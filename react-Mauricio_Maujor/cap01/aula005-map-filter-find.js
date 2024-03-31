// Metodo map()
/*
const livros = ["CSS3", "HTML5", "JavaScript", "React", "PHP"];
let livros1 = livros.map((livro) => "Livro: " + livro);
let livros2 = livros.map((livro, index) => `Livro ${index}: ${livro}`);

console.log(livros);
console.log(livros1);
console.log(livros2);


const livrosA = [
  { titulo: "Construindo sites com HTML", autor: "Mauricio Samy Silva" },
  { titulo: "Web scraping com python", autor: "Ryan Mitchell" },
  { titulo: "CSS3", autor: "Mauricio Samy Silva" },
];

let livrosX = livrosA.map((livro) => `Livro: ${livro.titulo}`);
let livrosY = livrosA.map((livro) => `Autor: ${livro.autor}`);

console.log(livrosA);
console.log(livrosX);
console.log(livrosY);

const valores = [10, 20, 40, 60, 80, 100];
let valores2 = valores.map((valor) => 2 * valor);
console.log(valores2);
*/

// Metodo filter()
/*
const numeros = [7, 14, 21, 40, 75, 100];
let pares = numeros.filter((numero) => numero % 2 == 0);
let impares = numeros.filter((numero) => numero % 2 != 0);
console.log(numeros);
console.log(pares);
console.log(impares);

const livros = [
  { titulo: "Construindo Sites com HTML", autor: "Mauricio Samy Silva" },
  { titulo: "Web Scraping com Python", autor: "Ryan Mitchell" },
  { titulo: "CSS3", autor: "Mauricio Samy Silva" },
];

let livros1 = livros.filter((livro) => livro.titulo === "CSS3");
let livros2 = livros.filter((livro) => livro.autor === "Mauricio Samy Silva");
let livros3 = livros.filter((livro) => livro.titulo.includes("com"));
console.log(livros1);
console.log(livros2);
console.log(livros3);
*/

// Metodo find()
const livros = [
  { id: 1, titulo: "Construindo Sites com HTML" },
  { id: 2, titulo: "Web Scraping com Python" },
  { id: 3, titulo: "CSS3" },
];
let livros1 = livros.find((livro) => livro.id === 3);
console.log(livros1);
console.log(livros1.titulo);

// Metodo map()
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

// Metodo filter()
const numeros = [7, 14, 21, 40, 75, 100];
let pares = numeros.filter((numero) => numero % 2 == 0);
let impares = numeros.filter((numero) => numero % 2 != 0);
console.log(numeros);
console.log(pares);
console.log(impares);

// Metodo find()

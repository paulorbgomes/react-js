const livros1 = ["CSS3", "JavaScript", "PHP"];
const livros2 = ["HTML5", "React"];
const precos = [70, 30, 90, 100, 10];

let livros = [...livros1, ...livros2];

console.log(livros);

// A possibilidade de se passar um array como parametro de uma funcao e uma das mais
// poderosas funcionalidades do operador SPREAD!
console.log(Math.max(...precos));
console.log(Math.min(...precos));
const livros1 = ["CSS3", "JavaScript", "PHP"]
const livros2 = ["HTML4", "React"]
const precos = [70, 30, 90, 100, 10]

//let livros = livros1 + livros2
//console.log(livros)
//let livros = [livros1] + [livros2]
//console.log(livros)
let livros = [...livros1, ...livros2]
console.log(livros)

let precoMaximo = Math.max(...precos)
console.log(precoMaximo)

// A possibilidade de se passar um array como parâmetro de uma função é uma das mais poderosas funcionalidades do operador spread!
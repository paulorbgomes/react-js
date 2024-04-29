// Atribuicao Via Desestruturacao
// Para um array ou objeto com n itens, cria-se um conjunto de n variaveis

// Array
const livrosArray = ["CSS3", "HTML5", "JavaScript", "React"]
//console.log(livros[0])
//console.log(livros[3])
let [css, html, js, react] = livrosArray
console.log(css, html, js, react)

// Objeto
const livrosObj = [
    {titulo: "React", autor: "Mauricio Samy Silva"},
    {titulo: "Node Essencial", autor: "Ricardo R. Lecheta"},
    {titulo: "UX Design", autor: "Will Grant"},
]
console.log(livrosObj[0].titulo)
console.log(livrosObj[2].autor)

let [lUm, lDois, lTres] = livrosObj
console.log(lUm.titulo)
console.log(lTres.autor)
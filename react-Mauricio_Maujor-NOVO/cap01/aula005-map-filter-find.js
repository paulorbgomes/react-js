// map()
// Array
let livros = ["CSS3", "HTML5", "JavaScript", "React", "PHP"]
let livros1 = livros.map( (livro) => "Livro " + livro )
let livros2 = livros.map( (livro, index) => "Livro " + index + " " + livro )  
console.log(livros)
console.log(livros1)
console.log(livros2)

// Objeto
const livrosA = [
    {titulo: "Construindo Sites com HTML", autor: "Mauricio Samy Silva"},
    {titulo: "Web Scraping com Python", autor: "Ryan Mitchell"},
    {titulo: "CSS3", autor: "Mauricio Samy Silva"},
]
let livrosX = livrosA.map( (livro) => "Livro: " + livro.titulo )
console.log(livrosX)
let livrosY = livrosA.map( (livro) => "Autor: " + livro.autor ) 
console.log(livrosY)

// filter()
livros1 = livrosA.filter( (livro) => livro.titulo === "CSS3" )
console.log(livros1)
livros2 = livrosA.filter( (livro) => livro.autor === "Mauricio Samy Silva" )
console.log(livros2)
let livros3 = livrosA.filter( (livro) => livro.titulo.includes("com") )
console.log(livros3)

// find()
livros = [
    {id: 1, titulo: "Construindo Sites com HTML", },
    {id: 2, titulo: "Web Scraping com Python", },
    {id: 3, titulo: "CSS3", }
]
livros1 = livros.find( (livro) => livro.id === 3 )
console.log(livros1)
console.log(livros1.titulo)
const livros = ["CSS3", "HTML5", "JavaScript", "React"];
console.log(livros[0]);
console.log(livros[3]);

// desestruturacao de um array
let [css, html, js, react] = livros;
console.log(css);
console.log(html);
console.log(js);
console.log(react);

const livrosO = [
    {titulo: "React", autor: "Mauricio Samy Silva"},
    {titulo: "Node Essencial", autor: "Ricardo R. Lecheta"},
    {titulo: "UX Design", autor: "Will Grant"}    
];
console.log(livrosO[0].titulo);
console.log(livrosO[2].autor);

// desestruturacao de um objeto
let [lUm, lDois, lTres] = livrosO;
console.log(lUm.titulo);
console.log(lTres.autor);
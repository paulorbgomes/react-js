// Funcao convencional
/*
function saudacao() {
    return "Olá, visitante!"
}
console.log(saudacao())

function dobrar(x) {
    return 2 * x
}
console.log(dobrar(10))

function avaliar(x, y, z) {
    if(x < 10) {
        return y + z
    } else {
        return y * z
    }
}
console.log( avaliar(18, 15, 5) )
console.log( avaliar(2, 3, 11) )
*/

// Arrow Functions
const saudacao = () => {
    return "Olá, visitante!"
}
console.log(saudacao())

const dobrar = (x) => {
    return 2 * x
}
console.log(dobrar(50))
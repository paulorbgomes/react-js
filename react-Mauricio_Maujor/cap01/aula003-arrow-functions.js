// declaracao comum
function saudacao1() {
    return "Olá visitante!";
};
console.log(saudacao1());

// arrow function
let saudacao2 = () => {return "Olá visitante!"};
console.log(saudacao2());

// declaracao comum
function dobrar1(x) {
    return 2 * x;
};
console.log(dobrar1(5));

// arrow function
let dobrar2 = (x) => {return 2 * x};
console.log(dobrar2(10));

// declaracao comum
function avaliar1(x, y, z) {
    if (x < 10) {
        return y + z;
    } else {
        return y * z;
    }
};
console.log(avaliar1(18, 15, 5));
console.log(avaliar1(2, 3, 11));

// arrow function
let avaliar2 = (x, y, z) => {
    if (x < 10) {
        return y + z;
    } else {
        return y * z;
    }
};
console.log(avaliar2(18, 15, 5));
console.log(avaliar2(2, 3, 11));

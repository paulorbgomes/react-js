// E valido reunir varias funcoes a serem exportadas em um so arquivo ...

const estudar = (texto) => {
    console.log(texto);
};

const elogiar = (elogio) => {
    console.log(elogio);
};

export default estudar;
export { elogiar };
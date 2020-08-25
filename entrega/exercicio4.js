function multiplicaSoma(number1, number2, number3) {
    if (number1 === undefined || number2 === undefined || number3 === undefined) {
        return "Preencha todos os valores corretamente!";
    }
    return (number1 * number2 * number3) + 2;
};

console.log(multiplicaSoma(7, 7, 7));
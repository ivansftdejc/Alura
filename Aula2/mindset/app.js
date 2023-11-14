var cont = 1;
do {
    var numAleatorio = parseInt(Math.random() * 1000) + 1;
    var numDigitado = prompt(`${cont}ª Chance! Digite o número que você pensou`);
    if (numDigitado == numAleatorio) {
        alert($`Parabéns, Você Acertou ${numDigitado}=${numAleatorio}`);
    } else if (numDigitado > numAleatorio) {
        alert($`Erro, o ${numDigitado}>${numAleatorio} Tente Novamente`);

    } else {
        alert(`Erro, o ${numDigitado}<${numAleatorio}, Tente Novamente`);
    }
    cont++;
}
while (cont <= 10)
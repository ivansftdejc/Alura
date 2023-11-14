var cont = 10;
do {
    var numAleatorio = parseInt(Math.random() * 1000) + 1;
    var numDigitado = prompt(` Você tem ${cont} Tentativas! Digite o número que está pensando!`);
    if (numDigitado == numAleatorio) {
        alert(`Parabéns, Você Acertou ${numDigitado}=${numAleatorio}`);
    } else if (numDigitado > numAleatorio) {
        alert(`Erro, você digitou ${numDigitado} e é maior que ${numAleatorio}. Tente Novamente!`);
    } else if (numDigitado < numAleatorio) {
        alert(`Erro, você digitou ${numDigitado} e é menor que ${numAleatorio}. Tente Novamente!`);
    }
    cont--;
}
while (cont>=1)
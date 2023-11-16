//------------------------------Conversor De Moeda-------------------------------------\\
function conversor(valorAconverter, correspondentePorUnidade) {
    return (valorAconverter * correspondentePorUnidade).toFixed(2);
}
var operação = prompt('Olá seja bem vindo ao nossso conversor!\nO que deseja fazer?\n   1.Coverter moeda;\n   2.Converter distâcias;\n   3.Converter temperatura.\n');
switch (operação) {
    case '1':
        let resp;
        let opção = prompt('1. Kz --> USD\n2. USD -->Kz\n3. Kz -->Real\n4. Real -->Kz');
        switch (opção) {
            case '1':
                do {
                    let valorEmKz = prompt('Insira o valor em Kz que deseja converter em Dolar');
                    resp = prompt(`${valorEmKz}Kz corresponde a ${conversor(valorEmKz, (1 / 830))}USD\nDeseja continuar?\n1.Sim\n2.Não`);
                } while (resp == '1')
                break;
            case '2':
                do {
                    let valorEmDolar = prompt('Insira o valor em Dolar que deseja conventer em Kz');
                    resp = prompt(`${valorEmDolar}USD corresponde a ${conversor(valorEmDolar, 830)}\nDeseja continuar?\n1.Sim\n2.Não`);
                }
                while (resp == '1')
                break;
            case '3':
                do {
                    let valorEmKz = prompt('Insira o valor em Kz que deseja converter em Real');
                    resp = prompt(`${valorEmKz}Kz corresponde a ${conversor(valorEmKz, (1 / 169.69))}\nDeseja continuar?\n1.Sim\n2.Não`);
                }
                while (resp == '1')
                break;
            case '4':
                do {
                    let valoEmReal = prompt('Insira o valor em Real que deseja converter em Kz');
                    resp = prompt(`${valoEmReal}Real corresponde a ${conversor(valoEmReal, 169.69)}\nDeseja continuar?\n1.Sim\n2.Não`);

                } while (resp == '1')
                break;
        }
}

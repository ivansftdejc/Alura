//-----------------------------------Conversor Adatável-------------------------------------\\
let operação = prompt('Olá seja bem vindo ao nossso conversor!\nO que deseja fazer?\n   1.Coverter moeda;\n   2.Converter distâcias;\n   3.Converter temperatura.\n');
switch (operação) {

    case '1':
        //-------------------------Conversor de Moeda-------------------//
        function converterMoeda(valorAconverter, correspondentePorUnidade) {
            return (valorAconverter * correspondentePorUnidade).toFixed(2);
        }

        let respMoeda;
        function converterMoeda(valorAconverter, correspondentePorUnidade) {
            return (valorAconverter * correspondentePorUnidade).toFixed(2);
        }

        let opçãoMoeda = prompt('1. Kz --> USD\n2. USD -->Kz\n3. Kz -->Real\n4. Real -->Kz');
        switch (opçãoMoeda) {
            case '1':
                do {
                    let valorEmKz = prompt('Insira o valor em Kz que deseja converter em Dolar');
                    respMoeda = prompt(`${valorEmKz}Kz corresponde a ${converterMoeda(valorEmKz, (1 / 830))}USD\nDeseja continuar?\n1.Sim\n2.Não`);
                } while (resp == '1')
                break;
            case '2':
                do {
                    let valorEmDolar = prompt('Insira o valor em Dolar que deseja conventer em Kz');
                    respMoeda = prompt(`${valorEmDolar}USD corresponde a ${converterMoeda(valorEmDolar, 830)}\nDeseja continuar?\n1.Sim\n2.Não`);
                }
                while (respMoeda == '1')
                break;
            case '3':
                do {
                    let valorEmKz = prompt('Insira o valor em Kz que deseja converter em Real');
                    respMoeda = prompt(`${valorEmKz}Kz corresponde a ${converterMoeda(valorEmKz, (1 / 169.69))}\nDeseja continuar?\n1.Sim\n2.Não`);
                }
                while (respMoeda == '1')
                break;
            case '4':
                do {
                    let valoEmReal = prompt('Insira o valor em Real que deseja converter em Kz');
                    respMoeda = prompt(`${valoEmReal}Real corresponde a ${converterMoeda(valoEmReal, 169.69)}\nDeseja continuar?\n1.Sim\n2.Não`);

                } while (respMoeda == '1')
                break;
        }
        //-------------------------Conversor de Km Para Anos Luz-------------------//
        function ConverterDistâciaEmKm(_distânciaEmAnoLuz) {
            return (_distânciaEmAnoLuz * (9461000000000)).toFixed(2);

        }
        function ConverterDistâciaEmAnoLuz(_distânciaEmKm) {
            return (_distânciaEmKm * (1 / 9461000000000)).toFixed(2);

        }
        function tempoAPercorrer(_DistânciaApercorrer) {
            return ((_DistânciaApercorrer / (299792458)) / 3600).toFixed(2);
        }

    case '2':
        let respDistâncias;
        let opçãoDistâncias = prompt('1. Anos Luz --> Km\n2. Km --> Anos Luz');
        switch (opçãoDistâncias) {
            case '1':
                do {
                    let distâciaEmAnoLuz = prompt('Insira o valor da distância em Anos Luz');
                    respDistâncias = prompt(`${distâciaEmAnoLuz} corresponde a ${ConverterDistâciaEmKm(distâciaEmAnoLuz)}Km\nÉ necessário aproximadamente ${tempoAPercorrer(ConverterDistâciaEmKm(distâciaEmAnoLuz))}h para viajar de uma estrela para outra com esta disância a velocidade da luz\nDeseja continuar?\n1.Sim\n2.Não`);
                } while (respDistâncias == '1')
                break;

            case '2':
                do {
                    let distânciaEmKm = prompt('Insira o valor da distância em Anos Luz');
                    respDistâncias = prompt(`${distânciaEmKm} corresponde a ${ConverterDistâciaEmAnoLuz(distânciaEmKm)}Km\nÉ necessário aproximadamente ${tempoAPercorrer(ConverterDistâciaEmAnoLuz(distânciaEmKm))}h para viajar de uma estrela para outra com esta disância a velocidade da luz\nDeseja continuar?\n1.Sim\n2.Não`);
                } while (respDistâncias == '1')
                break;

        }




}

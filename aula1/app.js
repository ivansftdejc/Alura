//-----------------------------------Conversor Adatável-------------------------------------\\
let operacao = prompt('Olá seja bem vindo ao nossso conversor!\nO que deseja fazer?\n   1.Coverter moeda;\n   2.Converter distâcias;\n   3.Converter temperatura.\n');
switch (operacao) {

    case '1'://--------Conversor de Moeda--------------//
        function converterMoeda(valorAconverter, correspondentePorUnidade) {
            return (valorAconverter * correspondentePorUnidade).toFixed(2);
        }
        function converta(base) {
            let respMoeda;
            do {
                let valorEmKz = prompt('Insira o valor em Kz que deseja converter em Dolar');
                respMoeda = prompt(`${valorEmKz}Kz corresponde a ${converterMoeda(valorEmKz, base)}USD\nDeseja continuar?\n1.Sim\n2.Não`);
            } while (respMoeda == '1')
        }
        let base;
        let opcaoMoeda = prompt('1. Kz --> USD\n2. USD -->Kz\n3. Kz -->Real\n4. Real -->Kz');
        switch (opcaoMoeda) {
            case '1':
                base = (1 / 830);
                converta(base);
                break;
            case '2':
                base = 830;
                converta(base)
                break;
            case '3':
                base = (1 / 169.69);
                converta(base)
                break;
            case '4':
                base = 169.69;
                converta(base)
                break;
            default:
                alert('Erro');
                break;
        }
        break;
    case '2'://---------Conversor de Km Para Anos Luz---------//
        function converterDistaciaEmKm(_distanciaEmAnoLuz) {
            return (_distanciaEmAnoLuz * (9461000000000)).toFixed(2);
        }
        function converterDistaciaEmAnoLuz(_distanciaEmKm) {
            return (_distanciaEmKm * (1 / 9461000000000)).toFixed(2);
        }
        function tempoAPercorrer(_DistanciaApercorrer) {
            return ((_DistanciaApercorrer / (299792458)) / 3600).toFixed(2);
        }
        let respDistancias;
        let opcaoDistancias = prompt('1. Anos Luz --> Km\n2. Km --> Anos Luz');
        switch (opcaoDistancias) {
            case '1':
            do {
                let distaciaEmAnoLuz = prompt('Insira o valor da distância em Anos Luz');
                let distanciaDeterminada = converterDistaciaEmKm(distaciaEmAnoLuz);
                respDistancias = prompt(`${distaciaEmAnoLuz} corresponde a ${distanciaDeterminada}Km\nÉ necessário aproximadamente ${tempoAPercorrer(distanciaDeterminada)}h para viajar de uma estrela para outra com esta disância a velocidade da luz\nDeseja continuar?\n1.Sim\n2.Não`);
            } while (respDistancias == '1')
                break;
            case '2':
            do {
                let distaciaEmAnoLuz = prompt('Insira o valor da distância em Anos Luz');
                let distanciaDeterminada = converterDistaciaEmKm(distaciaEmAnoLuz);
                respDistancias = prompt(`${distaciaEmAnoLuz} corresponde a ${distanciaDeterminada}Km\nÉ necessário aproximadamente ${tempoAPercorrer(distanciaDeterminada)}h para viajar de uma estrela para outra com esta disância a velocidade da luz\nDeseja continuar?\n1.Sim\n2.Não`);
            } while (respDistancias == '1')
                break;
        }
        break;
}

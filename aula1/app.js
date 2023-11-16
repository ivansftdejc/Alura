var op = prompt('Olá seja bem vindo ao nossso conversor!\nO que deseja fazer?\n   1.Coverter moeda;\n   2.Converter distâcias;\n   3.Converter temperatura.\n');
switch (op) {
    case '1':
        do {
            var valorAConverter = prompt('Introduza o valor em kz que deseja converter.');
            var baseDeConversão = 834;
            var valorEmDolar = (valorAConverter / baseDeConversão).toFixed(2);
            alert(`${valorAConverter}kz corresponde a $${valorEmDolar}USD`);
            var resp = prompt('Continuar?\nSim ou Não?');
        }
        while (resp == 'Sim')
        

}

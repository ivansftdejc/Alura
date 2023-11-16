do {
    var valorAConverter = prompt('Olá, Tudo Bem?\nIntroduza o valor em kz que deseja converter.');
    var baseDeConversão = 834;
    var valorEmDolar = (valorAConverter / baseDeConversão).toFixed(2);
    alert(`${valorAConverter}kz corresponde a $${valorEmDolar}USD`);
    var resp = prompt('Deseja continuar?\nSim ou Não?');
}
while (resp == 'Sim')
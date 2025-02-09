var lista = [];

function analisar() {
    var num = document.getElementById('number');
    var n = Number(num.value);
    var busca = lista.indexOf(n);

    if (n >= 1 && n <= 100) {
        if (busca !== -1) {
            window.alert(`O valor ${n} já se encontra na lista`);
        } else {
            lista.push(n);
            var res = document.getElementById('res');
            var option = document.createElement('option');
            option.text = `Valor ${n} adicionado`;
            res.appendChild(option);
            fim.innerHTML = `<input type="button" value="Finalizar" onclick="finalizar()">`
        }
    } else {
        window.alert('[ERRO] Por favor, digite um número válido!');
    }
}

function finalizar(){
    if(lista.length === 0){
        window.alert(`Não a nenhum número cadastrado`)
    } else{
        var fim = document.getElementById('fim')
        var maior = Math.max(...lista)
        var menor = Math.min(...lista)
        var soma = lista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        var media = soma / lista.length;
    
        fim.innerHTML += `<br>Ao todo temos ${lista.length} números cadastrados.`;
        fim.innerHTML += `<br> O maior valor informado foi ${maior}.`;
        fim.innerHTML += `<br> O menor valor informado foi ${menor}.`;
        fim.innerHTML += `<br>A soma de todos os valores é ${soma}.`;
        fim.innerHTML += `<br>A média dos valores digitados é`
        fim.innerHTML += `<br>A média dos valores digitados é ${media}.`;
    }

}
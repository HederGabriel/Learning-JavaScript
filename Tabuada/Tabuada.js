function gerarTabuada(){
    var num = document.getElementById('num')
    var res = document.getElementById('res')

    if(num.value.length == 0 || num.value == 0){
        window.alert('[ERRO] Por favor, digite um número válido!')
    } else{
        num = Number(num.value)
        var i = 1
        res.innerHTML = ''
        while(i <=10){
            var option = document.createElement('option');
            option.text = `${num} x ${i} = ${num * i}`;
            res.add(option);
            i++
        }
    }
}
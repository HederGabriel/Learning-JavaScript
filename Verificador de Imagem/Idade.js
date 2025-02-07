function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/Mulher-bebe.svg')
            } else{
                if(idade <21){
                    //Jovem
                    img.setAttribute('src', 'img/Homen-jovem.svg')
                }else{
                    if(idade < 50){
                        //adulto
                        img.setAttribute('src', 'img/Homen-adulto.svg')
                    } else{
                        //idoso
                        img.setAttribute('src', 'img/Homen-idoso.svg')
                    }
                }
            }
        } else {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/Mulher-bebe.svg')
            } else{
                if(idade <21){
                    //Jovem
                    img.setAttribute('src', 'img/Mulher-jovem.svg')
                }else{
                    if(idade < 50){
                        //adulto
                        img.setAttribute('src', 'img/Mulher-adulto.svg')
                    } else{
                        //idoso
                        img.setAttribute('src', 'img/Mulher-idoso.svg')
                    }
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
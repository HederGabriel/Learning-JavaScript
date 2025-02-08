function Contar(){
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var res = document.getElementById('res')   

    if(i.value == "" || f.value == "" || p.value <= 0){
        res.innerHTML = 'Impossível contar!'
    } else{
        i = Number(i.value)
        f = Number(f.value)
        p = Number(p.value)

        res.innerHTML = ""

        if(i < f){
            while(i <= f){
                res.innerHTML += `${i}👉`
                i += p
            }
        } else {
            while(i >=f){
                res.innerHTML += `${i}👉`
                i -= p
            }
        }
    }res.innerHTML += '🏁'
}
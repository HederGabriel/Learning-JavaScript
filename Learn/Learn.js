function calcular(){
    var txtv = document.getElementById("txtvel");
    var res = document.getElementById("res");
    var vel = Number(txtv.value);
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`;
    if(vel > 60){
        res.innerHTML += `<p>Você foi multado por excesso de veloocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
}
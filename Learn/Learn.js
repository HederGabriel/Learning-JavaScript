function verificar(){
    var pais = document.getElementById("pais").value;
    var res = document.getElementById("res");
    if(pais == 'Brasil'){
        res.innerHTML = `Nasceu no ${pais}!`;
        res.innerHTML += `<p>Você é Brasileiro!</p>`;
    } else {
        res.innerHTML = `Nasceu no ${pais}!`;
        res.innerHTML += `<p>Você é Estrangeiro!</p>`;
    }
}
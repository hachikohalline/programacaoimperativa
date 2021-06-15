function podeSubir(altura, acompanhada){
    if (1.4 < altura && altura < 2){
        return console.log("Acesso autorizado");
    }
    else if (1.2 < altura && altura < 1.4 && acompanhada == "sim"){
        return console.log("Acesso autorizado");
    }
    else{
        return console.log("Acesso negado");
    }
}

console.log(podeSubir(1.5, "não"));
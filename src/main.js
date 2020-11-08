function timer(){
    var hora = GetFormattedHour();
    var msgHora = window.document.getElementById('msgHora')
    msgHora.innerHTML = `Agora são ${hora}`

    setTimeout("timer()", 1000);

    return hora;
};
function getNomeSorteado(sorteado){
    const nomeSorteado = getNomes()[sorteado-1];
    var msgNomeSorteado = window.document.getElementById('msgNomeSorteado');
    if(nomeSorteado == null){
        console.log(`O número ${sorteado} não foi vendido.`);
        var msgNome = `Infelizmente ninguém ganhou, o número ${sorteado} não foi vendido.`
        msgNomeSorteado.style.color = 'red';
    } else {
        console.log(nomeSorteado);
        var msgNome = `Parabéns ${nomeSorteado}! Você acabou de ganhar R$ 150,00`
        msgNomeSorteado.style.color = 'black';
    }
    msgNomeSorteado.innerHTML = msgNome;

    return nomeSorteado;
}

function getRandom(){
    var hora = GetFormattedHour();
    var sorteado = Math.floor(Math.random() * 80 + 1);
    var msgSorteado = window.document.getElementById('msgSorteado');

    var msgNumero = `O número sorteado foi: ${sorteado} as ${hora}`
    msgSorteado.innerHTML = msgNumero;
    
    console.log(msgNumero);
    getNomeSorteado(sorteado);
};

function clearRandom(){
    console.log('zerou...');
    var msgSorteado = window.document.getElementById('msgSorteado');
    var msgNomeSorteado = window.document.getElementById('msgNomeSorteado');
    msgSorteado.innerHTML = '';
    msgNomeSorteado.innerHTML = '';
};

function GetFormattedHour() {
    var todayTime = new Date();
    var hora = todayTime.getHours()
    var minuto = todayTime.getMinutes()
    var segundo = todayTime.getSeconds()
    if (hora >= 0 && hora < 10){
        var hora = `0${hora}`
    }
    if (minuto >= 0 && minuto < 10){
        var minuto = `0${minuto}`
    }
    if (segundo >= 0 && segundo < 10){
        var segundo = `0${segundo}`
    }
    var horaCerta = `${hora}:${minuto}:${segundo}`
    return horaCerta
};

function getNomes(){
    const nomes = {
            "0": "Vovó Cleide",
            "1": "Tia Dé",
            "2": "Tia Gleice",
            "3": "Jana",
            "4": "Daiane",
            "5": "Romilda",
            "6": "Emersom",
            "7": "Juliana Mussi",
            "8": "Paulinha",
            "9": "Tia Clélia",
            "10": "Tia Leide",
            "11": "Lurian",
            "12": "Sandra",
            "13": "Simone",
            "14": "Tia Dé",
            "15": "Lucila",
            "16": "Fabiana",
            "17": "Denis",
            "18": "Ariana",
            "19": "Benilde",
            "20": "Tia Lande",
            "21": "Pastora Sara",
            "22": "Felipão",
            "23": "Kátia",
            "24": "Adriana",
            "25": "Mônica",
            "26": "Vânia",
            "27": "Mary",
            "28": "Jeferson",
            "29": "Isabela",
            "30": "Derenice",
            "31": "Natália",
            "32": "Sandra",
            "33": "Iolanda",
            "34": "Tia Leide",
            "35": "Renata",
            "36": "Eva",
            "37": "Andrews",
            "38": "Beth",
            "39": "Áurea",
            "40": "Graci",
            "41": "Wellington",
            "42": "Jana",
            "43": "Graci",
            "44": "Tia Zânia",
            "45": "Romilda",
            "46": "Jany",
            "47": "Elza",
            "48": "Dolores",
            "49": "Daiane",
            "50": null,
            "51": null,
            "52": null,
            "53": null,
            "54": "Lari",
            "55": null,
            "56": null,
            "57": null,
            "58": null,
            "59": "Oninha",
            "60": null,
            "61": "Rosana",
            "62": null,
            "63": null,
            "64": null,
            "65": null,
            "66": null,
            "67": null,
            "68": null,
            "69": null,
            "70": "Tia Paula",
            "71": "Joesley",
            "72": null,
            "73": null,
            "74": null,
            "75": null,
            "76": null,
            "77": null,
            "78": "Tiago",
            "79": null
        }
    console.log('Nomes concorrentes: ', nomes);

    return nomes;
}

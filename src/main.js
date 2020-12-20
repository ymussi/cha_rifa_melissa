function timer(){
    var hora = GetFormattedHour();
    var msgHora = window.document.getElementById('msgHora')
    msgHora.innerHTML = `Agora são ${hora}`

    setTimeout("timer()", 1000);

    return hora;
};
function getNomeSorteado(sorteado){
    const nomeSorteado = getNomes()[sorteado];
    var msgNomeSorteado = window.document.getElementById('msgNomeSorteado');
    if(nomeSorteado == null){
        console.log(`O número ${sorteado} não foi vendido.`);
        var msgNome = `Infelizmente ninguém ganhou! </br>O número ${sorteado} não foi vendido.`
        msgNomeSorteado.style.color = 'red';
    } else {
        console.log(nomeSorteado);
        var msgNome = `Parabéns ${nomeSorteado}! </br>Você acabou de ganhar R$ 150,00`
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

function getRandTimeout(){
    setTimeout(getRandom(), 50000);
}

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
            "1": "Vovó Cleide",
            "2": "Tia Dé",
            "3": "Tia Gleice",
            "4": "Jana",
            "5": "Daiane",
            "6": "Romilda",
            "7": "Emersom",
            "8": "Julianne Mussi",
            "9": "Paulinha",
            "10": "Tia Clélia",
            "11": "Tia Leide",
            "12": "Lurian",
            "13": "Sandra",
            "14": "Simone",
            "15": "Tia Dé",
            "16": "Lucila",
            "17": "Fabiana",
            "18": "Denis",
            "19": "Ariana",
            "20": "Benilde",
            "21": "Tia Lande",
            "22": "Pastora Sara",
            "23": "Felipão",
            "24": "Kátia",
            "25": "Adriana",
            "26": "Mônica",
            "27": "Vânia",
            "28": "Mary",
            "29": "Jeferson",
            "30": "Isabela",
            "31": "Derenice",
            "32": "Natália",
            "33": "Sandra",
            "34": "Iolanda",
            "35": "Tia Leide",
            "36": "Renata",
            "37": "Eva",
            "38": "Andrews",
            "39": "Beth",
            "40": "Áurea",
            "41": "Graci",
            "42": "Wellington",
            "43": "Jana",
            "44": "Graci",
            "45": "Tia Zânia",
            "46": "Romilda",
            "47": "Jany",
            "48": "Elza",
            "49": "Dolores",
            "50": "Daiane",
            "51": "Hosana",
            "52": "Claudia",
            "53": "Bruna",
            "54": "Eduardo",
            "55": "Lari",
            "56": "Andreza",
            "57": "Meiriane",
            "58": "Jetson",
            "59": "Ed Carlos",
            "60": "Oninha",
            "61": "Zé",
            "62": "Rosana",
            "63": "Gisele",
            "64": "Nanete",
            "65": "Sol",
            "66": "Tina",
            "67": "Lerys",
            "68": "Pedro Henrrique",
            "69": "Lina",
            "70": "Bruna",
            "71": "Tia Paula",
            "72": "Joesley",
            "73": "Priscila",
            "74": "Simone - Osasco",
            "75": "Neilton",
            "76": "Jetson",
            "77": "Sandriane",
            "78": "Lerys",
            "79": "Tiago",
            "80": "Bárbara"
        }
    console.log('Nomes concorrentes: ', nomes);

    return nomes;
}

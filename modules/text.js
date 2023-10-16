const text = {};
function length(texto){
    return texto.length;
}

function toUpperCase(texto){
    return texto.toUpperCase();
}

function toLowerCase(texto){
    return texto.toLowerCase();
}

function sena(texto){
    return texto[0];
}

function sena2(texto){
    return texto.at(-2);
}

function substring(texto){
    return texto.substring(1);
}

function sena3(texto){
    return texto[0].toUpperCase()
}

function sena4(texto){
    return "Hola Mi  Nombre Es : " + texto
}

function repeat(texto){
    return texto.repeat(3)
}


text.length = length;
text.toUpperCase = toUpperCase;
text.toLowerCase = toLowerCase;
text.sena = sena;
text.sena2 = sena2;
text.substring = substring;
text.sena3 = sena3;
text.sena4 = sena4;
text.repeat = repeat;


module.exports = text

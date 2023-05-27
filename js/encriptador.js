/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const text = document.getElementById('encriptar');
let miTexto =(text) =>{
    
    let bandera = 0;
    let encriptado ="";
    do{
        if(text[bandera]=="e"){
        encriptado +='enter';
        }
        else if(text[bandera]=="i"){
        encriptado +='imes';
        }
        else if(text[bandera]=="a"){
        encriptado +='ai';
        }
        else if(text[bandera]=="o"){
        encriptado +='ober';
        }
        else if(text[bandera]=="u"){
        encriptado +='ufat';
        }
        else{
        encriptado += text[bandera];
        }
        
        bandera ++;
    }while(text.length != bandera)
    return encriptado;
}
/*
let desencriptar =(codigo)=>{
    codigo=codigo.replace(/enter/g, "e");
    console.log(codigo);
    codigo=codigo.replace(/imes/g, "i");
    console.log(codigo);
    codigo=codigo.replace(/ai/g, "a");
    console.log(codigo);
    codigo=codigo.replace(/ober/g, "o");
    console.log(codigo);
    codigo=codigo.replace(/ufat/g, "u");

    return codigo;

}*/

//let phrase ="murcielago murcielago murcielago";
//console.log(miTexto(text))
/*
let mensajeEncriptado = miTexto(phrase);

console.log(desencriptar(mensajeEncriptado));*/
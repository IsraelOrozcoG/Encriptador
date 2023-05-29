/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let botonEncriptar =document.querySelector('.boton-encriptar');
let botonDesencriptar =document.querySelector('.boton-desencriptar');
let textoEncriptado = document.querySelector('.textoEncriptado')
let botonCopiar = document.querySelector('.boton-copiar')
let resultado = document.querySelector('.resultado');
let cajaTexto = document.querySelector('.cajatexto');
let img = document.querySelector(".search-image")

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

function recuperarTexto (){
    let cajatexto= document.querySelector(".cajatexto");
    return cajatexto.value;
}

function encriptado (){
    let cajatexto = recuperarTexto();
    resultado.style.display = 'block';
    botonCopiar.style.display = 'block';
    img.style.display='none';
    resultado.textContent = miTexto(cajatexto);
    
}


function desencriptar (codigo){
    codigo=String(codigo).replace(/enter/g, "e");
    //console.log(codigo);
    codigo=String(codigo).replace(/imes/g, "i");
    //console.log(codigo);
    codigo=String(codigo).replace(/ai/g, "a");
    //console.log(codigo);
    codigo=String(codigo).replace(/ober/g, "o");
    //console.log(codigo);
    codigo=String(codigo).replace(/ufat/g, "u");
    return codigo;

}


function desencriptado (){
    let cajatexto = recuperarTexto();
    resultado.textContent = desencriptar(cajatexto);
}
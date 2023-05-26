/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
let miTexto =(text) =>{
    let texto = text;
    let bandera = 0;
    let encriptado ="";
    do{
        if(texto[bandera]=="e"){
        encriptado +='enter';
        }
        else if(texto[bandera]=="i"){
        encriptado +='imes';
        }
        else if(texto[bandera]=="a"){
        encriptado +='ai';
        }
        else if(texto[bandera]=="o"){
        encriptado +='ober';
        }
        else if(texto[bandera]=="u"){
        encriptado +='ufat';
        }
        else{
        encriptado += texto[bandera];
        }
        
        bandera ++;
    }while(texto.length != bandera)
    return encriptado;
}

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

}

let phrase ="murcielago murcielago murcielago";
console.log(miTexto(phrase))

let mensajeEncriptado = miTexto(phrase);

console.log(desencriptar(mensajeEncriptado));
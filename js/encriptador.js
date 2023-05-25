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
        encriptado += 'enter';
        }
        if(texto[bandera]=="i"){
        encriptado += 'imes';
        }
        if(texto[bandera]=="a"){
        encriptado += 'ai';
        }
        if(texto[bandera]=="o"){
        encriptado += 'ober';
        }
        if(texto[bandera]=="u"){
        encriptado += 'ufat';
        }
        else{
        encriptado += text[bandera];
        }
        
        bandera ++;
    }while(texto.length != bandera)
    return encriptado;
}

let phrase ="Una gatita que le gusta el mambo";
console.log(miTexto(phrase))
//invocar módulo
const fs=require('fs');
//Leer archio vacío
fs.readFile('cidem.txt', 'utf8',(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    console.log(data);
});

//Escribir sobre el Archivo, Leer archivo cambiado
fs.writeFile('cidem.txt', 'Este es el curso de NodeJSdek CIDEM',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Archivo cambiado");
});
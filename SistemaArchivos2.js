//invocar módulos
const fs=require('fs');
//fusionar códigos
fs.writeFile('cidem.txt', 'Este es el Instituto Tecnológico Superior Zacatecas Norte',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Archivo cambiado");
});

//Leer archivo cambiado
fs.readFile('cidem.txt', 'utf8',(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    console.log(data);
});

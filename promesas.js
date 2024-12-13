const fs= require('fs').promises;

fs.readFile('cidem.txt', 'utf8')
.then(data=>{
    console.log('Promesa Cumplida los datos del archivo son:', data);
})
.catch(err=>{
    console.error('El archivo no se encuentra o está dañado',err);
});
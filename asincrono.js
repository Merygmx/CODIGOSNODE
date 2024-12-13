function promesaEjemplo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('!Promesa resuelta!')
        },3000);
    });
}

async function asincrona(){
    const mensaje= await promesaEjemplo();
    //const mensaje= promesaEjemplo();
    console.log(mensaje);
}

asincrona();
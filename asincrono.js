function promesaEjemplo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>)
    });
}

async function asincrona(){
    const mensaje= await promesaEjemplo();
    console.log(mensaje);
}
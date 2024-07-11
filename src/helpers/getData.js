const getData = async (url)=> { 
    try {
        const respuesta = await fetch (url)
        const resultado = await respuesta.json();
        return resultado;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}


export default getData;

function agregarBotonesDeFiltrado(
    listaCategorias,
    contenedorFiltros,
    listaProductos,
    contenedorProductos) {
    listaCategorias.forEach((element) => {
        const item = document.createElement('li');
        const boton = document.createElement("button");
        boton.classList.add('button__options');
        boton.id = element;
        boton.textContent = element;

        boton.addEventListener("click", () => {

            ejecutarFiltros(element, contenedorFiltros.children, listaProductos, contenedorProductos)
        });
        item.appendChild(boton);
        contenedorFiltros.appendChild(item);
    });
}

function ejecutarFiltros(categoriaAFiltrar, menuFiltro, listaProductos, contenedorProductos) {
    activarBoton(menuFiltro, categoriaAFiltrar);
    const productosFiltrados = filtrarVideosCategoria(listaProductos, categoriaAFiltrar);
    pintarCards(productosFiltrados, contenedorProductos);
    
}


function activarBoton(listaBotones, botonAActivar) {
    for (const item of listaBotones) {
        const boton = item.querySelector('button');
        boton.classList.add('button__options');
        boton.classList.remove("button__active");
        if (boton.id === botonAActivar) {
            boton.classList.remove('button__options');
            boton.classList.add("button__active");
        }
    }
}


function pintarCards(listaProductos, contenedorProductos) {
    if (listaProductos.length > 0) {
        contenedorProductos.innerHTML = "";

        listaProductos.forEach((product) => {
            const card = document.createElement("article");
            card.classList.add('card__container');

            const enlace = document.createElement('a');
            enlace.href = `/src/pages/product_details.html?id=${product.id}`
            enlace.classList.add('card__container-link');

            const figure = document.createElement("figure");
            const imagen = document.createElement('img');
            imagen.src = product.productImages[0].imagen1;
            imagen.alt = product.name;

            const div = document.createElement('div');
            const titulo = document.createElement('h2');
            titulo.textContent = product.name;

            const precio = document.createElement('span');
            precio.textContent = `$ ${(product.price).toLocaleString(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`


            const section = document.createElement("section");

            figure.appendChild(imagen);
            div.appendChild(titulo);
            div.appendChild(precio);
            enlace.appendChild(figure);
            enlace.appendChild(div);
            card.appendChild(enlace);


            contenedorProductos.appendChild(card);
        });
    } else {
        contenedorProductos.textContent = "no hay productos disponibles"
    }
}

function filtrarVideosCategoria(listaProductos, nombreCategoria) {
    return (nombreCategoria === "todos-products") ? listaProductos : listaProductos.filter(product => product.type === nombreCategoria);
}



// busqueda por nombre


function busquedaVideoPorNombre(listaProductos, nombreAbuscar) {
    return listaProductos.filter((product) => product.name.toLowerCase().includes(nombreAbuscar.toLowerCase()));

}


// filtrado por precio

function filtrosAvanzados(products, order) {
    const orderedProducts = [...products];
    switch (order) {
        case "ascending":
            orderedProducts.sort((a, b) => a.price - b.price);
            break;
        case "descending":
            orderedProducts.sort((a, b) => b.price - a.price);
            break
        default:
            break;

    }
    return orderedProducts
};


export { agregarBotonesDeFiltrado, pintarCards, ejecutarFiltros, busquedaVideoPorNombre ,filtrosAvanzados}
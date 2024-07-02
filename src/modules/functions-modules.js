
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
    console.log(`Hice click en el filtro ${categoriaAFiltrar}`);
    // mostrarFiltroActivo(contenedorFiltros.children, element);
    activarBoton(menuFiltro, categoriaAFiltrar);
    const videosFiltrados = filtrarVideosCategoria(listaProductos, categoriaAFiltrar);
    pintarCards(videosFiltrados, contenedorProductos)
}

function mostrarFiltroActivo(botonesFiltrado, filtroAActivar) {
    for (const boton of botonesFiltrado) {
        boton.classList.remove("button__active");
        if (boton.id === filtroAActivar) {
            boton.classList.add("button__active");
        }
    }
}

function activarBoton(listaBotones, botonAActivar) {
    for (const item of listaBotones) {
        const boton = item.querySelector('button');
        boton.classList.remove("active");
        if (boton.id === botonAActivar) {
            boton.classList.add("active");
        }
    }
}


function pintarCards(listaProductos, contenedorProductos) {
    if (listaProductos.length > 0) {
        contenedorProductos.innerHTML = "";

        listaProductos.forEach((product) => {
            const card = document.createElement("article");
            const figure = document.createElement("figure");
            const section = document.createElement("section");
            const play = document.createElement('button')

            figure.innerHTML = `
        <img src=${product.poster} alt=${product.namevideo}>
        <figcaption>13:55</figcaption>
      `;

            section.innerHTML = `
        <figure>
          <img src=${product.avatar} alt=${product.username}>
        </figure>
        <div>
          <h2>${product.namevideo}</h2>
          <p>${product.username}</p>
          <p>${product.vistas} vistas - ${product.fecha}</p>
        </div>
      `;

            play.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#666666"><path d="m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
      `;

            play.addEventListener('click', () => {
                window.location.href = "/src/pages/detalleVideo.html";
            })

            card.classList.add('card__container');

            card.appendChild(figure);
            card.appendChild(section);
            figure.appendChild(play)
            contenedorProductos.appendChild(tarjeta);
        });
    } else {
        contenedorProductos.textContent = "no se encontraron video"
    }
}

function filtrarVideosCategoria(listaProductos, nombreCategoria) {
    return (nombreCategoria === "allItems") ? listaProductos : listaProductos.filter(product => product.type === nombreCategoria);
}



// busqueda por nombre


function busquedaVideoPorNombre(listaProductos, nombreAbuscar) {

    return listaProductos.filter((product) => product.name.toLowerCase().includes(nombreAbuscar.toLowerCase()))
}


export { agregarBotonesDeFiltrado, pintarCards, ejecutarFiltros, busquedaVideoPorNombre }
import { productData } from "/src/modules/data/products-data.js";
import { agregarBotonesDeFiltrado, pintarCards, ejecutarFiltros, busquedaVideoPorNombre, filtrosAvanzados } from "/src/modules/functions-modules.js"


// Filtros

// Contenedores 
const filterButtons = document.getElementById("filterButtons");
const contenedorProductos = document.querySelector(".main__cards");
const categorias = [...new Set(productData.map(product => product.type))];
const formularioDeBusqueda = document.getElementById("formularioDeBusqueda");
const sortByOptionsSelect = document.getElementById("sortByOptions");
const entradaDeBusqueda = document.getElementById("entradaDeBusqueda");




const botonTodos = document.getElementById("todos-products");
console.log(botonTodos);
botonTodos.addEventListener('click', (evento) => {
    ejecutarFiltros(evento.target.id, filterButtons.children, productData, contenedorProductos);
});



agregarBotonesDeFiltrado(categorias, filterButtons, productData, contenedorProductos)
pintarCards(productData, contenedorProductos);


formularioDeBusqueda.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const entradaDeBusqueda = document.getElementById("entradaDeBusqueda");
    const terminoBusqueda = entradaDeBusqueda.value.trim();
    
    if (terminoBusqueda !== "") {
        const resultadoBusqueda = busquedaVideoPorNombre(productData, terminoBusqueda);
        pintarCards(resultadoBusqueda, contenedorProductos);
    } else {
        pintarCards(productData, contenedorProductos);
    };
    });


    // Si no hay término de búsqueda, mostramos todos los productos nuevamente

    entradaDeBusqueda.addEventListener('input', () => {
        const terminoBusqueda = entradaDeBusqueda.value.trim();
    if (terminoBusqueda === "") {
        pintarCards(productData, contenedorProductos);
    }
    })

// ================ filtrado por precio ========================


sortByOptionsSelect.addEventListener("change", (evento) => {
    const selectedOptionId = evento.target.selectedOptions[0].id;
    let productosOrdenados;

    switch (selectedOptionId) {
        case "ascending":
            productosOrdenados = filtrosAvanzados(productData, "ascending")
            break;
        case "descending":
            productosOrdenados = filtrosAvanzados(productData, "descending");
            break;
        case "all":
            productosOrdenados = productData;
            break;
        default:
            productosOrdenados = productData;
            break;
    }

    pintarCards(productosOrdenados, contenedorProductos);
});

document.addEventListener("DOMContentLoaded", () => {
    // Simular el evento change para ejecutar el filtro inicial
    sortByOptionsSelect.dispatchEvent(new Event('change'));
});

// ===================================================
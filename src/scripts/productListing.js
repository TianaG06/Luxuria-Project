import { productData } from "/src/modules/data/products-data.js";
import { agregarBotonesDeFiltrado, pintarCards, ejecutarFiltros, busquedaVideoPorNombre } from "/src/modules/functions-modules.js"


// Filtros

// Contenedores 
const filterButtons = document.getElementById("filterButtons");
const contenedorProductos = document.querySelector(".main__cards");

const categorias = [...new Set(productData.map(product => product.type))]; 



const botonTodos = document.getElementById("todos-products");
console.log(botonTodos);
botonTodos.addEventListener('click', (evento)=> {
    ejecutarFiltros(evento.target.id, filterButtons.children,productData,contenedorProductos)
});



agregarBotonesDeFiltrado(categorias, filterButtons, productData, contenedorProductos)
pintarCards(productData, contenedorProductos);
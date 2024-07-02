import { productData } from "/src/modules/data/products-data.js";
import { agregarBotonesDeFiltrado, pintarCards, ejecutarFiltros, busquedaVideoPorNombre } from "/src/modules/functions-modules.js"


// Filtros

// Contenedores 
const filterButtons = document.getElementById("filterButtons");
const contenedorProductos = document.querySelector("contenedorProductos");

const categorias = [...new Set(productData.map(product => product.type))]; 



agregarBotonesDeFiltrado(categorias, filterButtons, productData)
pintarCards(productData, contenedorProductos);
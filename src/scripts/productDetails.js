import { productData } from "../modules/data/products-data.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));
const contenedorDeDetalles = document.getElementById('product-details-container');
const productname = document.getElementById(productName);


function generarProductDetails(productId, listaDeProductos, contenedorDeDetalles) {

    const product = listaDeProductos.find(product => product.id === productId);

    if (!product) {
        console.error(`El producto con ID ${productId} no se encuentra.`)
        contenedorDeDetalles.innerHTML = `El producto con ID ${productId} no se encuentra.`;
    } else {
        const productname = document.getElementById('productName');
        productname.textContent = product.name;
        // contenedorDeDetalles.innerHTML = "";
    }
}


generarProductDetails(productId, productData, contenedorDeDetalles);
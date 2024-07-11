// IMPORTS
import { getProducts } from "/src/config/apiController.js";

// VARIABLES
const cartShop = []
localStorage.setItem('cartShop', JSON.stringify(cartShop));

// DATA
const productData = await getProducts();
const productId = sessionStorage.getItem('productId');
const product = productData.find(product => product.id === productId);

const contenedorDeDetalles = document.getElementById('product-details-container');
const productname = document.getElementById(productName);



const contenedorDeBotonesColors =  document.getElementById('contenedorDeBotonesColors');
const coloresDisponibles = [...new Set(product.inStock.map(product => product.color))];

const tallasDisponibles = [...new Set(product.inStock.map(product => product.tallas))];


function agregarColoresDisponibles (coloresDisponibles,contenedorDeBotonesColors,producto) {
    coloresDisponibles.forEach(element => {
        const item = document.createElement('li');
        const boton = document.createElement("button");
        boton.classList.add(element,'color-option-button');
        boton.id = element;
        
        boton.addEventListener("click", () => {

            console.log(`hola aqui ${element}`);
            // ejecutarFiltros(element, contenedorDeBotonesColors.children, product)

            activarBotonColores(contenedorDeBotonesColors.children, element);
        });
        item.appendChild(boton);
        contenedorDeBotonesColors.appendChild(item);
    });
};


function activarBotonColores(listaBotones, botonAActivar) {
    for (const item of listaBotones) {
        const boton = item.querySelector('button');
        boton.classList.remove("colorSelected");
        if (boton.id === botonAActivar) {
            boton.classList.add("colorSelected");
        }
    }
};


function generarProductDetails(product, contenedorDeDetalles) {


    if (!product) {
        console.error(`El producto con ID ${productId} no se encuentra.`)
        contenedorDeDetalles.innerHTML = `El producto con ID ${productId} no se encuentra.`;
    } else {
        const productname = document.getElementById('productName');
        productname.textContent = product.name;

        const productCode = document.getElementById('productCode');
        productCode.textContent = product.bar_Code;

        const productPrice = document.getElementById('productPrice');
        productPrice.textContent = `$ ${(product.price).toLocaleString(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

        


        
    }
}



agregarColoresDisponibles(coloresDisponibles,contenedorDeBotonesColors,productId);
generarProductDetails(product, contenedorDeDetalles);
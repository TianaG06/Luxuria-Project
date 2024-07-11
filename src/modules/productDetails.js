function addGallery(fotosDisponibles, contendor, producto) {

    const mainImageContainer = document.createElement('div');
    mainImageContainer.classList.add("img-galery__main-img-wrap");

    const asideConteiner = document.createElement('aside');
    asideConteiner.classList.add("img-galery__aside-conteiner");


    const figureImageContainer = document.createElement('figure')
    figureImageContainer.classList.add('main-img__container');


    const imgPrincipal = document.createElement('img');
    imgPrincipal.src = fotosDisponibles.imagen1;
    imgPrincipal.alt = producto.name;

    const botonFavoritos = document.createElement('input');
    botonFavoritos.type = 'checkbox';
    botonFavoritos.classList.add('checkbox-favorito');
    botonFavoritos.id = 'favorito';

    const labelDeFavoritos = document.createElement('label');
    labelDeFavoritos.classList.add('label-favorito')
    labelDeFavoritos.setAttribute('for', 'favorito');

    figureImageContainer.appendChild(imgPrincipal);
    mainImageContainer.appendChild(figureImageContainer);

    mainImageContainer.appendChild(botonFavoritos);
    mainImageContainer.appendChild(labelDeFavoritos),
        contendor.appendChild(asideConteiner);
    contendor.appendChild(mainImageContainer);


    let esLaPrimeraImagen = true;

    for (const url in fotosDisponibles) {
        if (fotosDisponibles.hasOwnProperty(url)) {
            const imgURL = fotosDisponibles[url];

            const asideImgContainer = document.createElement('figure');
            asideImgContainer.classList.add('img-container');
            const asideImg = document.createElement('img');

            asideImg.src = imgURL;
            asideImg.alt = `${producto.name} ${url}`;

            if (esLaPrimeraImagen) {
                asideImgContainer.classList.add('selected-Active');
                esLaPrimeraImagen = false;
            }

            asideImgContainer.addEventListener('click', () => {
                imgPrincipal.src = imgURL;
                imgPrincipal.alt = `${producto.name} ${url}`;

                document.querySelectorAll('.img-container').forEach(container => {
                    container.classList.remove('selected-Active')
                });

                asideImgContainer.classList.add('selected-Active');

            });

            asideImgContainer.appendChild(asideImg);
            asideConteiner.appendChild(asideImgContainer);

        }
    }
}


function agregarColoresDisponibles(coloresDisponibles, contenedor, producto) {

    const title = document.createElement('h3');
    title.textContent = 'Select Color  ';
    title.classList.add('text__colors-option');

    const span = document.createElement('span');
    const contenedorDeBotonesColors = document.createElement('ul');
    contenedorDeBotonesColors.classList.add('buttons-container__colors-option');

    contenedor.appendChild(title);
    title.appendChild(span);
    contenedor.appendChild(contenedorDeBotonesColors);

    coloresDisponibles.forEach(element => {
        const item = document.createElement('li');
        const boton = document.createElement("button");
        boton.classList.add(element, 'color-option-button');
        boton.id = element;

        boton.addEventListener("click", () => {

            console.log(`hola aqui ${element}`);
            title.textContent = `Color ${element}`;
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

        const productDetailsNavTitle = document.getElementById('product-details__navTitle');
        productDetailsNavTitle.textContent = product.name;

        const productname = document.getElementById('productName');
        productname.textContent = product.name;

        const productCode = document.getElementById('productCode');
        productCode.textContent = `Code ${product.bar_Code}`;

        const productPrice = document.getElementById('productPrice');
        productPrice.textContent = `$ ${(product.price).toLocaleString(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;





    }
}


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

// Colores
const colorsOptionsContainer = document.getElementById("colors-option");
const contenedorDeBotonesColors = document.getElementById('contenedorDeBotonesColors');
const coloresDisponibles = [...new Set(product.inStock.map(product => product.color))];

// Tallas
const tallasDisponibles = [...new Set(product.inStock.map(product => product.tallas))];

// Galeria
const photosDisponibles = { ...product.productImages[0] };
const contenedorGaleria = document.getElementById('contenedorGaleria');

addGallery(photosDisponibles, contenedorGaleria, product);


if (!coloresDisponibles) {
    colorsOptionsContainer.innerHTML = "";

} else {
    agregarColoresDisponibles(coloresDisponibles, colorsOptionsContainer, product);
}

generarProductDetails(product, contenedorDeDetalles);
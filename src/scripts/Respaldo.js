// filtrado por tipo

const carShop = [];
const productsArr = productData;


const productsFilterByType = (products, productType) => {
    return products.filter((product) => product.type.toLowerCase() === productType.toLowerCase());
};

const productTypeCategorys = "Collar"
const productosFiltrados = productsFilterByType(productsArr, productTypeCategorys);
console.log(productosFiltrados);

// filtrado por nombre

const productsFilterByName = (products, TermOfSearch) => {
    return products.filter((product) => product.name.toLowerCase().includes(TermOfSearch.toLowerCase()));
};

const NameSearchInput = "Lux";
const productsFound = productsFilterByName(productsArr, NameSearchInput)

console.log(productsFound);

// Filtrado por precio

const productsFilterByPrice = (products, order) => {
    const orderedProducts = [...products];
    switch (order) {
        case "acendente":
            orderedProducts.sort((a, b) => a.price - b.price);
            break;
        case "decendente":
            orderedProducts.sort((a, b) => b.price - a.price);
            break
        default:
            break;

    }
    return orderedProducts
};

console.log(productsFilterByPrice(productsArr, "acendente"));
console.log(productsFilterByPrice(productsArr, "decendente"));


// Total a pagar



const cantidadProducto = 18;
const productID = 4;

const AgregarAlCarrito = (id) => {
    if (isNaN(productID) || isNaN(cantidadProducto) || cantidadProducto < 0) {
        alert('ID no valido ');
    } else {
        const productSelected = productData.find(product => product.id === productID);
        console.log(productSelected);
        if (productSelected) {
            const subtotal = productSelected.price * cantidadProducto;

            carShop.push({
                id: productSelected.id,
                name: productSelected.name,
                price: productSelected.price,
                cantidad: cantidadProducto,
                subtotal: subtotal
            });
            console.log(`Añadido al carrito: ${productSelected.name} - Cantidad: ${cantidadProducto}`);
            console.table(carShop);

            carShop.forEach(producto => {
                console.log(`ID: ${producto.id}, Nombre: ${producto.name}, Cantidad: ${producto.cantidad}, Precio Unitario: ${producto.price}`);
            });
            calcularTotalCarrito();
        } else {
            alert('El producto seleccionado no existe.');
        }
    };
}

const calcularTotalCarrito = () => {
    const total = carShop.reduce((acu, item) => acu + item.subtotal, 0).toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true,
    });
    console.log(`Total del carrito: $${total}`);
}

AgregarAlCarrito(productID);


//Filtros botones product listing Tatiana 

// const filtrosProducts = document.getElementById("filtros-products");

// const listaProducts = productData.map((productData) => productData.categoria);
// const categorias = [...new Set(listaProducts)]; 
// const contenedorProducts = document.querySelector("product-listing");


//Funcionalidad botones "todos" product listing

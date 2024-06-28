import { productData } from "/src/modules/data/products-data.js";

const productsArr = productData;

// filtrado por tipo

const productsFilterByType = (products, productType) => {
    return products.filter((product) =>  product.type.toLowerCase() === productType.toLowerCase());
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
        case "acendente" : 
        orderedProducts.sort((a, b) => a.price - b.price);
        break;
        case "decendente" : 
        orderedProducts.sort((a, b) => b.price - a.price);
        break
        default:
        break;

    }
    return orderedProducts
};

console.log(productsFilterByPrice(productsArr,"acendente"));
console.log(productsFilterByPrice(productsArr,"decendente"));



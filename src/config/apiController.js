import { getData } from "/src/services/apiService.js";

// URL API
const URL_JSON = 'http://localhost:3000/productos/';


// Function
async function getProducts() {
    try {
        const Data = await getData(URL_JSON);
        return Data;
    } catch (error) {
        console.error(error);
        return null;
    }

};



export { getProducts }
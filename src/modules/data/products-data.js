// Code create by Hice Klent

export const productData = [

    {
        id: 0,
        name: "Luxury Charms Ring",
        bar_Code: "123456",
        price: 620000,
        type: "Anillo",
        product_Img: "/src/assets/img/products-details/image1.webp",
        description: "Anillo Luxury de  plata con gema de zafiros",
        inStock: [
            { talla: 48, color: "white", cantidad: 5 },
            { talla: 50, color: "orange", cantidad: 2 },
            { talla: 52, color: "morado", cantidad: 1 },
            { talla: 54, color: "orange", cantidad: 5 },
            { talla: 56, color: "azul", cantidad: 5 },
            { talla: 58, color: "azul", cantidad: 5 },
            { talla: 60, color: "azul", cantidad: 5 },
            { talla: 62, color: "azul", cantidad: 5 },
            { talla: 64, color: "azul", cantidad: 5 },
            { talla: 66, color: "azul", cantidad: 5 },
            { talla: 68, color: "azul", cantidad: 5 },
            { talla: 70, color: "azul", cantidad: 5 },
        ],
        stockTotal: function () {
            let total = 0;
            for (let item of this.inStock) {
                total += item.cantidad;
            };
            return total ;
        },
    },

    {
        id: 1,
        name: "Luxury Gems Necklace",
        bar_Code: "A001",
        price: 168.76,
        type: "Collar",
        product_Img: "/src/assets/img/home/Luxury Gems Necklaces.webp",
        description: "Collar Luxury de plata con gema de diamante",
        inStock: [
            { talla: "XS", color: "plateado", cantidad: 7, },
            { talla: "S", color: "dorado", cantidad: 2, },
            { talla: "M", color: "morado", cantidad: 6, },
            { talla: "L", color: "azul", cantidad: 5, },
        ],
        stockTotal: function () {
            let total = 0;
            for (let item of this.inStock) {
                total += item.cantidad;
            };
            return total ;
        },
    },

    {
        id: 2,
        name: "Aurora Ring",
        bar_Code: "B001",
        price: 125.28,
        type: "Anillo",
        product_Img: "/src/assets/img/home/Aurora Ring.webp",
        description: "Aurora Ring de oro con gemas",
        inStock: [
            { talla: 48, color: "plateado", cantidad: 10, },
            { talla: 50, color: "dorado", cantidad: 2, },
            { talla: 52, color: "white", cantidad: 6, },
            { talla: 54, color: "azul", cantidad: 8, },
        ],
        stockTotal: function () {
            let total = 0;
            for (let item of this.inStock) {
                total += item.cantidad;
            };
            return total ;
        },
    },

    {
        id: 3,
        name: "Reflections Necklace",
        bar_Code: "A002",
        price: 620.73,
        type: "Collar",
        product_Img: "/src/assets/img/home/Reflections Necklace.webp",
        description: "Collar Reflections de plata con color rojo",
        inStock: [
            { talla: "XS", color: "plateado", cantidad: 10, },
            { talla: "S", color: "dorado", cantidad: 7, },
            { talla: "M", color: "blanco", cantidad: 8, },
            { talla: "L", color: "azul", cantidad: 2, },
        ],
        stockTotal: function () {
            let total = 0;
            for (let item of this.inStock) {
                total += item.cantidad;
            };
            return total ;
        },
    },

    {
        id: 4,
        name: "Dreamy Infinity Ring",
        bar_Code: "B002",
        price: 327.71,
        type: "Anillo",
        product_Img: "/src/assets/img/home/Dreamy Infinity Ring.webp",
        description: "Collar Reflections de plata con color rojo",
        inStock: [
            { talla: 48, color: "plateado", cantidad: 10, },
            { talla: 50, color: "dorado", cantidad: 4, },
            { talla: 52, color: "morado", cantidad: 1, },
            { talla: 54, color: "azul", cantidad: 9, },
        ],
        stockTotal: function () {
            let total = 0;
            for (let item of this.inStock) {
                total += item.cantidad;
            };
            return total ;
        },
    },
]


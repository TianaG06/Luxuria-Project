// Code create by Hice Klent

export const productData = [

    {
        id: 0,
        name: "Luxury Charms Ring",
        bar_Code: "123456",
        price: 620000,
        type: "Anillo",
        productImages: [
            {
            imagen1: "/src/assets/img/products-details/image1.webp",
            imagen2: "/src/assets/img/products-details/image1.webp",
            imagen3: "/src/assets/img/products-details/image1.webp",
            imagen4: "/src/assets/img/products-details/image1.webp",
            }
        ],
        description: "Anillo Luxury de  plata con gema de zafiros",
        inStock: [
            { talla: 48, color: "white", cantidad: 5, count: 1},
            { talla: 50, color: "orange", cantidad: 2, count: 1},
            { talla: 52, color: "morado", cantidad: 1, count: 1},
            { talla: 54, color: "orange", cantidad: 5, count: 1},
            { talla: 56, color: "azul", cantidad: 5, count: 1 },
            { talla: 58, color: "azul", cantidad: 5, count: 1 },
            { talla: 60, color: "azul", cantidad: 5, count: 1 },
            { talla: 62, color: "azul", cantidad: 5, count: 1 },
            { talla: 64, color: "azul", cantidad: 5, count: 1 },
            { talla: 66, color: "azul", cantidad: 5, count: 1 },
            { talla: 68, color: "azul", cantidad: 5, count: 1 },
            { talla: 70, color: "azul", cantidad: 5, count: 1 },
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
        productImages: [
            {
            imagen1: "/src/assets/img/products/luxury-gems-necklace/Luxury_Gems_Necklaces.webp",
            imagen2: "/src/assets/img/products/luxury-gems-necklace/Luxury_Gems_Necklaces.webp",
            imagen3: "/src/assets/img/products/luxury-gems-necklace/Luxury_Gems_Necklaces.webp",
            imagen4: "/src/assets/img/products/luxury-gems-necklace/Luxury_Gems_Necklaces.webp",
            }
        ],

        description: "Collar Luxury de plata con gema de diamante",
        inStock: [
            { talla: "XS", color: "plateado", cantidad: 7, count: 1 },
            { talla: "S", color: "dorado", cantidad: 2, count: 1 },
            { talla: "M", color: "morado", cantidad: 6, count: 1 },
            { talla: "L", color: "azul", cantidad: 5, count: 1 },
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
        productImages: [
            {
            imagen1: "/src/assets/img/products/aurora-ring/Aurora_Ring.webp",
            imagen2: "/src/assets/img/products/aurora-ring/Aurora_Ring.webp",
            imagen3: "/src/assets/img/products/aurora-ring/Aurora_Ring.webp",
            imagen4: "/src/assets/img/products/aurora-ring/Aurora_Ring.webp",
            }
        ],

        description: "Aurora Ring de oro con gemas",
        inStock: [
            { talla: 48, color: "plateado", cantidad: 10, count: 1 },
            { talla: 50, color: "dorado", cantidad: 2, count: 1 },
            { talla: 52, color: "white", cantidad: 6, count: 1 },
            { talla: 54, color: "azul", cantidad: 8, count: 1 },
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
        productImages: [
            {
            imagen1: "/src/assets/img/products/reflections-necklace/Reflections_Necklace.webp",
            imagen2: "/src/assets/img/products/reflections-necklace/Reflections_Necklace.webp",
            imagen3: "/src/assets/img/products/reflections-necklace/Reflections_Necklace.webp",
            imagen4: "/src/assets/img/products/reflections-necklace/Reflections_Necklace.webp",
            }
        ],

        description: "Collar Reflections de plata con color rojo",
        inStock: [
            { talla: "XS", color: "plateado", cantidad: 10, count: 1 },
            { talla: "S", color: "dorado", cantidad: 7,  count: 1},
            { talla: "M", color: "blanco", cantidad: 8, count: 1 },
            { talla: "L", color: "azul", cantidad: 2, count: 1 },
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
        productImages: [
            {
            imagen1: "/src/assets/img/products/dreamy-infinity-ring/Dreamy_Infinity_Ring.webp",
            imagen2: "/src/assets/img/products/dreamy-infinity-ring/Dreamy_Infinity_Ring.webp",
            imagen3: "/src/assets/img/products/dreamy-infinity-ring/Dreamy_Infinity_Ring.webp",
            imagen4: "/src/assets/img/products/dreamy-infinity-ring/Dreamy_Infinity_Ring.webp",
            }
        ],

        description: "Anillo Dreamy de color rosado con piedras preciosas",
        inStock: [
            { talla: 48, color: "plateado", cantidad: 10, count: 1 },
            { talla: 50, color: "dorado", cantidad: 4, count: 1 },
            { talla: 52, color: "morado", cantidad: 10, count: 1 },
            { talla: 54, color: "azul", cantidad: 5, count: 1 },
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
        id: 5,
        name: "Opulent Jewels Ring",
        bar_Code: "B003",
        price: 168.76,
        type: "Anillo",
        productImages: [
            {
            imagen1: "/src/assets/img/products/opulent-jewels-ring/Opulent_Jewels_Ring.webp",
            imagen2: "/src/assets/img/products/opulent-jewels-ring/Opulent_Jewels_Ring.webp",
            imagen3: "/src/assets/img/products/opulent-jewels-ring/Opulent_Jewels_Ring.webp",
            imagen4: "/src/assets/img/products/opulent-jewels-ring/Opulent_Jewels_Ring.webp",
            }
        ],

        description: "Anillo Opulent con tonos grises y negros",
        inStock: [
            { talla: 48, color: "plateado", cantidad: 10, count: 1 },
            { talla: 50, color: "dorado", cantidad: 4, count: 1 },
            { talla: 52, color: "morado", cantidad: 1, count: 1 },
            { talla: 54, color: "azul", cantidad: 9, count: 1 },
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
        id: 6,
        name: "Serene Solitaire Earrings",
        bar_Code: "C001",
        price: 125.28,
        type: "Aretes",
        productImages: [
            {
            imagen1: "/src/assets/img/products/serene-solitaire-earrings/Serene_Solitaire_Earrings.webp",
            imagen2: "/src/assets/img/products/serene-solitaire-earrings/Serene_Solitaire_Earrings.webp",
            imagen3: "/src/assets/img/products/serene-solitaire-earrings/Serene_Solitaire_Earrings.webp",
            imagen4: "/src/assets/img/products/serene-solitaire-earrings/Serene_Solitaire_Earrings.webp",
            }
        ],

        description: "Aretes Serene dorados con piedra preciosa azul",
        inStock: [
            { talla: 1, color: "plateado", cantidad: 1, count: 1 },
            { talla: 2, color: "dorado", cantidad: 4, count: 1 },
            { talla: 3, color: "morado", cantidad: 1, count: 1 },
            { talla: 4, color: "azul", cantidad: 7, count: 1 },
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
        id: 7,
        name: "Timeless Halo Earrings",
        bar_Code: "C002",
        price: 620.73,
        type: "Aretes",
        productImages: [
            {
            imagen1: "/src/assets/img/products/timeless-halo-earrings/Timeless_Halo_Earrings.webp",
            imagen2: "/src/assets/img/products/timeless-halo-earrings/Timeless_Halo_Earrings.webp",
            imagen3: "/src/assets/img/products/timeless-halo-earrings/Timeless_Halo_Earrings.webp",
            imagen4: "/src/assets/img/products/timeless-halo-earrings/Timeless_Halo_Earrings.webp",
            }
        ],

        description: "Aretes Timeless de plata con diamantes",
        inStock: [
            { talla: 1, color: "plateado", cantidad: 1, count: 1 },
            { talla: 2, color: "dorado", cantidad: 5, count: 1 },
            { talla: 3, color: "morado", cantidad: 7, count: 1 },
            { talla: 4, color: "azul", cantidad: 7, count: 1 },
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
        id: 8,
        name: "Exquisite Earrings",
        bar_Code: "C003",
        price: 327.71,
        type: "Aretes",
        productImages: [
            {
            imagen1: "/src/assets/img/products/exquisite-earrings-azules/Exquisite_Earrings_azules.webp",
            imagen2: "/src/assets/img/products/exquisite-earrings-azules/Exquisite_Earrings_azules.webp",
            imagen3: "/src/assets/img/products/exquisite-earrings-azules/Exquisite_Earrings_azules.webp",
            imagen4: "/src/assets/img/products/exquisite-earrings-azules/Exquisite_Earrings_azules.webp",
            }
        ],

        description: "Aretes Exquisite de plata con piedra aguamarina",
        inStock: [
            { talla: 1, color: "plateado", cantidad: 1, count: 1 },
            { talla: 2, color: "dorado", cantidad: 2, count: 1 },
            { talla: 3, color: "morado", cantidad: 4, count: 1 },
            { talla: 4, color: "azul", cantidad: 7, count: 1 },
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
        id: 9,
        name: "Timeless Elegance Ring",
        bar_Code: "B004",
        price: 168.76,
        type: "Anillo",
        productImages: [
            {
            imagen1: "/src/assets/img/products/timeless-elegance-ring/Timeless_Elegance_Ring.webp",
            imagen2: "/src/assets/img/products/timeless-elegance-ring/Timeless_Elegance_Ring.webp",
            imagen3: "/src/assets/img/products/timeless-elegance-ring/Timeless_Elegance_Ring.webp",
            imagen4: "/src/assets/img/products/timeless-elegance-ring/Timeless_Elegance_Ring.webp",
            }
        ],

        description: "Anillo Timeless de oro con piedras moradas",
        inStock: [
            { talla: 48, color: "plateado", cantidad: 5, count: 1 },
            { talla: 50, color: "dorado", cantidad: 4, count: 1 },
            { talla: 52, color: "morado", cantidad: 1, count: 1 },
            { talla: 54, color: "azul", cantidad: 9, count: 1 },
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
        id: 10,
        name: "Blissful Bloom Ring",
        bar_Code: "B005",
        price: 620.73,
        type: "Anillo",
        productImages: [
            {
            imagen1: "/src/assets/img/products/blissful-bloom-ring/Blissful_Bloom_Ring.webp",
            imagen2: "/src/assets/img/products/blissful-bloom-ring/Blissful_Bloom_Ring.webp",
            imagen3: "/src/assets/img/products/blissful-bloom-ring/Blissful_Bloom_Ring.webp",
            imagen4: "/src/assets/img/products/blissful-bloom-ring/Blissful_Bloom_Ring.webp",
            }
        ],

        description: "Anillo Blissful dorado",
        inStock: [
            { talla: 48, color: "plateado", cantidad: 5, count: 1 },
            { talla: 50, color: "dorado", cantidad: 4, count: 1 },
            { talla: 52, color: "morado", cantidad: 1, count: 1 },
            { talla: 54, color: "azul", cantidad: 3, count: 1 },
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
        id: 11,
        name: "Sparkling Ring",
        bar_Code: "B006",
        price: 620.73,
        type: "Anillo",
        productImages: [
            {
            imagen1: "/src/assets/img/products/sparkling-ring/Sparkling_Ring.webp",
            imagen2: "/src/assets/img/products/sparkling-ring/Sparkling_Ring.webp",
            imagen3: "/src/assets/img/products/sparkling-ring/Sparkling_Ring.webp",
            imagen4: "/src/assets/img/products/sparkling-ring/Sparkling_Ring.webp",
            }
        ],

        description: "Anillo Sparkling de oro con piedras preciosas",
        inStock: [
            { talla: 48, color: "plateado", cantidad: 5, count: 1 },
            { talla: 50, color: "dorado", cantidad: 4, count: 1 },
            { talla: 52, color: "morado", cantidad: 4, count: 1 },
            { talla: 54, color: "azul", cantidad: 3, count: 1 },
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
        id: 12,
        name: "Glimmering Ring",
        bar_Code: "B008",
        price: 620.73,
        type: "Anillo",
        productImages: [
            {
            imagen1: "/src/assets/img/products/glimmering-ring/Glimmering_Ring.webp",
            imagen2: "/src/assets/img/products/glimmering-ring/Glimmering_Ring.webp",
            imagen3: "/src/assets/img/products/glimmering-ring/Glimmering_Ring.webp",
            imagen4: "/src/assets/img/products/glimmering-ring/Glimmering_Ring.webp",
            }
        ],

        description: "Anillo Glimmering de oro con diamantes",
        inStock: [
            { talla: 48, color: "plateado", cantidad: 5, count: 1 },
            { talla: 50, color: "dorado", cantidad: 3, count: 1 },
            { talla: 52, color: "morado", cantidad: 4, count: 1 },
            { talla: 54, color: "azul", cantidad: 3, count: 1 },
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




stockTotal: function () {
    const total = 0;

    for (let item of this.inStock) {
        total += item.cantidad;
    }
}

inStock: [
    {talla: 35, color:"Red", cantidad: 5, },
    {talla: 35, color:"blue", cantidad: 2, },
    {talla: 35, color:"morado", cantidad: 1, },
    {talla: 35, color:"azul", cantidad: 5, },
]  ,
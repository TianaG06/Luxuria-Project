const stockTotal = (stock) => {
    let total = 0;
    for (let item of stock.instock) {
        total += item.cantidad;
    };
    return total ;
}
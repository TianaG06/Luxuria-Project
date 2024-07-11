const openCart = document.querySelector("#addToBagBtn");
const modal = document.querySelector("#cartShopModule");
const closeCart = document.querySelector("#buttonCloseCartShop");
const cartShopBtn = document.querySelector("#cartShopBtn");

openCart.addEventListener('click', () => {
    modal.classList.add("cartShop__module--show");
})

closeCart.addEventListener('click', () => {
    modal.classList.remove("cartShop__module--show");
})

cartShopBtn.addEventListener('click', () => {
    modal.classList.add("cartShop__module--show");
})

let cartCarD = document.getElementById('cart-card')
let emptyCart = document.getElementById('empty-cart-alert')

itemsArr = document.cookie.split('=')
itemsCookie = itemsArr[1]

if (itemsCookie == 0) {
    cartCarD.classList.add('d-none')
}
else {
    emptyCart.classList.add('d-none')
}
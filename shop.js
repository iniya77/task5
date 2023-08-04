//Cart
//Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
let cartBox=document.getElementsByClassName('cart-box')
//Open Cart
cartIcon.onclick = () => {
cart.classList.add("active");
};
// Close Cart 
closeCart.onclick = () => { 
    cart.classList.remove("active");
};



let icon=document.querySelectorAll("i")

function msgCart() {
    alert("Icon clicked!")
}

icon.addEventListener("click", msgCart);






let cart = []
let total = 0

const cartCount = document.getElementById("cart-count")
const cartItems = document.getElementById("cart-items")
const totalDisplay = document.getElementById("total")

function addToCart(product, price){

cart.push({product,price})

total += price

renderCart()

}

function renderCart(){

cartCount.innerText = cart.length

cartItems.innerHTML = ""

cart.forEach((item,index)=>{

let li = document.createElement("li")

li.innerHTML = `
${item.product} - Rp${item.price}
<button onclick="removeItem(${index})">x</button>
`

cartItems.appendChild(li)

})

totalDisplay.innerText = total

}

function removeItem(index){

total -= cart[index].price

cart.splice(index,1)

renderCart()

}

function toggleCart(){

const cartModal = document.getElementById("cart")

cartModal.style.display =
cartModal.style.display === "block" ? "none" : "block"

}

function showCheckout(){

document.getElementById("order").scrollIntoView({
behavior:"smooth"
})

}



/* CHECKOUT WA */

document.getElementById("checkoutForm").addEventListener("submit",function(e){

e.preventDefault()

let name = document.getElementById("name").value
let phone = document.getElementById("phone").value
let address = document.getElementById("address").value

let message = "Halo, saya ingin memesan CACINO.%0A"

cart.forEach(item=>{
message += `${item.product} - Rp${item.price}%0A`
})

message += `%0ATotal: Rp${total}%0A`
message += `Nama: ${name}%0A`
message += `No WA: ${phone}%0A`
message += `Alamat: ${address}`

window.open(`https://wa.me/6281234567890?text=${message}`)

})



/* TESTIMONIAL SLIDER */

let testimonials = document.querySelectorAll(".testimonial")

let index = 0

setInterval(()=>{

testimonials[index].classList.remove("active")

index = (index+1)%testimonials.length

testimonials[index].classList.add("active")

},4000)

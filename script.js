
let cart = []
let total = 0

function addToCart(product, price){

cart.push({product,price})

total += price

updateCart()

}

function updateCart(){

document.getElementById("cart-count").innerText = cart.length

let items = document.getElementById("cart-items")
items.innerHTML = ""

cart.forEach((item,index)=>{

let li = document.createElement("li")

li.innerHTML = `
${item.product} - Rp${item.price}
<button onclick="removeItem(${index})">X</button>
`

items.appendChild(li)

})

document.getElementById("cart-total").innerText = total

}

function removeItem(index){

total -= cart[index].price
cart.splice(index,1)

updateCart()

}

function toggleCart(){

let cartModal = document.getElementById("cart")

if(cartModal.style.display === "block"){
cartModal.style.display = "none"
}else{
cartModal.style.display = "block"
}

}

function checkout(){

let message = "Halo, saya ingin memesan CACINO.%0A"

cart.forEach(item=>{
message += item.product + " - Rp" + item.price + "%0A"
})

message += "Total: Rp" + total

window.open("https://wa.me/6281234567890?text="+message)

}

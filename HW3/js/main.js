// 1 
let a = [2, 3, 5, 7];
let i = 0;
while (i <= 100) {
    let natural = true;
    for (let j = 0; j < a.length; j++) {
        if (i % a[j] == 0 && i != a[j]) {
            natural = false;
            break;
        }
    }
    if (natural) {
        console.log(i);
    }
    i++;
}

//2 

let cart = [];


function countBasketPrice() {
    let summ = 0;
    for (let i = 0; i < cart.length; i++) {
        summ += cart[i].price * cart[i].quantity;
    }
    return summ;
}
function addToCart(product, quantity, price) {
    cart.push({
        product: product,
        quantity: quantity,
        price: price
    });
}
addToCart("Product1", 2, 153);
addToCart("Product3", 5, 347);
console.log(cart);
console.log(countBasketPrice());


//4.1
for (let i = 0; i < 10; console.log(i++));

//4.2
for (let i = 1; i <= 20; i++) {
    let outputString = "x";
    for (j = 0; j < i - 1; j++) {

        outputString += "x";

    }
    console.log(outputString);
}


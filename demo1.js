const cart=["shoes","pants","kurtas"];

const promise=createOrder(cart);//orderID
// consumer part
promise
.then(function(orderID){
    console.log(orderID);
    proceedToPayment(orderID);
})
.catch(function(err){ //errors handler
    console.log(err.message);
});

//producer part
function createOrder(cart){

    const pr = new Promise(function(resolve,reject){
        //createOrder
        //validateCart
        // calls to database
        // orderID is created
        if (!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }   
        // logic for createOrder
        const orderID = "12345";
        if(orderID){
            resolve(orderID);
        }
    });
    return pr;
}

function validateCart(cart){
    return false;
}
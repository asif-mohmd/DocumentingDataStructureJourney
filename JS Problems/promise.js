const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function () {
    console.log("stage 1");
  })
  .then(function () {
    console.log("stage 2");
  })
  .then(function () {})
  .catch(function (err) {
    console.log("Error:",err)
  });

function createOrder(cart) {
  let data = new Promise((resolve, reject) => {
    if (!validCart(cart)) {
      reject(new Error("Rejection error by valid cart"));
    } else {
      resolve(cart);
    }
  });

  return data
}


function validCart(cart){
       return false
}
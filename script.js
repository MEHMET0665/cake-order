"use strict";

const patisserie = {
  bananaCaramel: {
    stock: 3,
    price: 9.99,
  },
  contessa: {
    stock: 5,
    price: 7.99,
  },
  concorde: {
    stock: 11,
    price: 22.99,
  },
  mouseCake: {
    stock: 8,
    price: 16.99,
  },
  confettiSuprise: {
    stock: 9,
    price: 14.99,
  },
};

const cakeType = document.getElementById('cakeSelect');
const orderAmount = document.getElementById('cakeAmount');
const orderBtn = document.getElementById('submit_btn');


const checkOrder = (order) => {
  console.log(order)
  return  new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(patisserie[order[0]])
        if (patisserie[order[0]].stock>=order[1]){
          let totalpayment=order[1]*patisserie[order[0]].price;
          console.log(`Thank you. Your order for ${order[0]} was successful. The total amount is  ${totalpayment}`);
          resolve([totalpayment,order])
        }else 
          {
              reject(`We're sorry. Solt out.`);
          }
      }, 1000);
  })
};



const payment = (resolvedValueArray) => {
  
  return new Promise((resolve, reject) => {

    let  itemName = resolvedValueArray[1][0]
   let totalpayment=resolvedValueArray[0]
     
      
    setTimeout(() => {
      resolve(resolvedValueArray)
  console.log(`your order confirmation ${itemName} total is ${totalpayment}`)
},1000)
})
}
const stockControl = (resolvedValueArray) => {
  console.log(resolvedValueArray)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       
        resolve(`The stock is for ${resolvedValueArray[1][0]} is  ${patisserie[resolvedValueArray[1][0]].stock-resolvedValueArray[1][1]}`)
    
  },1000)
  })
}
  


orderBtn.onclick = ()=>{
  
  
  let order = [cakeType.value, orderAmount.value];   // sample order template
  checkOrder(order).then(resolved=>payment(resolved))
 .then(resolved1=>stockControl(resolved1))
.then(resolved2=>console.log(resolved2))
 .catch(rejected=>console.log(rejected))


}
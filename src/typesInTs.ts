//Type Inference;

let drink='coffee';
let cups=Math.random()>0.5?5:'10';

//Type Annotations
let flavour:string='sweet';
console.log(flavour)

//Union
let subscriber:string|number=10;
subscriber='10m';

let apiRequest:'pending'|'sucess'|'error'='pending';


//Any
const orders=['20','30','60'];

let currentOrder;

//Prevention (you should be clear about what data type is going to be stored)
// let currentOrder:string|undefined;

for (let order of orders){
  if(order==='28'){
    currentOrder=order;
    break;
  }
  
}

console.log(currentOrder)
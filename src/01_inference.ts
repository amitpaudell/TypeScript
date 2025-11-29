// typescript knows js well
let count=0;
let named='bob';


//annotate ourselves in case of function parameters and return type
function add(a:number,b:number):number{
  return a+b;
}
console.log(add(4,5))

let maybe:string|number;
maybe=Math.random()>0.5?'test':10
console.log(maybe);
function makeOrder(item:string, quantity:number){
  console.log(`Delivering the ${quantity} ${item} `)
}
makeOrder('basketball',4)

//A function whose return type is known
function getItemPrice():number{
  return 3
}

// A function that returns nothing
function logOrder():void{
  console.log('Your order is ready')
}

//Optional Parameter (most used)
function optionalP(type?:string){
  console.log(type)
}
optionalP();
// Default parameter
function defaultP(type:string='Football'){
  console.log(type)
}

//Complex value in function
function createOrder(order:{
  id:number;
  item:string
  quantity:number
}){
  console.log(order)
}

createOrder({id:1, item:"baseball",quantity:4})


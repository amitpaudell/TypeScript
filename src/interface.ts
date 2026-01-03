// Repeating a complex object structure

// const makeChai=(order:{type:String; sugar:number})=>{
//   console.log(order);
// }

// const serveChai=(order:{type:String; sugar:number})=>{
//   console.log(order);
// }

type ChaiOrder={
  type:string;
  sugar:number;
  strong:boolean
}

function makeChai(order:ChaiOrder){
  console.log(order)
}

function serveChai(order:ChaiOrder){
  console.log(order)
}



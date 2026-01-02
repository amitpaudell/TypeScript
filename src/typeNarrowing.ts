
//Narrowing
function myFunction(value:string|number){
  if(typeof value=='string'){

    console.log(value.toUpperCase())
  }
  else{
    console.log(value.toFixed(2))
  }
}
myFunction("Bob")
myFunction(3.14);

//Special case of exhaustive case
class KulhadChai{
  serve(){
    return 'serving'
  }
}

class CuttingChai{
  serve(){
    return 'Cutting chai'
  }
}

function serve(chai:KulhadChai|CuttingChai){
  if(chai instanceof KulhadChai){
    return chai.serve()
  }
}


//CustomType
type ChaiOrder={
  type:String
  sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
  return (
    typeof obj==="object" && obj!==null && typeof obj.type==="string" && typeof obj.sugar==="number"
  )
}

function serveOrder(item:ChaiOrder|string){
  if(isChaiOrder(item)){
    return `Serving ${item.type} chai with ${item.sugar} sugar`
  }

  return `Serving custom chai ${item}`
}

//UserDefined chai

type MasalaChai={type:"masala"; spicelevel:number}
type GingerChai={type:"ginger"; amount:number}
type ElaichiChai={type:"elaichi"; amount:number}

type chai =MasalaChai | GingerChai | ElaichiChai

function makeChai(order:chai){
  switch (order.type) {
    case "masala":
      return "Masala Chai"
      
  
    case "elaichi":
      return "Elaichi chai"
      

    case "ginger":
      return "Ginger chai"
      
      
    default:
      break;
  }
}

// Best example from the by Robin Wieruch about type guard

type Dog={
  name:string;
  age:number;
}

const trixi:Dog={
  name:'Trixi',
  age:49
}

type Person={
  firstName:string;
  lastName:string;
  age: number;
}

const bob:Person={
  firstName:'Bob',
  lastName: 'builder',
  age:20
}

// const celebrateBirthday=(mammal:Person|Dog)=>{
//   return {
//     ...mammal,
//     age:mammal.age+1
//   }
// }
// console.log(celebrateBirthday(trixi).age)
// console.log(celebrateBirthday(bob).age)

//But the problem here is the dog age should increase by 7 and human by 1 so, we use user-defined type guard

const isDog=(mammal:Person|Dog):mammal is Dog=>{
  return (mammal as Dog).name !==undefined;
}

const celebrateBirthday=(mammal:Person|Dog)=>{
  return {
    ...mammal,
    age:isDog(mammal)?mammal.age+7:mammal.age+1
  }
}
console.log(celebrateBirthday(trixi).age)
console.log(celebrateBirthday(bob).age);



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
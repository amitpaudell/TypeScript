type Tea={
  name:string;
  price:number;
  ingredients:string[]
}

const adrakChai:Tea={
  name:'Adrak Chai',
  price:25,
  ingredients:["ginger","tea leaves"]
}

type Cup={size:string}

let smallCup:Cup={size:"200ml"}
let bigCup={size:"400ml",material:"steel"}

smallCup=bigCup;
console.log(smallCup)

//SplitOut Datatype

type Item={name:string, quantity:number}
type Address={street:string, pin:number}

type Order={
  id:number;
  items:Item[];
  address:Address;
}

const order1:Order={
  id:3,
  items:[{name:'basketball',quantity:3},{name:'football',quantity:3}],
  address:{street:'ABC 5',pin:809}
}

console.log(order1)

// Case 1:  for optional Properties
type Chai={
  name:string;
  price:number;
  isHot:boolean
}

const updateChai=(updates:Partial <Chai>)=>{
  console.log("updating chai with", updates)
}

updateChai({price:21});
updateChai({isHot:false})
updateChai({})


//Case 2: Defined-> Option InUse-> Compulsory

type ChaiOrder={
  name?:string;
  quantity?:number;
}

const placeOrder=(order: Required <ChaiOrder> )=>{
console.log(order)
}
placeOrder({name:'lemon tea',quantity:2})

//Case 3: Pick some prom the parent type

type Chai2={
  name:string;
  price:number;
  isHot:boolean;
  ingredients:string[];
}

type BasicChai=Pick <Chai2,"name" | "price">

const chaiInfo:BasicChai={
  name:'Ginger tea',
  price:20
}

// Case 4: Omit from the parent type
type Chai3={
  name:string;
  price:number;
  isHot:boolean;
  secretIngredients:string;
}

type PublicChai= Omit <Chai3,"secretIngredients">
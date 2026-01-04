                                    //Array
const itemsProduct:string[]=['ball','bat'];
const price:number[]=[10,20];

//Generics array
const rating:Array<number>=[4.5,8.7]

//Array of objects
type Order={
  id:number;
  itemName:string;
  price:number;
  quantity:number;
}

const item1:Order[]=[
  {id:1,itemName:'baseball',price:130,quantity:3},
  {id:2,itemName:'marker',price:20,quantity:32}
]

// ReadOnlyArray
//can be defined once but not modified

const cities:readonly string[]=['Butwal','Kathmandu']
// cities.push('Palpa')              wrong

// MultiDimentional Array
const table:number[][]=[
  [1,2,3],
  [4,5,6]
]
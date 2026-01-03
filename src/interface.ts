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

                                //Interfaces
// type  TeaRecipe={
//   water:number;
//   milk:number;
// }

// class MasalaChai implements TeaRecipe{
//   water=100;
//   milk=50;
// }

//It works perfectly fine for the object structure but not for union

// type CupSize='small' | 'large';

// class Chai implements CupSize{
//   CupSize='small'
// }



interface TeaRecipe{
  water:number;
  milk:number
}

class MasalaChai implements TeaRecipe{
  water=100;
  milk=50;
}

interface CupSize{
  size:'small' | 'large'
}

class Chai implements CupSize{
  size: "small" | "large"='large';
}

type BaseChai={tealeaves:number}
type Extra={masala:number}

type MasalaChai2=BaseChai & Extra;

const cup: MasalaChai2={
  tealeaves:2,
  masala:3
}

//What if certain property is optional

type User={
  username:string;
  bio?:string
}

const u1:User={username:'amit'}
const u2:User={username:'amit',bio:'amit.ai'}

//Readonly

type Config={
  readonly appName:string;
  version:1
}

const cfg:Config={
  appName:'CodeName',
  version:1
}

console.log(cfg)
// cfg.appName="Leaf" (Not allowded because because it is a read-only property.)
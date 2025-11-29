let usernam:string="bobby";
let age:number=20
let isHungry:boolean=true;

const big:bigint=2n**63n-1n;

const TOKEN:unique symbol=Symbol('TOKEN');

function yearsToDays(years:number):number{
  return years*365;
}
console.log(yearsToDays(4));
console.log(usernam.toUpperCase())
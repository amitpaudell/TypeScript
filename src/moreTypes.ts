let value:any="42";
let numericLength:number=(value as string).length;

type Book={
  name:string;
}

let bookString='{"name":"who moved my cheese"}';
let bookObject=JSON.parse(bookString) as Book 

console.log(bookObject.name);
//Basic  example of interface

interface Person{
  name:string;
  age:number;
}

interface Employee extends Person{
  jobTitle:string
}

let employee:Employee={
  name:"Tom",
  age:14,
  jobTitle:'Software Engineer'
}
console.log(employee.jobTitle);

//Read only in Interface
interface Shop{
    readonly id:number;
    name:string
}

const s:Shop={id:1,name:'Chai code effect'}
// s.id=2                      Not allowded


//Structure the function
interface Discount{
  (price:number):number;
}

const apply50:Discount=(p)=>p*0.5;
console.log(apply50(200));

//An object must having some functions
interface TeaMachine{
  start():void;
  stop():void;
}

const machine:TeaMachine={
  start(){
    console.log("starting")
  },
  stop(){
    console.log("stopping")
  }
}

//Index Signature
interface UserAge{
  [name:string]:number
}

const userAges:UserAge={
  "alice":20,
  "bob":20
}

//Merging
interface User{
  name:string;
}

interface User{
  age:number;
}

const u:User={
  name:'hitesh',
  age:23
}


                              //Generics
function wrapInArray<T>(item:T):T[]{
  return [item]
}

console.log(wrapInArray("masala"));
console.log(wrapInArray(42))
wrapInArray({flavor:'Ginger'});

//Pairing
function pair<A,B>(a:A,b:B):[A,B]{
  return [a,b]
}
pair("masala",20)
pair("ginger",{flavor:"Ginger"});

//Interface
interface Box <T>{
  content:T
}

const numberBox:Box<number>={content:10};
const newBox:Box<string>={content:'bob'};

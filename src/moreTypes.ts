let value:any="42";
let numericLength:number=(value as string).length;

type Book={
  name:string;
}

let bookString='{"name":"who moved my cheese"}';
let bookObject=JSON.parse(bookString) as Book 

console.log(bookObject.name);

//Never

type Role='admin'|'user';

function redirectRoleBased(role:Role):void{
  if(role==='admin'){
    console.log('Redirecting to admin dashboard')
    return
  }

  if(role==='user'){
    console.log('Redirecting to the user dashboard')
    return
  }
  role //Never
}

function neverReturn():never{
  while(true){}
}
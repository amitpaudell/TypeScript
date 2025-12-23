
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

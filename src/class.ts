class Chai{
  flavour:string;
  price:number;

  constructor(flavour:string,price:number){
    this.flavour=flavour
    this.price=price
  }
}
const masalaChai=new Chai("masala",35);
console.log(masalaChai.flavour);

//Access Modifiers
class Tea{
  public flavor:string="Masala";
  private secretIngredients="Cardamom";

  reveal2(){
    return this.secretIngredients
  }
}

const c=new Tea();
console.log(c.reveal2());
class Shop{
  protected shopName='bake and sell';
}

class Branch extends Shop{
  getShopName(){
    console.log(`Welcome to ${this.shopName}`)
  }
}

const branch=new Branch();


//ReadOnly
class Car{
  public readonly make:string="BMW";

  constructor(make:string){
    this.make=make
  }
}
const car=new Car("Toyota");
// car.make="Suzuki"; //Not allowded since it is readonly
console.log(car.make); 
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


                                    //Tuples

let ourTuple:[number,boolean,string];
ourTuple=[1,true,'book']

//optional value in tuple
let userInfo:[string,number,boolean?]
userInfo=['hitesh',100]
userInfo=['rohan',50,true]
console.log(userInfo)

//read-only tuple
const graph:readonly[number,number]=[4,5]

//named tuple
const location:[x:number,y:number]=[22.5,55.3];

//destructuring tuple
const graphNew:[number,number]=[32,42]
const [x,y]=graphNew;
console.log(x,y);






                                      //Enum
enum CarName{
  HONDA,
  TOYOTA,
  BMW
}
console.log(CarName)
console.log(CarName.HONDA);

//String Enums
enum FruitName{
  APPLE="apple",
  BANANA="banana"
}
console.log(FruitName.APPLE)

//Hetrogeneous Enum
enum StudentDetails{
  NAME='david',
  AGE=20,
  ROLL_NO=2
}
console.log(StudentDetails)


//Use case scenario of ENUM
enum Role{
  STUDENT,
  ADMIN,
  TEACHER
}

function checkAccess(role:Role){
  if(role==Role.ADMIN){
    return "full access";
  }
}

checkAccess(Role.ADMIN)
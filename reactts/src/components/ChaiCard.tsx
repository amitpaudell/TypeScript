interface ChaiCard{
  name:string;
  price:number;
  isSpecial?:boolean
}

const ChaiCard = ({name,price,isSpecial=false}:ChaiCard) => {
  return (
    <div>
      <h2>
       The price of  {name} is {price} {isSpecial && <span>⭐</span>}
      </h2>
      
    </div>
  )
}

export default ChaiCard

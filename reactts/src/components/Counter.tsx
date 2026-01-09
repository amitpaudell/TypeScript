import { useState } from "react"


const Counter = () => {
  const [value,setValue]=useState<number>(0);
  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={()=>setValue((prev)=>prev+1)}>Increase </button>
    </div>
  )
}

export default Counter

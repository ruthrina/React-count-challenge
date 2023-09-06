import React from "react";
import { useState } from "react";

function App(){

  const [count, setCount] = useState(0)

  const handleIncrement =() =>{
    setCount(count + 1)
  }

 const handleDecrement =() =>{
    setCount(count - 1)
  }

  const handleReset =() =>{
    setCount(0)
  }
  

  

  return(
    <div>
      <h1>COUNTER</h1>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  )
}
export default App
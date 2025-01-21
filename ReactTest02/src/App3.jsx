import './App.css'

//State
import { useState } from "react";

const Hello = () =>{
  const [hello, setHello] = useState("y");
  console.log(hello);
  return <div>{hello}</div>
}

const Click = () => {
  const [state, setState] = useState(0);
  return(
    <>
            <h1>{state}</h1>
            <button onClick={()=>{setState(state+1)}}>버튼!</button>
    </>
  ) 
}

function App2() {
  return (
    <>
      <Click />
      <Hello />
    </>
  )
}

export default App2
import './App.css'
import Button from './comp/Button';

//State
import { useState } from "react";

const Hello = ({val}) =>{
  console.log(val);
  return <div>{val}</div>
}

function App2() {
  //const state = useState();
  const [state, setState] = useState(0);

  const [hello, setHello] = useState("y");

  return (
    <>
      <div>
        <h1>{state}</h1>
        <button onClick={()=>{setState(state+1)}}>버튼!</button>
      </div>
      <div>
        <Hello />
      </div>
      <div>
        <Hello val={hello} />
      </div>
    </>
  )
}

export default App2
import Hello from "./components/Hello";
import Button from "./components/Button"
import Button2 from "./components/Button2"

function App() {
  const btnData = {
    name: "박창진",
    age: "21",
    addr: "경기도 하남시",
  }
  return (
    <>
      <div>
        <Hello/>
      </div>
      <div>
        <Button name={"권장현"} age={"20"}/>
        <Button name={"김장현"} age={"19"}/>
        <Button2 info={btnData}/>
      </div>
    </>
  )
}

export default App;



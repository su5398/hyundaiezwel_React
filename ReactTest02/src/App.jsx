import './App.css'
import Button from "./comp/Button"

function App() {
  const data = {
    text:"연습 중",
    no: 1,
    age: 19,
  }

  return (
    <>
      <div>
        Test02
      </div>
      {/* 구조분해할당 */}
      <Button {...data}/>
    </>
  )
}

export default App

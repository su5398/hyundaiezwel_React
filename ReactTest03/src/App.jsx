import './App.css'
//페이지 라우팅

import Home from './pages/Home'
import List from './pages/List'
import Mypage from './pages/MyPage'

//link
import{ Link } from "react-router-dom"

import { Route, Routes } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import Error from "./pages/Error";

function App() {
  const nav = useNavigate();
  const onClickBtn = () =>{
    nav("/list");
  }
  return (
    <>
      <button onClick={onClickBtn}>클릭</button>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/list"}>List</Link>
        <Link to={"/my"}>Mypage</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List />}/>
        <Route path="/my/:id" element={<Mypage />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </>
  )
}

export default App

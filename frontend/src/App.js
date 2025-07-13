import React, { useEffect, useRef, useState } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Default from './Default';


function App() {
const inpRef=useRef("");
  const [data, setdata]=useState("not working");
  useEffect(()=>{
    axios.get("http://localhost:4000/api/get").then(res=>setdata(res.data.data)).catch(e=>console.log(e.errors));
  },[])
  const handler=(e)=>{
    e.preventDefault();
    console.log(inpRef.current.value)
    axios.post("http://localhost:4000/api/post",{data:inpRef.current.value} ).then(res=>setdata(res.data.data)).catch(err=>console.log(err));
  }
  
  return (
<Routes>
  <Route path='/' element={

    
    <h2>
    hello
    <form onSubmit={handler}>
    <input ref={inpRef} placeholder='enter value'/>
      <button type='submit'> submit</button>

    </form>

    {
      data
    }
   </h2>
  }>
    </Route>
    <Route path='/*' element={<Default/>}/>
  </Routes>
  );
}

export default App;

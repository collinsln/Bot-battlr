import { useEffect, useState } from "react";
import React from "react";
import Bots from "./Bots";



function App() {
const[data,setData]=useState([])


  useEffect(()=>{
  fetch("http://localhost:3000/bots")
  .then((res)=>res.json())
  .then((item)=>setData(item))

  },[])



  return (
    <div>
      <h1>Bots</h1>
      
        {data.map(bots=>(
        <Bots name={bots.name} health={bots.health} damage={bots.damage} armor={bots.armor} bot_class={bots.bot_class}/>
        ))
        } 
     
    </div>
  )
}

export default App
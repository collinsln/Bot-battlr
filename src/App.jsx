import { useEffect, useState } from "react";
import React from "react";
import Bots from "./Bots";
import "./assets/App.css"



function App() {
const[data,setData]=useState([])
const[selectedbot,setSelectedbot]=useState("")
//const[avatar_url,setAvatar]=useState("")


  useEffect(()=>{
  fetch("http://localhost:3000/bots")
  .then((res)=>res.json())
  .then((item)=>setData(item))

  },[])



//const handleselect=(e)=> console.log(e.target.value)
 //setSelectedbot(e.target.value)
//}


  return (
    
    <div className='container'>
      <h1>Bots</h1>
      
      
        {data.map(bots=>(
        <Bots  key={bots.id} name={bots.name} avatar_url={bots.avatar_url}  health={bots.health} damage={bots.damage} armor={bots.armor} bot_class={bots.bot_class}/>
       
        ))
       
        } 
        
        
     
    </div>
  )
}

export default App
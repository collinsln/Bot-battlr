import React from 'react'
import pp from './assets/App.css'

function Bots({name,health,damage,armor,bot_class,avatar_url,catchphrase,}) {
  const clicked=()=>{console.log(name)}
  
  
  return (
    <>
    
     <div className='container'>
      

     <div className='botgrid' onClick={clicked}>
      <img src={avatar_url}/>

        <p>{name}</p>
        <p>{health}</p>
        <p>{damage}</p>
        <p>{armor}</p>
        <p>{bot_class}</p>
        
       </div>
       
        
     </div>
     
    </>
  )
}

export default Bots
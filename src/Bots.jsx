import React from 'react'
import { useState } from 'react'


function Bots({name,health,damage,armor,bot_class,avatar_url,catchphrase,}) {
  
  const [clickedName, setClickedName] = useState('');
  
  const handleBotclick=()=>{setClickedName(name)}
  const clearBot=()=>{setClickedName('')}
  
  return (
    <>
    
     <div className='container'>
      
<div>selected bot here:{clickedName}
<button onClick={clearBot}></button>clear</div>
     <div className='botgrid' onClick={handleBotclick}>
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
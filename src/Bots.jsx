import React from 'react'

function Bots({name,health,damage,armor,bot_class,catchphrase,}) {
  return (
    <div>
      <h1></h1>
        <p>{name}</p>
        <p>{health}</p>
        <p>{damage}</p>
        <p>{armor}</p>
        <p>{bot_class}</p>
    </div>
  )
}

export default Bots
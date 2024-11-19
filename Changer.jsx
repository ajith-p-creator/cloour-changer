
import React, { useState } from 'react'

function Changer() {


  const [colour, setcolur] = useState('Black')
  return (
    <div className='Bt_container' style={{ backgroundColor: colour }}>
      <h1  >Select the color</h1>
      <div>
        <button className='bt_1' onClick={() => setcolur('Red')}>Red</button>
        <button className='bt_2' onClick={() => setcolur('Green')}>Green</button>
        <button className='bt_3' onClick={() => setcolur('blue')}>Blue</button>
      </div>

    </div>
  )

}

export default Changer
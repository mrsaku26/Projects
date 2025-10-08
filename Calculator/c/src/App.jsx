import React, { useState } from 'react'
import {evaluate} from 'mathjs'

const App = () => {
  const[value,setvalue]=useState('')

  const input=(e)=>{
    setvalue(prev=>prev+e.target.innerText)
    console.log(value)
  }
  return (
    
  <>
  <div className="con">
    <div className="calc">
      <input type="text" placeholder='0' value={value}/>
      <div>
        <button onClick={()=>{setvalue('')}}>AC</button>
        <button onClick={()=>{setvalue(pre => pre.slice(0,-1))}}>DEL</button>
        <button onClick={input}>%</button>
        <button onClick={input}>/</button>
      </div>
      <div>
        <button onClick={input}>7</button>
        <button onClick={input}>8</button>
        <button onClick={input}>9</button>
        <button onClick={input}>*</button>
      </div>
      <div>
        <button onClick={input}>4</button>
        <button onClick={input}>5</button>
        <button onClick={input}>6</button>
        <button onClick={input}>-</button>
      </div>
      <div>
        <button onClick={input}>1</button>
        <button onClick={input}>2</button>
        <button onClick={input}>3</button>
        <button onClick={input}>+</button>
      </div>
      <div>
        <button onClick={input}>00</button>
        <button onClick={input}>0</button>
        <button onClick={input}>.</button>
        <button className='equal' onClick={()=>{setvalue(evaluate(value))}}>=</button>
      </div>

    </div>
  </div>
  </>
  )
}

export default App
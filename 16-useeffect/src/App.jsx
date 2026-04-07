import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('A ki value change ho gyi')
  }
  function bChanging(){
    console.log('B ki value change ho gyi')
  }

  useEffect(function(){
    bChanging()
  }, [b])

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)
  // useEffect(function(){
  //   console.log('use effect is running...')
  // }, [num])

  return (
    <div>

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
      }}>change A</button>
      <button
      onClick={()=>{
        setB(b-1)
      }}>change B</button>

      {/* <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      <button 
      onMouseEnter={()=>{
        setNum(num + 1)
      }}
      onMouseLeave={()=>{
        setNum2(num2 + 10)
      }}
      >hover</button> */}

    </div>
  )
}

export default App

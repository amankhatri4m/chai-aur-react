import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Once it initialize, it doesn't initialize again.
  let [counter,setCounter] = useState(0);

  const addValue = ()=>{
    if(counter <=20){
      setCounter(counter + 1);
    }
  }

  const removeValue = ()=>{
    if(counter >0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <p>Counter: {counter}</p>
      <br/>
      <button onClick={addValue}>Increment</button>
      <br/>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App

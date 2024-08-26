import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Once it initialize, it doesn't initialize again.
  let [counter,setCounter] = useState(0);

  const addValue = ()=>{
    if(counter <=20){
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      // Above code will print same value because fibre create the batch and if the value is same then it will do 
      //nothing and give the same value

      //but if we want previous value to update 
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);

      // above one give if counter is 15 then it gives output to 19 because it didn't create batch it just execute
      // one by one as promise chaining did.

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

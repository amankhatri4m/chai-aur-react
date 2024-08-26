import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind css</h1>
      <Card userName="chai aur code" btnText="click me"/>
      <Card userName="Aman Khatri" btnText="visit me"/>
    </>
  )
}

export default App

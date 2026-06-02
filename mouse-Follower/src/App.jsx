import { useState, useEffect } from 'react'


import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
   console.log("efecto")
  },[])

  return (
    <>
    <h1>mouse follower</h1>
    <button>{enabled ? "desactivar" : "activar"}Seguir puntero</button>
    </>

  )
}

export default App

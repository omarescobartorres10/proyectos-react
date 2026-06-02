import { useState, useEffect } from 'react'

import './App.css'

const FollowMouse = () => {
   const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0})

  useEffect(() => {
   console.log('effect', {enabled}) 
   const handleMouseMove = (event) => {
    const { clientX, clientY} = event
    console.log('handleMouseMove', {clientX, clientY})
      setPosition({ x: clientX, y: clientY})
    }

    if(enabled){
      window.addEventListener('mousemove', handleMouseMove)
    }

    //Cleanup function: Se ejecuta cuando el componente se desmonta o cuando cambia el valor de las dependencias.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  },[enabled])

  return (
    <>
     <div style={{
      position:"absolute",
      background: "#09f",
      borderRadius:"50%",
      opacity: 0.8,
      pointerEvents: "none",
      top: "-20px",
      left: "-20px",
      width: "40px",
      height: "40px",
      transform: `translate(${position.x}px, ${position.y}px)`
    }}></div>

    <button onClick={() => setEnabled(!enabled)}>{enabled ? "Desactivar" : "Activar"} Seguir puntero</button>
    </>
  )

  

}

function App() {
 
  return (
    <>
    <main>
      <FollowMouse />
    </main>
    </>

  )
}

export default App

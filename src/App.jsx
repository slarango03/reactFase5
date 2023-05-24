import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Selectores CSS</h1>
      <div className="card">
       <h3>Integrantes</h3>
       <h4>Sandra Liliana Arango Corredor</h4>
       <h4>C.C. 46673565</h4>

       <h6>Enlace del Proyecto</h6>
       <a href="inicio.html"> Click aqui para ir al proyecto</a>

       </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'


function App() {
  // value, setter
  const [count, setCount] = useState(10)
  const [title, setTitle] = useState('')
  const [products, setProducts] = useState([])

  const handleAdd = () => {
    setCount(count + 1)
  }
  
  return (
    <div className="App">
      <h1>Cesta de la compra</h1>

      <button onClick={handleAdd}>Añadir</button>
      <h2>Cuenta: {count}</h2>
    </div>
  )
}

export default App

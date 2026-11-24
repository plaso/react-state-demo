import { useState } from 'react'

function Counter({ initialCount = 10 }) {
  const [count, setCount] = useState(initialCount)

  const handleAdd = () => {
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={handleAdd}>Añadir</button>
      <h2>Cuenta: {count}</h2>
    </>
  )
}

export default Counter
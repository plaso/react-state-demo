import { useState } from 'react'
import Counter from './components/counter/counter'
import Cart from './components/cart/cart'
import './App.css'

const PRODUCTS = [
  { id: 'milk', name: 'Leche', emoji: '🥛' },
  { id: 'bread', name: 'Pan', emoji: '🥖' },
  { id: 'tomato', name: 'Tomates', emoji: '🍅' },
  { id: 'eggs', name: 'Huevos', emoji: '🥚' },
]

function App() {
  const [cart, setCart] = useState([])

  const handleAddProductToCart = (product) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: product.name,
      emoji: product.emoji
    }

    setCart([...cart, newItem])
  }

  const handleRemoveProduct = (id) => {
    // modificar el state de cart, para que ese producto no se pinte ya

    setCart(cart.filter(item => item.id !== id))
  }

  console.log(cart)
  
  return (
    <div className="App">
      <h1>Cesta de la compra</h1>

      <Counter />
      <Counter initialCount={3} />
      <Counter />

      <div className="catalog">
        <h1>Longitud de la cesta: {cart.length}</h1>
        {PRODUCTS.map((product) => (
          <button onClick={() => handleAddProductToCart(product)} key={product.id}>
            {product.name} {product.emoji}
          </button>
        ))}
      </div>
      
      <Cart items={cart} onRemove={handleRemoveProduct} />
      <Cart items={cart} />
    </div>
  )
}

export default App

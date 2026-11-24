import './cart.css'

const transactions = []

// No pintar nada en react significa null

const Cart = ({ items, onRemove }) => {
  const isCartTooHeavy = items.length >= 5

  return (
    <div className="Cart">
      <h1>
        Carrito - {isCartTooHeavy ? 'Tienes el carrito muy lleno' : 'Añade mas items'}
      </h1>

      {transactions.length > 0 && <h2>Transactions</h2>}
      {transactions.length > 0 ? <h2>Transactions</h2> : null} 

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.emoji}

            {/* {onRemove ? (
              <button onClick={() => onRemove(item.id)}>
                Borrar
              </button>
            ) : null} */}
            {onRemove && (
              <button onClick={() => onRemove(item.id)}>
                Borrar
              </button>
            )}

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
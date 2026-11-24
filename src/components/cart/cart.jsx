import './cart.css'

const Cart = ({ items, onRemove }) => {
  return (
    <div className="Cart">
      <h1>
        Carrito
      </h1>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.emoji}
            <button onClick={() => onRemove(item.id)}>
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
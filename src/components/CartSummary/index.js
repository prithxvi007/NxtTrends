import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalCost = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )

      const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0)

      return (
        <div className="cart-summary">
          <h1 className="cart-summary-title">Order Summary</h1>
          <div className="cart-summary-details">
            <p className="cart-summary-text">{`Total Items: ${totalItems}`}</p>
            <p className="cart-summary-text">{`Total Price: Rs ${totalCost}`}</p>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

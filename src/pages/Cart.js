import {useState} from "react"
import minus from "./../icons/expand-minus.svg"
import PropTypes from "prop-types"


function Cart(props){
  const [order, setOrder] = useState("Place Order")

  const totalPrice = props.shoppingCart.reduce((r, i)=>{
    return r += i.price
  }, 0)

  const handleClick=()=>{
    setOrder("Ordering...")
    setTimeout(()=>{
      props.clearCart()
    }, 3000)
  }

  const cartItems = props.shoppingCart.map(i=>(
    <div key={i.id} className="cart-item">
      <div className="cart-item__actions">
        <img
          className="cart-item__del-btn"
          src={minus} alt=""
          onClick={()=>props.editCart(i)}
        />
        <img
          className="cart-item__img"
          src={i.download_url}
          alt=""
        />
      </div>
      <p className="cart-item__price">${i.price}</p>
    </div>
  ))
  return (
    <div className="check-out wrapper">
      <h1 className="check-out__header">Check out</h1>
      <div className="cart-items">
        {cartItems.length > 0 ?
           cartItems
           :
           <p>You have no items in your cart</p>
        }
      </div>
      <p className="check-out__price">Total: ${totalPrice}</p>
      {
        cartItems.length> 0 &&
        <button className="check-out__btn" onClick={handleClick}>
          {order}
        </button>
      }
    </div>
  )
}

Cart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object)
}


export default Cart

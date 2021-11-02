import React from "react"
import {Link} from "react-router-dom"

import cartEmpty from "./../icons/shopping-cart.svg"
import cartItem from "./../icons/cart.svg"
import PropTypes from "prop-types"

function Header(props){
  return (
    <div className="header">
      <div className="header__container">
        <h1><Link className="header__link" to="/">Pic Some</Link></h1>
        <Link to="/cart">
          <img
            className="icon"
            src={props.shoppingCart.length===0 ? cartEmpty:cartItem}
            alt=""/>
        </Link>
      </div>
    </div>
  )
}
Header.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object)
}


export default Header

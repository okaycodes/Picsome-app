import React from "react"
import {Link} from "react-router-dom"

import cartEmpty from "./../icons/shopping-cart.svg"
import cartItem from "./../icons/cart.svg"

function Header(props){
  return (
    <div className="header">
      <div className="header__container">
        <h1><Link className="header__link" to="/">Pic Some</Link></h1>
        <Link to="/cart"><img className="icon" src={cartEmpty} alt=""/></Link>
      </div>
    </div>
  )
}


export default Header

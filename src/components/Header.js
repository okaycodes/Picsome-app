import React from "react"
import {Link} from "react-router-dom"

import icon from "./../icons/shopping-cart.svg"

function Header(){
  return (
    <div className="header">
      <div className="header__container">
        <h1><Link className="header__link" to="/">Pic Some</Link></h1>
        <Link><img className="icon" src={icon} alt=""/></Link>
      </div>
    </div>
  )
}


export default Header

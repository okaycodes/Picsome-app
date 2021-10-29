import React, {useState} from "react"


function useCart(){
  const [cartIsEmpty, setCartIsEmpty] = useState(true)

  const toggleCart =()=>{
    setCartIsEmpty(false)
  }

  return {cartIsEmpty, toggleCart}
}

export default useCart

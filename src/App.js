import {useState} from "react"
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Details from "./pages/Details"
import Cart from "./pages/Cart"
import {Switch, Route} from "react-router-dom"

function App() {
  const [shoppingCart, setShoppingCart] = useState([])

  const editCart=(item)=>{
    shoppingCart.find(i=>i.id===item.id) !== undefined ?
    setShoppingCart(prevCart=>prevCart.filter(i=>i!==item))
    :
    setShoppingCart(prevCart=>[...prevCart, item])
  }

  const clearCart=()=>{
    setShoppingCart([])
  }
  

  return (
    <div className="App">
      <div className="wrapper">
        <Header shoppingCart={shoppingCart}/>

        <Switch>
          <Route exact path="/">
            <MainContent shoppingCart={shoppingCart} editCart={editCart}/>
          </Route>

          <Route path="/details/:productId">
            <Details shoppingCart={shoppingCart} editCart={editCart}/>
          </Route>

          <Route path="/cart">
            <Cart
              shoppingCart={shoppingCart}
              editCart={editCart}
              clearCart={clearCart}
              />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;

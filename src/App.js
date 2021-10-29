import {useState} from "react"
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Details from "./pages/Details"
import Cart from "./pages/Cart"
import {Switch, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <Switch>
          <Route exact path="/">
            <MainContent />
          </Route>

          <Route path="/details/:productId">
            <Details />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;

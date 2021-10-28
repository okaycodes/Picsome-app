import './App.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/">
          <MainContent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

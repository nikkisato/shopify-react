import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage"
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import NavMenu from "./components/NavMenu"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;

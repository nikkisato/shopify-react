import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <p>Navigation</p>
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

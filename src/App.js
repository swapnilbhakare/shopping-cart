import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartContext } from "./CartContext";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navigation from "./Components/Navigation";

import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import ProductsPage from "./Pages/ProductsPage";
import { getCart, storeCart, StoreCart } from "./helpers";
function App() {
  const [cart, setCart] = useState({});
  // fetch cart from localStorage
  useEffect(() => {
    getCart().then((cart) => {
      setCart(JSON.parse(cart));
    });
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/ProductsPage" exact component={ProductsPage}></Route>
            <Route path="/products/:_id" component={SingleProduct}></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;

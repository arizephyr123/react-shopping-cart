import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

//Contexts
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  // keeps track of all products
  const [products] = useState(data);
  // keeps track of all items in cart
  const [cart, setCart] = useState([]);

  // add the given item to the cart
  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{cart}}>
          <Navigation/>
          {/* Routes */}

          {/* Before */}
          {/* <Route
          exact
          path="/"
          render={() => <Products products={products} addItem={addItem} />}
		/> */}
          {/* After */}
          <Route exact path="/" component={Products} />

          {/* Before */}
          {/* <Route path="/cart" render={() => <ShoppingCart cart={cart} />} /> */}
          {/* After */}
          <Route path="/cart" component={ShoppingCart}/>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;

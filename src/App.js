// import Navbar from './Navbar';
import Signin from "./Signin";
import Signup from "./Signup";
import Product from "./Product";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Shop from "./Shop";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { CartProvider } from "react-use-cart";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";


import "./App.css";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navigation />
      <Switch>
        
        <CartProvider>
          {/* <Route exact path="/" component={Home} /> */}
          <AuthProvider>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          </AuthProvider>
          <Route exact path="/products" component={Product} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop-products" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
        </CartProvider>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

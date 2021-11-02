import Cart from "./container/Cart";
import Home from "./container/Home";
import Login from "./container/Login";
import Product from "./container/Product";
import ProductList from "./container/ProductList";
import Register from "./container/Register";
import{BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state)=> state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />   
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to = "/" /> : <Login />}
          <Login />
        </Route>
        <Route path="/register">
          {user ? <Redirect to = "/" /> : <Register />}
          <Register />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Divider } from "semantic-ui-react";

import HeaderBlock from "./Header";
import StoreList from "./StoreList";
import CartList from "./CartList";

class App extends React.Component {
  state = {
    cart: []
  };

  onStoreItemSubmit = item => {
    // If the cart is empty, then update the cart state with the new item
    if (this.state.cart.length === 0) {
      this.setState({ cart: item }, () => console.log(this.state));
    } else {
      // If the cart is not empty
      // Check if the cart already contains the same object with matching ID
      const checkIfInCart = this.state.cart.map(cartItem => {
        return cartItem._id === item._id;
      });
      console.log(checkIfInCart);

      // If there is no match, add the new item object to the existing state
      // If there is a match, add the new qty value to the previous state qty
    }
  };

  render() {
    return (
      <div className="ui container app__wrapper">
        <div className="section__wrapper">
          <HeaderBlock section={"Store"} icon={"heart outline"} />
          <StoreList onSubmit={item => this.onStoreItemSubmit(item)} />
        </div>

        <Divider />
        <div className="section__wrapper">
          <HeaderBlock section={"Cart Summary"} icon={"shopping basket"} />
          <CartList />
        </div>
      </div>
    );
  }
}
export default App;

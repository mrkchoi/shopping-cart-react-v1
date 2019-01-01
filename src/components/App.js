import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Divider } from "semantic-ui-react";

import HeaderBlock from "./Header";
import StoreList from "./StoreList";
import CartList from "./CartList";

class App extends React.Component {
  state = {
    cart: [],
    total: 0
  };

  onStoreItemSubmit = item => {
    // If the cart is empty, then update the cart state with the new item
    if (this.state.cart.length === 0 && item.qty !== 0) {
      this.setState({ cart: [item] }, () => this.calculateTotal());
    } else if (this.state.cart.length !== 0 && item.qty !== 0) {
      // If the cart is not empty
      // Check if the cart already contains the same object with matching ID
      // If there is a match, add the new qty value to the previous state qty

      this.state.cart.forEach((el, index) => {
        if (el._id === item._id) {
          let stateCartCopy = [...this.state.cart];
          stateCartCopy[index].qty += item.qty;
          this.setState({ cart: stateCartCopy }, () => this.calculateTotal());
          console.log(this.state.cart);
        }
      });

      //   Check to see if there the item already exists in our cart
      let matchedItem = this.state.cart.filter(el => {
        return el._id === item._id;
      });

      // If the item does not exist in our cart, add the new item object to the existing state cart
      if (matchedItem.length === 0) {
        this.setState({ cart: [...this.state.cart, item] }, () =>
          this.calculateTotal()
        );
      }
    }
    // console.log(this.state);
  };

  calculateTotal = () => {
    // Calculate total value and add to state, then pass down to CartList total
    let total = this.state.cart.reduce((total, current) => {
      return (total += current.qty * current.price);
    }, 0);

    // Pass the new total cart amount to App state
    this.setState({ total: total });
    // console.log(this.state);
  };

  deleteItem = item => {
    const newCart = this.state.cart.filter(el => {
      return el._id !== item;
    });
    this.setState({ cart: newCart }, () => this.calculateTotal());
  };

  updateItemQty = (qty, id) => {
    this.state.cart.map((el, index) => {
      if (el._id === id) {
        let stateCartCopy = [...this.state.cart];
        stateCartCopy[index].qty = qty;
        this.setState({ cart: stateCartCopy }, console.log(this.state.cart));
      }
    });
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
          <CartList
            cartItems={this.state.cart}
            cartTotal={this.state.total}
            updateCartItem={newQty => this.updateCartItem(newQty)}
            deleteItem={item => this.deleteItem(item)}
            updateItemQty={(qty, id) => this.updateItemQty(qty, id)}
          />
        </div>
      </div>
    );
  }
}
export default App;

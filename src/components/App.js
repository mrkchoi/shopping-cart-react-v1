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

  render() {
    return (
      <div className="ui container app__wrapper">
        <div className="section__wrapper">
          <HeaderBlock section={"Store"} icon={"heart outline"} />
          <StoreList />
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

import React from "react";
import { Table, Icon, Button, Input } from "semantic-ui-react";

import "./CartItem.css";

class CartItem extends React.Component {
  state = {
    cartItemQty: 0
  };

  updateValue = e => {
    this.setState({ cartItemQty: e.target.value });
  };

  updateCartItem = () => {
    this.props.updateCartItem(this.state.cartItemQty);
  };

  DeleteItem = e => {
    e.preventDefault();
    this.props.DeleteItem(this.props.itemDetails._id);
  };

  render() {
    const { name, price, qty } = this.props.itemDetails;
    // console.log(name, price, qty);
    let subtotal = price * qty;

    return (
      <Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>${price}</Table.Cell>
        <Table.Cell className="cartitem__qty--wrapper">
          <Input
            type="number"
            placeholder="Qty"
            className="cartitem__qty"
            defaultValue={qty}
            onChange={this.updateValue}
          />
        </Table.Cell>
        <Table.Cell className="cartitem__trash--wrapper">
          <div>${subtotal}</div>
          <div>
            <Button basic color="blue" onClick={this.updateCartItem}>
              Update
            </Button>
            <a href="/" onClick={this.DeleteItem}>
              <Icon
                name="trash alternate outline"
                color="red"
                className="cartitem__remove"
              />
            </a>
          </div>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default CartItem;

import React from "react";
import { Table, Icon, Button, Input } from "semantic-ui-react";

import "./CartItem.css";

class CartItem extends React.Component {
  state = {
    cartItemQty: 0
  };

  //   On mount, update the CartItem state with correct qty
  componentDidMount() {
    this.setState(
      { cartItemQty: this.props.itemDetails.qty }
      // , () => console.log(this.state.cartItemQty)
    );
  }

  //   Allow component to rerender when props value changes
  componentWillReceiveProps(nextProps) {
    this.setState({ cartItemQty: nextProps.itemDetails.qty });
  }

  //   Updating item qty from CART [ONLY in local state]
  updateQty = e => {
    this.setState(
      { cartItemQty: e.target.value }
      // , () => console.log(this.state.cartItemQty)
    );
  };

  //   Updating item qty FROM CART [BUTTON CLICK]
  cartUpdateQty = () => {
    this.props.cartUpdateQty(
      this.state.cartItemQty,
      this.props.itemDetails._id
    );
  };

  //   Delete item from cart
  deleteItem = e => {
    e.preventDefault();
    this.props.deleteItem(this.props.itemDetails._id);
    this.setState(
      { cartItemQty: 0 }
      // , () => console.log(this.state.cartItemQty)
    );
  };

  render() {
    const { name, price, qty } = this.props.itemDetails;
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
            value={this.state.cartItemQty}
            onChange={this.updateQty}
          />
        </Table.Cell>
        <Table.Cell className="cartitem__trash--wrapper">
          <div>${subtotal}</div>
          <div>
            <Button basic color="blue" onClick={this.cartUpdateQty}>
              Update
            </Button>
            <a href="/" onClick={this.deleteItem}>
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

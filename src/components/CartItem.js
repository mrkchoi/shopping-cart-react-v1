import React from "react";
import { Table, Icon, Button, Input } from "semantic-ui-react";

import "./CartItem.css";

function CartItem(props) {
  const { name, price, qty } = props.itemDetails;

  console.log(name, price, qty);

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
          value={qty}
        />
      </Table.Cell>
      <Table.Cell className="cartitem__trash--wrapper">
        <div>${subtotal}</div>
        <div>
          <Button basic color="blue">
            Update
          </Button>
          <a href="/">
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

export default CartItem;

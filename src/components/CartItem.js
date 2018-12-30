import React from "react";
import { Table, Icon, Button, Input } from "semantic-ui-react";

import "./CartItem.css";

function CartItem(props) {
  return (
    <Table.Row>
      <Table.Cell>Title</Table.Cell>
      <Table.Cell>$100</Table.Cell>
      <Table.Cell className="cartitem__qty--wrapper">
        <Input type="number" placeholder="Qty" className="cartitem__qty" />
      </Table.Cell>
      <Table.Cell className="cartitem__trash--wrapper">
        <div>Subtotal</div>
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

import React from "react";
import CartItem from "./CartItem";
import { Table } from "semantic-ui-react";

class CartList extends React.Component {
  componentDidMount() {
    // console.log(data);
  }

  renderList() {
    return (
      <React.Fragment>
        <CartItem />
        <CartItem />
      </React.Fragment>
    );
  }

  render() {
    return (
      <Table celled singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={6}>Item</Table.HeaderCell>
            <Table.HeaderCell width={2}>Price</Table.HeaderCell>
            <Table.HeaderCell width={2}>Quantity</Table.HeaderCell>
            <Table.HeaderCell width={8}>Subtotal</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{this.renderList()}</Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell>
              <strong>Total</strong>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <strong>$153</strong>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default CartList;

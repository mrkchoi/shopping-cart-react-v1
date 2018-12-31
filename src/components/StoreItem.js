import React from "react";
import { Button, Card, Form } from "semantic-ui-react";

import "./StoreItem.css";

class StoreItem extends React.Component {
  state = {
    qty: 0,
    _id: "",
    picture: "",
    name: "",
    price: 0
  };

  handleChange = e => {
    const {
      name,
      picture,
      snippet,
      about,
      price,
      _id
    } = this.props.itemDetails;

    this.setState({
      qty: Number(e.target.value),
      _id,
      name,
      picture,
      snippet,
      about,
      price
    });
  };

  render() {
    const { name, picture, snippet, about, price } = this.props.itemDetails;
    let desc = about.substring(1, 60);

    return (
      <Card raised>
        <Card.Content>
          <div
            className="storeitem__img"
            style={{ backgroundColor: `${picture}` }}
          />
        </Card.Content>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{snippet}</Card.Meta>
          <Card.Description>{desc}...</Card.Description>
          <Card.Meta className="store__card-price">${price}</Card.Meta>
        </Card.Content>

        <Card.Content extra>
          <div className="ui two buttons">
            <Form
              className="store__form"
              onSubmit={e => this.props.onSubmit(this.state)}
            >
              <Form.Field inline className="store__addtocart">
                <Button type="submit" basic color="green">
                  Add to cart
                </Button>
                <div>
                  <input
                    placeholder="Qty"
                    type="number"
                    className="storeitem__qty"
                    onChange={this.handleChange}
                  />
                </div>
              </Form.Field>
            </Form>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default StoreItem;

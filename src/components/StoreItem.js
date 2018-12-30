import React from "react";
import { Button, Card, Form } from "semantic-ui-react";

import "./StoreItem.css";

function StoreItem(props) {
  const { name, picture, snippet, about, price } = props.itemDetails;
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
          <Form className="store__form">
            <Form.Field inline className="store__addtocart">
              <Button type="submit" basic color="green">
                Add to cart
              </Button>
              <div>
                <input
                  placeholder="Qty"
                  type="number"
                  className="storeitem__qty"
                />
              </div>
            </Form.Field>
          </Form>
        </div>
      </Card.Content>
    </Card>
  );
}

export default StoreItem;

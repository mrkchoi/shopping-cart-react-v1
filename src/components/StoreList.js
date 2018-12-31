import React from "react";
import StoreItem from "./StoreItem";
import { Card } from "semantic-ui-react";

let data = require("../api/apidata.json");

class StoreList extends React.Component {
  componentDidMount() {
    console.log(data);
  }

  renderList() {
    return data.map(item => {
      return (
        <StoreItem
          itemDetails={item}
          key={item._id}
          onSubmit={item => this.props.onSubmit(item)}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <Card.Group centered>{this.renderList()}</Card.Group>
      </div>
    );
  }
}

export default StoreList;

import React from "react";
import { Menu, Header, Icon } from "semantic-ui-react";

function HeaderBlock(props) {
  return (
    <Menu inverted size="mini">
      <Menu.Item as="h3">
        <Icon name={props.icon} />
        <Header.Content>{props.section}</Header.Content>
      </Menu.Item>
    </Menu>
  );
}

export default HeaderBlock;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Slot } from "react-slot-fill";
import { css, injectGlobal } from "emotion/macro";
import MenuIcon from "material-ui-icons/Menu";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import List from "material-ui/List";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";

export const GreedyFlexBox = css`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const globalCSS = injectGlobal`
html {
  font-size: 62.5%;
}
html, body, #root {
  margin: 0;
  padding: 0;
  ${GreedyFlexBox}
}
body {
  font-size: 1.3rem
}
`;

export default class Layout extends React.Component {
  state = {
    menu: false
  };

  toggleMenu = toggleTo => () => this.setState({ menu: toggleTo });
  render() {
    return (
      <Router>
        <div className={GreedyFlexBox}>
          <AppBar>
            <Toolbar>
              <IconButton
                onClick={this.toggleMenu(!this.state.menu)}
                color="contrast"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" css={{ flex: 1 }}>
                SmartFleet
              </Typography>
              <Slot name="layout-headers-actions" />
            </Toolbar>
          </AppBar>
          <Drawer
            open={this.state.menu}
            onRequestClose={this.toggleMenu(false)}
          >
            <List
              css={{ maxWidth: 250, width: "100vw" }}
              onClick={this.toggleMenu(false)}
            >
              <Slot name="layout-menu-entries" />
            </List>
          </Drawer>
          <div
            className={GreedyFlexBox}
            css={{
              marginTop: 62,
              padding: "1.2rem 1.6rem"
            }}
          >
            <Slot name="layout-modules" />
          </div>
          {this.props.modules}
        </div>
      </Router>
    );
  }
}

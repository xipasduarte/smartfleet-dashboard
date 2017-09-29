import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Slot, Fill } from "react-slot-fill";
import { injectGlobal } from "emotion";
import Grid from "material-ui/Grid";
import MenuIcon from "material-ui-icons/Menu";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";

export const globalCSS = injectGlobal`
html {
  font-size: 62.5%;
}
html, body {
  margin: 0;
  padding: 0;
}
body {
  font-size: 1.3rem
}
`;

export const Module = ({ children }) => (
  <Fill name="layout-modules">
    <div>{children}</div>
  </Fill>
);

export const GlobalActionButton = ({ children, label }) => (
  <Fill name="layout-headers-actions">
    <IconButton color="contrast" aria-label={label}>
      {children}
    </IconButton>
  </Fill>
);

export const MenuEntry = ({ icon, label, ...linkProps }) => (
  <Fill name="layout-menu-entries">
    <ListItem button>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={<Link children={label} {...linkProps} />} />
    </ListItem>
  </Fill>
);
export default class Layout extends React.Component {
  state = {
    menu: false
  };

  toggleMenu = toggleTo => () => this.setState({ menu: toggleTo });
  render() {
    return (
      <Router>
        <div>
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
          <Grid container>
            <Grid item xs={12} css={{ marginTop: 64 }}>
              <Slot name="layout-modules" />
            </Grid>
          </Grid>
          {this.props.modules}
        </div>
      </Router>
    );
  }
}

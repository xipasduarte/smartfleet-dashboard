import React from "react";
import { Fill } from "react-slot-fill";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

export default ({ icon, label, children, ...linkProps }) => (
  <Fill name="layout-menu-entries">
    <Link css={{ textDecoration: "none" }} {...linkProps}>
      <ListItem button>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  </Fill>
);

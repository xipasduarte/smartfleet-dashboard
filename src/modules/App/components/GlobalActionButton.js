import React from "react";
import { Fill } from "react-slot-fill";
import IconButton from "material-ui/IconButton";

export default ({ children, label, ...props }) => (
  <Fill name="layout-headers-actions">
    <IconButton color="contrast" aria-label={label} {...props}>
      {children}
    </IconButton>
  </Fill>
);

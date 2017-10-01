import React from "react";
import { Fill } from "react-slot-fill";

export default ({ children }) => (
  <Fill name="layout-modules">
    <div>{children}</div>
  </Fill>
);

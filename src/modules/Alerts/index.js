import React from "react";
import Notifications from "material-ui-icons/Notifications";
import { Module, GlobalActionButton } from "../App";

export default class Alerts extends React.Component {
  render() {
    return (
      <Module>
        <GlobalActionButton onClick={() => alert("clicked")}>
          <Notifications />
        </GlobalActionButton>
      </Module>
    );
  }
}

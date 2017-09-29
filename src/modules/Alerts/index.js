import React from "react";
import Notifications from "material-ui-icons/Notifications";
import Layout from "../../components/Layout";
import { Module, GlobalActionButton } from "../../App";

export default class Alerts extends React.Component {
  render() {
    return (
      <Module>
        <GlobalActionButton>
          <Notifications />
        </GlobalActionButton>
      </Module>
    );
  }
}

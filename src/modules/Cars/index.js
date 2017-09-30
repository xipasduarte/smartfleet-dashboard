import React from "react";
import { Route } from "react-router-dom";
import { Module, MenuEntry } from "../SmartFleet";
import Single from "./containers/Single";

export default class Cars extends React.Component {
  render() {
    return (
      <Module>
        <MenuEntry to="/cars/123" label="Cars" />
        <Route path="/cars/:carID" component={Single} />
      </Module>
    );
  }
}

import React from "react";
import { Provider } from "react-slot-fill";
import Layout from "./Layout";

export default class App extends React.Component {
  render() {
    const { children: modules } = this.props;
    return (
      <Provider>
        <Layout modules={modules} />
      </Provider>
    );
  }
}

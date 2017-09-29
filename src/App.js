import React from "react";
import { Provider } from "react-slot-fill";
import Layout from "./components/Layout";

export { MenuEntry, Module, GlobalActionButton } from "./components/Layout";

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

import ReactDOM from "react-dom";
import React from "react";

import App from "./modules/App";
import Alerts from "./modules/Alerts";
import Section from "./modules/Section";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App>
    <Alerts />
    <Section />
  </App>,
  document.getElementById("root")
);

registerServiceWorker();

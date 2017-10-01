/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";

import React from "react";
import App from "../modules/App";
import Alerts from "../modules/Alerts";
import Section from "../modules/Section";

storiesOf("App").add("General Structure", () => (
  <App>
    <Alerts />
    <Section />
  </App>
));

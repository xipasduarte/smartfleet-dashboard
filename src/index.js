import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";

// TODO: PROVISIONAL
import base from "./stories/base";

ReactDOM.render(base, document.getElementById("root"));
registerServiceWorker();

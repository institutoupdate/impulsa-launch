import React from "react";
import ReactDom from "react-dom";

window.isIOS =
  !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
window.isIOS = true;

import App from "App.jsx";

ReactDom.render(<App />, document.getElementById("app"));

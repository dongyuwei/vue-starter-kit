import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./hello_message";

import bar from "./bar";

bar();

const mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="world" />, mountNode);

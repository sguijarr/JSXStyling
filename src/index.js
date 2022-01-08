//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

var today = new Date();
var curHr = today.getHours();

var message = "";
var customStyle = { color: "" };

if (curHr < 12) {
  message = "morning";
  customStyle.color = "red";
} else if (curHr < 18) {
  message = "afternoon";
  customStyle.color = "green";
} else {
  message = "evening";
  customStyle.color = "blue";
}

ReactDom.render(
  <h1 className="heading" style={customStyle}>
    Good {message}
  </h1>,
  document.getElementById("root")
);

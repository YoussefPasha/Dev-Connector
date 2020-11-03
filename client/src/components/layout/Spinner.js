import React from "react";
import spinner from "./spinner.gif";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <React.Fragment>
    <img
      src={spinner}
      style={{ width: "50px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
    {console.log("Spinner here")}
  </React.Fragment>
);

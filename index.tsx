import React from "react";
import ReactDOM from "react-dom";
//First alphabet should always be capital
import FirstName from "./components/personaldetails";
import { LastName } from "./components/personaldetails";
import { FullName } from "./components/personaldetails";

ReactDOM.render(
  <div>
    <FirstName name="Nitish" />
    <LastName name="Poojari" />
    <FullName FirstName="Ankit" LastName="Dhadse"/>
  </div>,
  document.getElementById("root")
);

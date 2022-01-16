import React from "react";
import NavSide from "./NavSide";
import NavTop from "./NavTop";

export default function Layout(props) {
  const { children } = props;
  return (
    <div id="wrapper">
      <NavTop />
      <NavSide />
      {children}
    </div>
  );
}

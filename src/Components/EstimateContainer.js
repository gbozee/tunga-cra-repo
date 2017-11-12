import React from "react";

export default ({ name="", children }) => (
  <div>
    <h2>Estimate Container {name}</h2>
    {children}
  </div>
);

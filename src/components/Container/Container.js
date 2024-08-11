import React from "react";

function Container({ direction, children }) {
  return <div className={`${direction} container`}>{children}</div>;
}

export default Container;

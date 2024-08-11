import React from "react";

function Key({ status, value }) {
  return <div className={`${status} key`}>{value}</div>;
}

export default Key;

import React from "react";

function NameHeader({ name, online }) {
  return (
    <div className="nameHeader">
      <div className="fullName">{name}</div>
      {online && <div className="online" />}
    </div>
  );
}

export default NameHeader;

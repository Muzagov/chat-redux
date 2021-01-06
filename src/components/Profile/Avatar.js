import React from "react";
import cx from "classnames";

function Avatar({ name, size, online }) {
  const switchClass = cx(
    "avatar",
    { small: size === "small" },
    { medium: size === "medium" },
    { large: size === "large" }
  );

  return (
    <div className={switchClass}>
      {online && <div className="online" />}
      <div className="fullname">{name}</div>
    </div>
  );
}

export default Avatar;

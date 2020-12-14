import React from "react";
import classNames from "classnames"

function Avatar({ name, size }) {

    const switchClass = classNames(
        "avatar",
        {small: size === "small"},
        {medium: size === "medium"},
        {large: size === "large"}
    )

  return (
    <div className={switchClass}>
      <div className="fullname">{name}</div>
    </div>
  );
}

export default Avatar;

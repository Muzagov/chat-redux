import React from "react";

function Social({ socials }) {
  return (
    <div className="social">
      <div className="soc">Social</div>
      <div className="icons-social">
        {socials &&
          Object.keys(socials).map((icon) => {
            return (
              <div className="icons click">
                <i className={`fab fa-${icon}`} />
                <div className="iconsName">{socials[icon]}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Social;

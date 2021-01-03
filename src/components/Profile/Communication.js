import React from "react";

function Communication(props) {
  return (
    <div className="communication">
      <div className="icons">
        <div className="phone">
          <div className="material-icons click">local_phone</div>
        </div>
        <div className="videocam">
          <div className="material-icons click">videocam</div>
        </div>
        <div className="email">
          <div className="material-icons click">email</div>
        </div>
      </div>
    </div>
  );
}

export default Communication;

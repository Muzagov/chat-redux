import React from "react";

function Check({read}) {
  return (
    <div className="check">
        {read ? (
            <i className="material-icons">done_all</i>
        ) : (
            <i className="material-icons">done</i>
        )}
    </div>
  );
}

export default Check;

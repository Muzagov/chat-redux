import React from "react";

function Check({ read }) {
  return (
    <div className="check">
      <i className="material-icons">{read ? "done_all" : "done"}</i>
    </div>
  );
}

export default Check;

import React from "react";

function Media({ fileName }) {
  return (
    <div className="commonMedia">
      <div className="media">Media</div>
      <div className="file">
        <div className="fileName-image"></div>
        <div className="fileName">{fileName}</div>
      </div>
    </div>
  );
}

export default Media;

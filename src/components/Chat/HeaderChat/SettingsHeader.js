import React from "react";
import { useDispatch } from "react-redux";
import { loadProfileToggle } from "../../../redux/actions/application";

function SettingsHeader(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadProfileToggle());
  };

  return (
    <div className="settingsHeader">
      <div className="material-icons click" onClick={handleClick}>
        settings
      </div>
    </div>
  );
}

export default SettingsHeader;

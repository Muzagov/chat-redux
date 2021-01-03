import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadSearchMessage,
  loadSearchOpened,
} from "../../../redux/actions/application";

function SearchMessage() {
  const dispatch = useDispatch();

  const searchOpenToggle = () => {
    dispatch(loadSearchOpened());
  };

  const handleChange = (e) => {
    dispatch(loadSearchMessage(e.target.value));
  };

  const searchValue = useSelector((state) => state.application.searchValue);

  const clearSearch = () => {
    dispatch(loadSearchMessage(""));
  };

  const searchMessage = useSelector((state) => state.application.searchMessage);
  return (
    <div className={searchMessage ? "search-open" : "search-close"}>
      <div className="icon" onClick={searchOpenToggle}>
        <i className="material-icons click">
          search
        </i>
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        className="inputHeader"
      />
      {searchValue.length !== 0 && (
        <i onClick={clearSearch} className="material-icons clear">
          clear
        </i>
      )}
    </div>
  );
}

export default SearchMessage;

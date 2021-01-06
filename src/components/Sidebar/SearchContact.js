import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchContact } from "../../redux/actions/application";

function SearchContact() {
  const dispatch = useDispatch();

  const searchValue = useSelector(
    (state) => state.application.searchContactValue
  );

  const handleChange = (e) => {
    dispatch(loadSearchContact(e.target.value));
  };

  const clearSearchInput = () => {
    dispatch(loadSearchContact(""));
  };

  return (
    <div className="input">
      <div className="inputContact">
        <input
          className="search"
          placeholder="Search contact"
          value={searchValue}
          onChange={handleChange}
        />
        <i className="material-icons">search</i>
        {searchValue.length !== 0 && (
          <i onClick={clearSearchInput} className="material-icons clear">
            clear
          </i>
        )}
      </div>
    </div>
  );
}

export default SearchContact;

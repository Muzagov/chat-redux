import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchContact } from "../../redux/actions/application";

function SearchContact() {
  const searchContact = useSelector((state) => state.application.searchContactValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(loadSearchContact(e.target.value));
  };

  const clearSearch = () => {
    dispatch(loadSearchContact(""));
  };

  return (
    <div className="input">
      <div className="inputContact">
        {searchContact.length !== 0 && (
          <i onClick={clearSearch} className="material-icons clear">
            clear
          </i>
        )}
        <input
          className="search"
          placeholder="Search contact"
          value={searchContact}
          onChange={handleChange}
        />
        <i className="material-icons">search</i>
      </div>
    </div>
  );
}

export default SearchContact;

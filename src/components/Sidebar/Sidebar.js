import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import SearchContact from "./SearchContact";
import { loadContacts } from "../../redux/actions/contacts";

function Sidebar(props) {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className="sidebar">
      <SearchContact />
      {contacts.map((contact) => {
        return <Contact key={contact._id} contact={contact} />;
      })}
    </div>
  );
}

export default Sidebar;

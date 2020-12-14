import React from "react";
import SearchMessage from "./SearchMessage";
import SettingsHeader from "./SettingsHeader";
import NameHeader from "./NameHeader";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Updating from "./Updating";

function Header() {
  const opened = useParams().id;

  const loading = useSelector((state) => state.chat.loading);

  /**
   * Данные о профиле кликнутого контакта
   */

  const profile = useSelector((state) =>
    state.contacts.contacts.find((contact) => {
      return opened === contact._id;
    })
  );

  return (
    <div className="headerChat">
      <SearchMessage />
      {loading ? <Updating /> : <NameHeader name={profile?.fullname} />}
      <SettingsHeader />
    </div>
  );
}

export default Header;

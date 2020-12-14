import React from "react";
import dayjs from "dayjs";
import Avatar from "../Profile/Avatar";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom"

function InboxMessage({ chat }) {
  const opened = useParams().id

  /**
   * Данные о профиле кликнутого контакта
   */
  const { fullname } = useSelector((state) =>
      state.contacts.contacts.find((contact) => {
        return opened === contact._id;
      })
  );

  return <div className="InboxMessage">
    <Avatar size={"small"} name={fullname[0]}/>
    <div className="inbox">
      {chat.content}
      <div className="date">
        <div>{dayjs(chat.time).format("hh:mm")}</div>
      </div>
    </div>
  </div>;
}



export default InboxMessage;

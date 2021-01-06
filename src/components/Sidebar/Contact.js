import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadChat } from "../../redux/actions/chat";
import { useParams, useHistory } from "react-router-dom";
import dayjs from "dayjs";
import Avatar from "../Profile/Avatar";
import ContactLastMessage from "./ContactLastMessage";
import classNames from "classnames";

function Contact({ contact }) {
  const { _id, fullname, lastMessage, online } = contact;

  const opened = useParams().id;

  const myId = useSelector((state) => state.profile.myId);

  const dispatch = useDispatch();

  const history = useHistory();

  const OpenedContact = _id === opened;

  const handleClick = () => {
    if (!OpenedContact) {
      dispatch(loadChat(myId, _id));
      history.push(_id);
    }
  };

  const classes = classNames("contact", {
    active: OpenedContact,
  });

  return (
    <div className={classes} onClick={handleClick}>
      <Avatar size={"medium"} name={fullname[0]} online={online} />
      <div className="fullnameContact">
        {fullname}
        <ContactLastMessage contact={contact} />
      </div>
      <div className="date">
        <div>{dayjs(lastMessage?.time).format("hh:mm")}</div>
      </div>
    </div>
  );
}

export default Contact;

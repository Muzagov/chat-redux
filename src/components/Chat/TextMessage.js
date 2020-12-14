import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import OutMessage from "./OutboxMessage";
import InboxMessage from "./InboxMessage";

function TextMessage({ name, chat }) {
  const myId = useSelector((state) => state.profile.myId);

  const isOutgoing = myId === chat.toUserId;
  if (!isOutgoing) {
    return <OutMessage chat={chat} />;
  }
  return <InboxMessage chat={chat} />;
}

TextMessage.propTypes = {
  chat: PropTypes.object,
};

export default TextMessage;

import React from "react";
import { useSelector } from "react-redux";
import OutboxMessage from "./OutboxMessage";

function TextMessage({ chat }) {
  const myId = useSelector((state) => state.profile.myId);

  const isOutgoing = myId === chat.toUserId;

  if (isOutgoing) {
    return <inboxMessage chat={chat} />;
  }

  return <OutboxMessage chat={chat} />;
}

export default TextMessage;

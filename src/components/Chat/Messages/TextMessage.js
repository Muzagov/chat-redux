import React from "react";
import { useSelector } from "react-redux";
import InboxMessage from "./InboxMessage";
import OutboxMessage from "./OutboxMessage";

function TextMessage({ chat }) {
  const myId = useSelector((state) => state.profile.myId);

  const isOutgoing = myId === chat.toUserId;
  if (!isOutgoing) {
    return <OutboxMessage chat={chat} />;
  }
  return <InboxMessage chat={chat} />;
}


export default TextMessage;

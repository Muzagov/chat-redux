import React from "react";
import TextMessage from "./TextMessage";
import InfoMessage from "./InfoMessage";

function ChatMessages({ chat }) {
  if (chat.type === "text") {
    return <TextMessage chat={chat} />;
  }

  return <InfoMessage content={chat.content} />;
}

export default ChatMessages;

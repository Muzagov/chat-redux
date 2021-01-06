import React from "react";
import ChatMessages from "./ChatMessages";
import { useSelector } from "react-redux";

function Messages(props) {
  const loading = useSelector((state) => state.chat.loading);

  const chats = useSelector((state) => {
    const searchValue = state.application.searchValue;

    return state.chat.chats.filter((item) => {
      return (
        item.content.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1
      );
    });
  });

  return (
    <div className="chat-start" id="chat">
      {!loading &&
        chats.map((chat, index) => {
          return <ChatMessages key={index} chat={chat} />;
        })}
    </div>
  );
}

export default Messages;

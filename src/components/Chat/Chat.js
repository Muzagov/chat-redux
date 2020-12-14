import React from "react";
import { useSelector } from "react-redux";
import MessageChat from "./MessageChat";
import SendMessage from "./SendMessage/SendMessage";
import Header from "./HeaderChat/Header";

function Chat() {
  const loading = useSelector((state) => state.chat.loading);
  const opened = useSelector((state) => state.chat.opened);
  const chats = useSelector((state) => state.chat.chats);
  const contacts = useSelector(state => state.contacts.contacts.fullname)

  if (opened === null) {
    return (
      <div className="chat-start">
        <div className="start">Please, select a chat to start messaging</div>
      </div>
    );
  }

  return (
    <div className="chat">
        <Header />
      <div className="chat-start">
          {!loading &&
          chats.map((chat, index) => {
              return <MessageChat key={index} chat={chat} />;
          })}
      </div>
        <SendMessage />
    </div>
  );
}

export default Chat;

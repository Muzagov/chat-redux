import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageChat from "./MessageChat";
import SendMessage from "../SendMessage/SendMessage";
import Header from "../HeaderChat/Header";
import { useParams } from "react-router-dom";
import { loadChat } from "../../../redux/actions/chat";

function Chat() {
  const loading = useSelector((state) => state.chat.loading);
  const opened = useParams().id;
  const dispatch = useDispatch();
  const myId = useSelector((state) => state.profile.myId);
  const chats = useSelector(state => state.chat.chats)

  useEffect(() => {
    if (opened) {
      dispatch(loadChat(myId, opened));
    }
  }, [dispatch, opened, myId]);

  if (!opened) {
    return (
      <div className="chat-start">
        <div className="start">Please, select a chat to start messaging</div>
      </div>
    );
  }

  return (
    <div className="chat">
      <Header />
      <div className="chat-start" id="chat">
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

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessages from "./Messages/ChatMessages";
import SendMessage from "./SendMessage/SendMessage";
import Header from "./HeaderChat/Header";
import { useParams } from "react-router-dom";
import { loadChat } from "../../redux/actions/chat";
import Messages from "./Messages/Messages";

function Chat() {
  const opened = useParams().id;

  const dispatch = useDispatch();

  const myId = useSelector((state) => state.profile.myId);

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
      <Messages />
      <SendMessage />
    </div>
  );
}

export default Chat;

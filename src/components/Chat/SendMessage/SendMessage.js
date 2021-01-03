import React, { useState } from "react";
import { TextareaAutosize } from "@material-ui/core";
import CommonButtons from "./CommonButtons";
import ButtonClip from "./ButtonClip";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../redux/actions/chat";
import { useParams } from "react-router-dom";

function SendMessage() {
  const dispatch = useDispatch();
  const myId = useSelector((state) => state.profile.myId);
  const opened = useParams().id;

  const [content, setContent] = useState("");

  const handleChange = (e) => {
      setContent(e.target.value);
  };

  const sentMessage = () => {
      dispatch(sendMessage(opened, myId, content))
  }

  return (
    <div className="sendInput">
      <TextareaAutosize
        onChange={handleChange}
        value={content}
        placeholder="Write a message..."
        maxRows="5"
        className="inputMessage"
      />
      <ButtonClip />
      <CommonButtons sentMessage={sentMessage} send={content.length > 0} />
    </div>
  );
}

export default SendMessage;

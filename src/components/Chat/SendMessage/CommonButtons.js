import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function CommonButtons({ send, sentMessage }) {
  return (
    <button className="send click">
      <SwitchTransition>
        <CSSTransition key={send} timeout={100} classNames="sendIconButtons">
          <i className="material-icons micro" onClick={sentMessage}>
            {send ? "send" : "mic"}
          </i>
        </CSSTransition>
      </SwitchTransition>
    </button>
  );
}

export default CommonButtons;

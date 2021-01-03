import React from "react";
import dayjs from "dayjs";
import Check from "./Check";

function OutboxMessage({ chat }) {
  return (
    <div className="OutboxMessage">
      <div className="outbox">
        <div className="outboxContent">{chat.content}</div>
        <div className="date">
          <div>{dayjs(chat.time).format("hh:mm")}</div>
          <Check read={chat.read} />
        </div>
      </div>
    </div>
  );
}

export default OutboxMessage;

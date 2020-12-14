import React from "react";
import dayjs from "dayjs";


function OutboxMessage({ chat }) {
  return (
    <div className="OutboxMessage">
      <div className="outbox">{chat.content}
          <div className="date">
              <div>{dayjs(chat.time).format("hh:mm")}</div>
          </div></div>
    </div>
  );
}

export default OutboxMessage;

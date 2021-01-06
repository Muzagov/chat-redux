import React from "react";

function ContactLastMessage({ contact }) {
  const { _id, lastMessage } = contact;

  return (
    <div className="bottomMessage">
      {_id === lastMessage?.toUserId && (
        <div>
          {lastMessage.content?.length > 17
            ? lastMessage.content.substring(0, 16) + "..."
            : lastMessage.content}
        </div>
      )}
    </div>
  );
}

export default ContactLastMessage;

import { scrollChatDown } from "../../utils/ScrollChat";

// Загрузка сообщений

export function loadChat(myId, contactId) {
  return (dispatch) => {
    dispatch({ type: "load_chat_start", payload: contactId });
    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${contactId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load_chat_success",
          payload: json,
        });
        scrollChatDown()
      });
  };
}

export function sendMessage(contactId, myId, content) {
  return (dispatch) => {
    dispatch({
      type: "send_messages_start",
      payload: { contactId, myId, content, type: "text" },
    });
    fetch("https://api.intocode.ru:8001/api/messages", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myId,
        contactId,
        content,
        type: "text",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "send_messages_success",
        });
        scrollChatDown()
      });
  };
}

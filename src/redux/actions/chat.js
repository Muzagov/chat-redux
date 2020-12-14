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
      });
  };
}

// Отправление сообщения

// export function sendMessage(myId, contactId, content) {
//     return dispatch({})
// }

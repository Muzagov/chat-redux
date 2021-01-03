// Открытие профиля контакта

export function loadProfileToggle() {
  return (dispatch) => {
    dispatch({
      type: "load_application_success",
    });
  };
}

// Поиск контакта

export function loadSearchContact(value) {
  return (dispatch) => {
    dispatch({ type: "load_search_contact", payload: value });
  };
}

// Открытие и Закрытие поиска сообщений

export function loadSearchOpened() {
  return { type: "load_opened_messages" };
}

// Поиск сообщений

export function loadSearchMessage(value) {
  return (dispatch) => {
    dispatch({ type: "load_search_message", payload: value });
  };
}

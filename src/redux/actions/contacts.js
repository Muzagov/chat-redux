export function loadContacts() {
  return (dispatch) => {
    dispatch({ type: "load_contacts_start" });
    fetch("https://api.intocode.ru:8001/api/contacts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load_contacts_success",
          payload: json,
        });
      });
  };
}

export function loadMyProfile() {
  return (dispatch) => {
    dispatch({ type: "load_profile_start" });
    fetch("https://api.intocode.ru:8001/api/profile")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load_profile_success",
          payload: json,
        });
      });
  };
}

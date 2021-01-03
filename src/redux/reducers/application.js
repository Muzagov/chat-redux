const initialState = {
  openContactProfile: false,
  searchContactValue: "",
  searchMessage: false,
  searchValue: "",
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "load_application_success":
      return {
        ...state,
        openContactProfile: !state.openContactProfile,
      };

    case "load_search_contact":
      return {
        ...state,
        searchContactValue: action.payload,
      };

    case "load_search_message":
      return {
        ...state,
        searchValue: action.payload,
      };

    case "load_opened_messages":
      return {
        ...state,
        searchMessage: !state.searchMessage,
      };

    default:
      return state;
  }
}

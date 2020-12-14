const initialState = {
  openContactProfile: false,
  searchContactValue: "",
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
        searchContactValue: action.payload
      }

    default:
      return state;
  }
}

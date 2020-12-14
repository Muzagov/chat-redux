const initialState = {
  myId: "",
  loading: true,
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "load_profile_start":
      return {
        ...state,
        loading: true,
      };

    case "load_profile_success":
      return {
        ...state,
        myId: action.payload._id,
        loading: false,
      };

    default:
      return state;
  }
}

const initialState = {
  loading: true,
  chats: [],
  opened: null,
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case "load_chat_start":
      return {
        ...state,
        loading: true,
        opened: action.payload,
      };

    case "load_chat_success":
      return {
        ...state,
        loading: false,
        chats: action.payload,
      };

    case "send_messages_start":
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };

    case "send_messages_success":
      return {
        ...state,
        chats: state.chats.map((chat) => {
          return {
            ...chat,
          };
        }),
      };
    default:
      return state;
  }
}

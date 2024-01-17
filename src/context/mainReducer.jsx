export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

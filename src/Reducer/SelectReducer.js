const selectReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT":
      return action.payload;
    case "RESET":
      return {};
    default:
      return state;
  }
};
export default selectReducer;

const initialState = {
  counter: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1
      };
      break;
    case "DECREMENT":
      return {
        counter: state.counter - 1
      };
      break;
    case "ADD5":
      return {
        counter: state.counter + action.value
      };
      break;
    case "SUB5":
      return {
        counter: state.counter + action.value
      };
      break;
  }

  return state;
};

export default reducer;

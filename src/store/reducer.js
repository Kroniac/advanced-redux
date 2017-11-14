const initialState = {
  counter: 0,
  result: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
      break;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
      break;
    case "ADD5":
      return {
        ...state,
        counter: state.counter + action.value
      };
      break;
    case "SUB5":
      return {
        ...state,
        counter: state.counter + action.value
      };
      break;
    case "STORE_RESULT":
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter })
      };
      break;
  }

  return state;
};

export default reducer;

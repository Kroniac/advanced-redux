import * as actiontype from "../action/actionTypes";
import { updateObject } from "../updateObject";

const initialState = {
  counter: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.INCREMENT:
      return updateObject({ state, counter: state.counter + 1 })
    case actiontype.DECREMENT:
      return { state, counter: state.counter - 1 };
    case actiontype.ADD:
      return (state, { counter: state.counter + action.value });
    case actiontype.SUB:
      return updateObject({ ...state, counter: state.counter - action.value });
    default:
      return state;
  }
};

export default reducer;

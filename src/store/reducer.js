import * as actiontype from "./action";

const initialState = {
  counter: 0,
  result: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actiontype.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actiontype.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actiontype.SUB:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actiontype.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter })
      };
    case actiontype.DELETE_RESULT:
      //  const id =3;
      //  const newArray =  [...state.result];
      //  newArray.splice(id,1);
      const updatedArray = state.result.filter(
        result => result.id !== action.resultId
      );

      return {
        ...state,
        result: updatedArray
      };

    default:
      return state;
  }
};

export default reducer;

import * as actiontype from "../action/actionTypes";
import { updateObject } from "../updateObject";

const initialState = {
  result: []
};

const storeResult = (state, action) => {
  return updateObject({
    state,
    result: state.result.concat({
      id: new Date(),
      value: action.result * 3
    })
  });
};

const deleteResult = (state, action) => {
  //  const id =3;
  //  const newArray =  [...state.result];
  //  newArray.splice(id,1);
  const updatedArray = state.result.filter(
    result => result.id !== action.resultId
  );
  return updateObject({ state, result: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_RESULT:
      return storeResult(state, action);
    case actiontype.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default reducer;

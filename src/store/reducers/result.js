import * as actiontype from "../action/actionTypes";
import { updateObject } from "../updateObject";

const initialState = {
  result: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_RESULT:
      return updateObject({
        state,
        result: state.result.concat({
          id: new Date(),
          value: action.result * 3
        })
      });

    case actiontype.DELETE_RESULT:
      //  const id =3;
      //  const newArray =  [...state.result];
      //  newArray.splice(id,1);
      const updatedArray = state.result.filter(
        result => result.id !== action.resultId
      );
      return updateObject({ state, result: updatedArray });
    default:
      return state;
  }
};

export default reducer;

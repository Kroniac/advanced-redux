import * as actiontype from "../action/action";

const initialState = {
  result: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: action.result })
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

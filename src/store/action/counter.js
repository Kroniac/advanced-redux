export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUB = "SUB";

export const increment = () => {
    return {
      type: INCREMENT
    };
  };
  
  export const decrement = () => {
    return {
      type: DECREMENT
    };
  };
  export const add = value => {
    return {
      type: ADD,
      value: value
    };
  };
  export const sub = value => {
    return {
      type: SUB,
      value: value
    };
  };
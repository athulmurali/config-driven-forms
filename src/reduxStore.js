import { createStore } from "redux";

// Action types
const UPDATE_USER = "UPDATE_USER";

// Action creator
export const updateUser = (data) => ({
  type: UPDATE_USER,
  payload: data
});

// Reducer
const initialState = {
  user: {}
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

// Create Redux store
export const store = createStore(rootReducer);

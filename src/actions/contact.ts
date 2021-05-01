import * as types from "./types";

export const addContact = (contact: {}) => async (dispatch: any) => {
  console.log("dispatch func", contact);
  dispatch({ type: types.ADD_CONTACT, payload: contact });
};

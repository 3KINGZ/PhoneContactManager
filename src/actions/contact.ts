import * as types from "./types";

export const addContact = (contact: {}) => async (dispatch: any) => {
  dispatch({ type: types.ADD_CONTACT, payload: contact });
};

export const deleteContact = (id: string) => async (dispatch: any) => {
  dispatch({ type: types.DELETE_CONTACT, payload: id });
};

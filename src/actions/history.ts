import { DELETE_CALL_HISTORY } from "./types/history.types";
import * as types from "./types";

export const addToHistory = (history: any) => (dispatch: any) => {
  dispatch({ type: types.ADD_TO_HISTORY, payload: history });
};

export const deleteCallHistory = (id: string) => (dispatch: any) => {
  dispatch({ type: types.DELETE_CALL_HISTORY, payload: id });
};

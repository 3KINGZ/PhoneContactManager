import * as types from "../actions/types";
import recents from "../utils/constants/recents";

const initialState = {
  history: recents,
};

const historyReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TO_HISTORY:
      return { history: [payload, ...state.history] };

    case types.DELETE_CALL_HISTORY:
      const filteredHistory = state.history.filter((hst) => hst.id !== payload);
      return { history: filteredHistory };

    default:
      return state;
  }
};

export default historyReducer;

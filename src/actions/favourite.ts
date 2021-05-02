import * as types from "./types";

export const addToFavourites = (id: string) => (dispatch: any) => {
  dispatch({ type: types.ADD_TO_FAVOURITES, payload: id });
};

export const removeFromFavourites = (id: string) => (dispatch: any) => {
  dispatch({ type: types.REMOVE_FROM_FAVOURITES, payload: id });
};

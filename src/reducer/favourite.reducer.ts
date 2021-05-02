import { Favourites } from "./../screens/Favourites";
import * as types from "../actions/types";
import favourites from "../utils/constants/favourites";

const initalState = {
  favourites: favourites,
};

const favouriteReducer = (
  state = initalState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TO_FAVOURITES:

    case types.REMOVE_FROM_FAVOURITES:
      const filteredFavourites = state.favourites.filter(
        (contact) => contact.contactId !== payload,
      );
      return { favourites: filteredFavourites };

    default:
      return state;
  }
};

export default favouriteReducer;

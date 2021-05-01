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
      let favourites = [...state.favourites, payload];

      favourites = favourites.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
      );

      return { favourites: favourites };

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

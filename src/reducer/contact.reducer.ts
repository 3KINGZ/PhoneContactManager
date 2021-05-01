import * as types from "../actions/types";
import contacts from "../utils/constants/contacts";

const initalState = {
  contacts: contacts,
};

const contactReducer = (
  state = initalState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_CONTACT:
      let contacts = [...state.contacts, payload];

      contacts = contacts.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
      );

      return { contacts: contacts };

    case types.DELETE_CONTACT:
      const filteredContacts = state.contacts.filter(
        (contact) => contact.contactId !== payload,
      );
      return { contacts: filteredContacts };

    default:
      return state;
  }
};

export default contactReducer;

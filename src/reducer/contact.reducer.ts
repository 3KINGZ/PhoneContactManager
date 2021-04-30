import contacts from "../utils/constants/contacts";
import * as types from "../actions/types";

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
      return { contacts: [...state.contacts, payload] };

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

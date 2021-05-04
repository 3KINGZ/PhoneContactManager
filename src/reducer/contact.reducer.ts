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
      return { contacts: [...state.contacts, payload] };

    case types.ADD_TO_FAVOURITES:
      const contact: any = state.contacts.filter(
        (contact: any) => contact.id === payload,
      );
      contact.favourite = true;

      const filtered = state.contacts.filter(
        (contact: any) => contact.id !== payload,
      );

      return { contacts: [...filtered, contact] };

    case types.DELETE_CONTACT:
      const filteredContacts = state.contacts.filter(
        (contact) => contact.contactId !== payload,
      );

      return { contacts: filteredContacts };

    case types.EDIT_CONTACT:
      const contacts = state.contacts.filter(
        (contact) => contact.contactId !== payload.id,
      );

      contacts.push(payload.contact);

      return { contacts: contacts };

    default:
      return state;
  }
};

export default contactReducer;

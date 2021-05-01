import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useContactDetail = (id: string) => {
  const contacts = useSelector(
    (state: { contacts: { contacts: IContact[] } }) => state.contacts.contacts,
  );
  const history = useSelector(
    (state: { history: { history: IHistory[] } }) => state.history.history,
  );

  const [contact, setContact] = useState<IContact | any>({});
  const [logs, setLogs] = useState<any>();

  useEffect(() => {
    const contact = contacts.find(
      (contact: IContact) => contact.contactId === id,
    );
    const logs = history.filter((hst) => hst.contactId === id);
    setContact(contact);
    setLogs(logs);
  }, []);

  return [contact, logs];
};

import contacts from "./contacts";

let favourites = contacts.filter((contact) => contact.favourite === true);

export default favourites;

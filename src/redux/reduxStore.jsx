import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import selectedContact from "./selectedContactSlice";

const reduxStore = configureStore({
  reducer: {
    contacts: contactsSlice,
    contactId: selectedContact,
  },
});

export default reduxStore;

import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const selectedContact = createSlice({
  name: "contactId",
  initialState: initialState,
  reducers: {
    setSelectedContact(state, action) {
      return action.payload;
    },
  },
});

export const { setSelectedContact } = selectedContact.actions;
export default selectedContact.reducer;

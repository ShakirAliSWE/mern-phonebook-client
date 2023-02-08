import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    setContacts(state, action) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const fetchContacts = createAsyncThunk("setContacts", async () => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/contacts`
  );
  return response?.data?.data;
});

export const { setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;

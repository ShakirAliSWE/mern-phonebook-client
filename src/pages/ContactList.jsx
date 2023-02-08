import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactCard, ContactSearch } from "../components";
import { fetchContacts } from "../redux/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <>
      <div className="d-flex flex-column">
        <ContactSearch />
        {contacts.map((c, i) => (
          <ContactCard key={i} contact={c} />
        ))}
      </div>
    </>
  );
}

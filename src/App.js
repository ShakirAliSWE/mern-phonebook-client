import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContactList, ContactView, ContactAdd } from "./pages";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col-md-4">
          <ContactList />
        </div>
        <div className="col-md-8">
          <Routes>
            <Route path="/" element={<ContactView />}></Route>
            <Route path="/add" element={<ContactAdd />}></Route>
            <Route path="/view/:id" element={<ContactView />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

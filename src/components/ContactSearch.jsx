import React from "react";
import { Link } from "react-router-dom";

export default function ContactSearch() {
  return (
    <div className="input-group mb-2">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search Contact"
        aria-describedby="search-button"
      />
      <Link
        to="/add"
        className="btn btn-primary btn-lg"
        type="button"
        id="search-button"
      >
        <i className="fa fa-plus"></i>
      </Link>
    </div>
  );
}

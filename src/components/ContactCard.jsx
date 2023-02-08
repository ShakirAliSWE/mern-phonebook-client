import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function ContactCard({ contact = {} }) {
  const selectedId = useSelector((state) => state.contactId);
  const selectClass =
    contact?.id == selectedId ? "container-user-list-active" : null;
  return (
    <Link
      to={`../view/${contact?.id}`}
      className={`text-decoration-none container-user-list ${selectClass}`}
    >
      <div className="row">
        <div className="col-3">
          <div className=" d-flex align-items-center">
            <img
              src={
                contact.profileURL
                  ? `${process.env.REACT_APP_API_URL}/${contact.profileURL}`
                  : `https://fakeimg.pl/300/`
              }
              className="img-fluid rounded-circle shadow"
            />
          </div>
        </div>
        <div className="col-9">
          <div className="fw-semibold">{contact?.name}</div>
          <div className="d-flex flex-wrap flex-column">
            <small className="text-muted">
              <i className="fa fa-phone fa-xs m-1"></i>
              {contact?.phone}
            </small>
            <small className="text-muted">
              <i className="fa fa-envelope fa-xs m-1"></i>
              {contact?.email}
            </small>
          </div>
        </div>
      </div>
    </Link>
  );
}

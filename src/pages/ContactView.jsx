import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ContactBanner } from "../components";
import { setSelectedContact } from "../redux/selectedContactSlice";

const ContactField = ({ id = "_", value = "-", icon = "", iconText = "" }) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id={`icon_${id}`}>
        <i className={icon}>{iconText}</i>
      </span>
      <input
        type="text"
        className="form-control"
        aria-describedby={`icon_${id}`}
        value={value}
        disabled
      />
    </div>
  );
};

export default function ContactView() {
  const { id = 1 } = useParams();
  const dispatch = useDispatch();
  const [contact, setContact] = useState({});
  const contacts = useSelector((state) => state.contacts);

  useEffect(() => {
    findContactById(id);
  }, [id]);

  const findContactById = (id) => {
    const data = contacts.filter((c) => c.id == id);
    setContact(data.length ? data[0] : {});
    dispatch(setSelectedContact(id));
  };

  return (
    <>
      <ContactBanner
        profileURL={
          contact.profileURL
            ? `http://localhost:3001/${contact?.profileURL}`
            : null
        }
      />
      <div className="row">
        <div className="col-md-12">
          <div className="h3 mb-3 pt-4">{contact?.name}</div>
          <div className="container-user-detail">
            <div className="float-end">
              <Link to={`/edit/${contact?.id}`} className="btn btn-link">
                <i className="fa fa-pencil"></i>
              </Link>
            </div>
            <div className="h5 mb-3">Personal</div>
            <ContactField
              id={"email"}
              icon={"fa fa-envelope"}
              value={contact?.email}
            />
            <ContactField
              id={"phone"}
              icon={"fa fa-phone"}
              value={contact?.phone}
            />
            <ContactField
              id={"website"}
              icon={"fa fa-globe"}
              value={contact?.website}
            />
            <div className="h5 mb-3">Address</div>
            <ContactField
              id={"street"}
              icon={"fw-bold"}
              iconText={"Street"}
              value={contact?.street}
            />
            <ContactField
              id={"city"}
              icon={"fw-bold"}
              iconText={"City"}
              value={contact?.city}
            />
            <ContactField
              id={"zipcode"}
              icon={"fw-bold"}
              iconText={"ZipCode"}
              value={contact?.zipcode}
            />
            <div className="h5 mb-3">Company</div>
            <ContactField
              id={"companyName"}
              icon={"fw-bold"}
              iconText={"Name"}
              value={contact?.companyName}
            />
            <div className="h5 mb-3">Social Media</div>
            <ContactField
              id={"companyName"}
              icon={"fa-brands fa-facebook-f"}
              value={contact?.facebook}
            />
            <ContactField
              id={"companyName"}
              icon={"fa-brands fa-linkedin"}
              value={contact?.linkedin}
            />
            <ContactField
              id={"companyName"}
              icon={"fa-brands fa-twitter"}
              value={contact?.twitter}
            />
          </div>
        </div>
      </div>
      <div>
        <br />
      </div>
    </>
  );
}

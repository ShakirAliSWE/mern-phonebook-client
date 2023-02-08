import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactBannerEdit } from "../components";
import { serverRequestFormData } from "../utils";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactField = ({
  id = "_",
  fieldProps,
  icon = "",
  iconText = "",
  placeholder = "",
}) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id={`icon_${id}`}>
        <i className={icon}>{iconText}</i>
      </span>
      <input
        className="form-control"
        placeholder={placeholder}
        aria-describedby={`icon_${id}`}
        {...fieldProps}
      />
    </div>
  );
};

export default function ContactAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileURL, setProfileURL] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const profileHandler = (e) => {
    setProfileURL(URL.createObjectURL(e.target.files[0]));
  };

  const formSubmit = (parameters) => {
    let formData = new FormData();
    Object.entries(parameters).map((value) => {
      if (value[0] === "profile") {
        formData.append(value[0], value[1][0]);
      } else {
        formData.append(value[0], value[1]);
      }
    });

    serverRequestFormData("save-contact", formData, (response) => {
      const { message, data } = response;
      toast.success(message);
      dispatch(fetchContacts());
      navigate("../");
    });
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(formSubmit)}>
        <ContactBannerEdit
          profileURL={profileURL}
          profileInput={{
            ...register("profile", { onChange: profileHandler }),
          }}
        />

        <div className="row">
          <div className="col-md-12">
            <div className="h3 mb-3 pt-4" style={{ width: "50%" }}>
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="form-control form-control-lg"
              />
            </div>
            <div className="container-user-detail">
              <div className="float-end mb-2">
                <button className="btn btn-primary" type="submit">
                  <i className="fa fa-save"></i>
                </button>
              </div>
              <div className="h5 mb-3">Personal</div>
              <ContactField
                id={"email"}
                placeholder="Email"
                icon={"fa fa-envelope"}
                fieldProps={{ ...register("email", { required: true }) }}
              />
              <ContactField
                id={"phone"}
                placeholder="Phone"
                icon={"fa fa-phone"}
                fieldProps={{ ...register("phone", { required: true }) }}
              />
              <ContactField
                id={"website"}
                placeholder="https://www.google.com"
                icon={"fa fa-globe"}
                fieldProps={{ ...register("website") }}
              />
              <div className="h5 mb-3">Address</div>
              <ContactField
                id={"street"}
                placeholder="Street"
                icon={"fw-bold"}
                iconText={"Street"}
                fieldProps={{ ...register("street") }}
              />
              <ContactField
                id={"city"}
                placeholder="City"
                icon={"fw-bold"}
                iconText={"City"}
                fieldProps={{ ...register("city") }}
              />
              <ContactField
                id={"zipcode"}
                placeholder="Zip code"
                icon={"fw-bold"}
                iconText={"ZipCode"}
                fieldProps={{ ...register("zipcode") }}
              />
              <div className="h5 mb-3">Company</div>
              <ContactField
                id={"companyName"}
                placeholder="Company Name"
                icon={"fw-bold"}
                iconText={"Name"}
                fieldProps={{ ...register("companyName") }}
              />
              <div className="h5 mb-3">Social Media</div>
              <ContactField
                id={"facebook"}
                placeholder="https://facebook.com/*"
                icon={"fa-brands fa-facebook-f"}
                fieldProps={{ ...register("facebook") }}
              />
              <ContactField
                id={"linkedin"}
                placeholder="https://linkedin.com/*"
                icon={"fa-brands fa-linkedin"}
                fieldProps={{ ...register("linkedin") }}
              />
              <ContactField
                id={"twitter"}
                placeholder="https://twitter.com/*"
                icon={"fa-brands fa-twitter"}
                fieldProps={{ ...register("twitter") }}
              />
            </div>
          </div>
        </div>
      </form>
      <div>
        <br />
      </div>
    </>
  );
}

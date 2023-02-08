import React from "react";

export default function ContactBannerEdit({
  bannerURL = null,
  profileURL = null,
  profileInput = {},
}) {
  bannerURL = bannerURL ? bannerURL : "https://fakeimg.pl/820x150/";
  profileURL = profileURL ? profileURL : "https://fakeimg.pl/300/";

  return (
    <div className="container-banner mb-3">
      <img
        src={bannerURL}
        className="rounded shadow"
        style={{ width: "100%", height: "150px" }}
      />
      <div className="container-banner-avatar">
        <input
          type="file"
          accept="image/*"
          id="profilePictureChooser"
          style={{ display: "none" }}
          {...profileInput}
        />
        <label htmlFor="profilePictureChooser">
          <img src={profileURL} className="img-fluid rounded shadow" />
        </label>
      </div>
    </div>
  );
}

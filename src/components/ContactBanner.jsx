import React from "react";

export default function ContactBanner({ bannerURL = null, profileURL = null }) {
  bannerURL = bannerURL ? bannerURL : "https://fakeimg.pl/820x150/";
  profileURL = profileURL ? profileURL : "https://fakeimg.pl/300/";

  return (
    <div className="container-banner mb-3">
      <img
        src={bannerURL}
        className="rounded shadow"
        style={{ width: "100%", height: "150px" }}
      />
      <div className="container-bottom-left">
        <div className="container-avatar">
          <img src={profileURL} className="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  );
}

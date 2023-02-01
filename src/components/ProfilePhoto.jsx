import React from "react";
import profile from "../ProfilePhoto.jpg";
export function ProfilePhoto() {
  return (
    <img
      src={profile}
      alt="profile fifi"
      style={{ height: "200px", width: "100" }}
    />
  );
}

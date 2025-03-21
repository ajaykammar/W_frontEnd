import React from "react";
import ProfileSideMenu from "../components/Profile/ProfileSideMenu ";

import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex  w-full ">
      <div className="w-64">
        <ProfileSideMenu />
      </div>

      <div className="mx-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
import profileImage from "../../assets/Images/profile.jpg";
import { Link } from "react-router-dom";
const ProfileSideMenu = () => {
  const [isAccountSettingsOpen, setAccountSettingsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const toggleAccountSettings = () => {
    setAccountSettingsOpen(!isAccountSettingsOpen);
  };

  return (
    <div>
      <div className="w-64 flex items-center m-2   shadow-xl bg-primary rounded-lg">
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4 m-1"
        />
        <h1 className=" font-semibold m-2 text-white">
          Hello, <br /> {user.username.toUpperCase()}
        </h1>
      </div>

      <div className="w-64 bg-primary rounded-2xl m-2 text-white shadow-md h-screen p-5">
        <ul className="space-y-4">
          <li className="transition duration-200 hover:bg-gray-700 rounded p-2">
            <Link to={"/profile/myorders"}> My Orders </Link>
          </li>
          <li
            className="transition duration-200 hover:bg-gray-700 rounded p-2 cursor-pointer"
            onClick={toggleAccountSettings}
          >
            <span className="flex justify-between items-center">
              Account Settings
              <svg
                className={`w-4 h-4 transform ${
                  isAccountSettingsOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10l5 5 5-5"
                />
              </svg>
            </span>
          </li>
          {isAccountSettingsOpen && (
            <ul className="ml-4 mt-2 space-y-2">
              <li className="transition duration-200 hover:bg-gray-700 rounded p-2">
                <Link to={"/profile/info"}> Profile Info </Link>{" "}
              </li>

              <li className="transition duration-200 hover:bg-gray-700 rounded p-2">
                <Link to={"/profile/manageAddress"}> Manage Address </Link>
              </li>
            </ul>
          )}
          <li
            className="transition duration-200 hover:bg-gray-700 rounded p-2"
            onClick={() => localStorage.clear()}
          >
            <Link to={"/"}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSideMenu;

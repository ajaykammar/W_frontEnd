import { genImagePreviewStyle } from "antd/es/image/style";
import React, { useState } from "react";

const ProfileDetails = ({ name, phone, email, address, pin }) => {
  const [isEditing, setIsEditing] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    username: user.username,
    contactNo: user.contactNo,
    email: user.email,
    address: "Kangrali B.K Belgaum",
    pin: 590010,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Here, you would typically send formData to your backend API to save the changes
    console.log("Saved Data:", formData);
    setIsEditing(false);
  };

  return (
    <div className=" ">
      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Profile Details</h2>
        <button
          className="text-blue-950 px-4 py-2 rounded-lg  hover:bg-blue-950 hover:text-white transition duration-200"
          onClick={isEditing ? handleSave : handleEditToggle}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {Object.keys(formData).map((key) => (
          <div
            key={key}
            className="border p-4 flex bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            <strong className="text-gray-600 capitalize mx-2">{key}:</strong>
            {isEditing ? (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="mt-1  rounded-lg   w-full"
              />
            ) : (
              <p className="mt-1 text-sm text-gray-900 ">{formData[key]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDetails;

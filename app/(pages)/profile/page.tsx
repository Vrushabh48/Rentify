"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    age: 0,
    gender: "",
  });
  const [IsEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/profile");
        setProfileData(response.data.profile); // Assuming API response contains a `profile` object
      } catch (e) {
        console.error(e);
      }
    };

    fetchProfileData();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(true);
  };

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  // Convert `age` to a number if the field being updated is `age`
  setProfileData({
    ...profileData,
    [name]: name === "age" ? Number(value) : value,
  });
};

const handleagechange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  // Convert `age` to a number if the field being updated is `age`
  setProfileData({
    ...profileData,
    [name]: name === "age" ? Number(value) : value,
  });
};



  const handleSaveChanges = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/profile", {
        profile: profileData,
      });
      console.log("Profile updated successfully:", response.data);
      setIsEditing(false);
    } catch (e) {
      console.error("Failed to update profile:", e);
    }
  };
  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <h2>Profile Details</h2>
        <p>Name: {profileData.name}</p>
        <p>Email: {profileData.email}</p>
        <p>Phone: {profileData.phone}</p>
        <p>Age: {profileData.age}</p>
        <p>Gender: {profileData.gender}</p>
      </div>
      <div>
      <h1>Profile Page</h1>
      <div>
        <h2>Profile Details</h2>
        {IsEditing ? (
          <>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profileData.name || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={profileData.phone || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={profileData.age || 0}
                onChange={handleagechange}
              />
            </div>
            <div>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={profileData.gender || ""}
                onChange={handleInputChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button onClick={handleSaveChanges}>Save Changes</button>
          </>
        ) : (
          <>
            <p>Name: {profileData.name}</p>
            <p>Email: {profileData.email}</p>
            <p>Phone: {profileData.phone}</p>
            <p>Age: {profileData.age}</p>
            <p>Gender: {profileData.gender}</p>
          </>
        )}
        <button onClick={handleEditToggle}>
          {IsEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>
    </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    age: 0,
    gender: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/profile");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch profile data");
        }
        const data = await response.json();
        setProfileData(data.profile); // Match API response
      } catch (e) {
        console.log(e);
        setError(error); // Set error for display
      }
    };

    fetchProfileData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Display error message to the user
  }

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
    </div>
  );
}

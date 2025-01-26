"use client";

import { useEffect, useState } from "react";
import axios, {AxiosError} from "axios";
import Navbar from "@/app/components/Navbar";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    age: 0,
    gender: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setsaving] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/profile");

        setProfileData(response.data.profile);
      } catch (e) {
        const error = e as AxiosError;
        if(error.response?.status === 401){
          window.location.href = '/api/auth/signin'
        }else{
          console.log("Failed to Load the page")
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
//@ts-ignore
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: name === "age" ? Number(value) : value,
    });
  };

  const handleSaveChanges = async () => {
    setsaving(true);
    try {
      await axios.post("http://localhost:3000/api/profile", {
        profile: profileData,
      });
      setIsEditing(false);
    } catch (e) {
      console.error("Failed to update profile:", e);
    } finally{
      setsaving(false)
    }
  };

  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-r from-white to-slate-300 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Profile Page</h1>
        
        {loading ? (
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              ) : (
                <p className="text-lg font-semibold">{profileData.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <p className="text-lg font-semibold">{profileData.email}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              ) : (
                <p className="text-lg font-semibold">{profileData.phone}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Age:</label>
              {isEditing ? (
                <input
                  type="number"
                  name="age"
                  value={profileData.age}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              ) : (
                <p className="text-lg font-semibold">{profileData.age}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Gender:</label>
              {isEditing ? (
                <select
                  name="gender"
                  value={profileData.gender || ""}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <p className="text-lg font-semibold">{profileData.gender}</p>
              )}
            </div>

            <button
              onClick={isEditing ? handleSaveChanges : handleEditToggle}
              className={`mt-4 px-4 py-2 text-white rounded-md ${isEditing ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
              {saving ? "Saving" : ""}
            </button>

            {isEditing && (
              <button
                onClick={handleEditToggle}
                className="mt-2 ml-2 px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            )}
          </>
        )}
      </div>
    </div>
    </div>
  );
}

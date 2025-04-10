import React, { useState } from "react";

const UserRegistrationScreen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
    aadharCard: null,
    languagePreference: "english",
    termsAgreed: false,
    animalTypes: {
      cow: false,
      buffalo: false,
      goat: false,
    },
    numberOfAnimals: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    setFormData((prevData) => {
      if (type === "checkbox") {
        return {
          ...prevData,
          [name]: checked,
        };
      } else if (type === "file") {
        return {
          ...prevData,
          [name]: files[0],
        };
      } else if (name.startsWith("animalTypes.")) {
        const animalType = name.split(".")[1];
        return {
          ...prevData,
          animalTypes: {
            ...prevData.animalTypes,
            [animalType]: checked,
          },
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Implement your registration logic here
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 text-center">
            Register User
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              👤 Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700"
            >
              📱 Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Location Details */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              📍 Location Details
            </h3>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                rows="2"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700"
                >
                  District
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-700"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* ID Verification */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              🆔 ID Verification
            </h3>
            <div>
              <label
                htmlFor="aadharCard"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhar Card
              </label>
              <input
                type="file"
                id="aadharCard"
                name="aadharCard"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Language Preference */}
          <div>
            <label
              htmlFor="languagePreference"
              className="block text-sm font-medium text-gray-700"
            >
              🌐 Language Preference
            </label>
            <select
              id="languagePreference"
              name="languagePreference"
              value={formData.languagePreference}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="regional">Regional</option>
            </select>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              ➕ Additional Info
            </h3>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Animal Type
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="cow"
                  name="animalTypes.cow"
                  checked={formData.animalTypes.cow}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="cow" className="text-sm text-gray-700">
                  Cow
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="buffalo"
                  name="animalTypes.buffalo"
                  checked={formData.animalTypes.buffalo}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="buffalo" className="text-sm text-gray-700">
                  Buffalo
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="goat"
                  name="animalTypes.goat"
                  checked={formData.animalTypes.goat}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="goat" className="text-sm text-gray-700">
                  Goat
                </label>
              </div>
            </div>
            <div className="mt-2">
              <label
                htmlFor="numberOfAnimals"
                className="block text-sm font-medium text-gray-700"
              >
                Number of Animals
              </label>
              <input
                type="number"
                id="numberOfAnimals"
                name="numberOfAnimals"
                value={formData.numberOfAnimals}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="termsAgreed"
                name="termsAgreed"
                type="checkbox"
                checked={formData.termsAgreed}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="termsAgreed"
                className="font-medium text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationScreen;

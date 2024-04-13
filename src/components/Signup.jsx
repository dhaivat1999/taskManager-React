import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Reset errors
    setErrors({});
  
    // Validation
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
  
    if (Object.keys(newErrors).length === 0) {
      try {
        // Send form data to the API for signup
        const response = await axios.post("http://localhost:3000/auth", formData);
        console.log("Signup successful:", response);
  
        // Store JWT token in localStorage
        localStorage.setItem("token", response.data.token);
        navigate('/');
        console.log(response.data.token);
        // Redirect the user or perform any other action here
      } catch (error) {
        alert("Error in Signup, pleae try again");
        console.error("Signup failed:", error);
        // Handle signup failure
      }
    } else {
      // If there are errors, set them in the state
      setErrors(newErrors);
    }
  };
  

  return (
    <div className="min-h-screen bg-customGradient-900 flex justify-center items-center">
      <div className="max-w-md w-full bg-customGradient-700 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-customGradient-50 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label
              className="block text-customGradient-50 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            {errors.email && (
              <p className="text-red-800 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-customGradient-50 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                errors.firstName ? "border-red-500" : ""
              }`}
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
            {errors.firstName && (
              <p className="text-red-800 text-xs italic">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-customGradient-50 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                errors.lastName ? "border-red-500" : ""
              }`}
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
              {errors.lastName && (
              <p className="text-red-800 text-xs italic">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-customGradient-50 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
             {errors.password && (
              <p className="text-red-800 text-s italic">{errors.password}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-customGradient-50 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-800 text-s italic">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="flex items-center justify-between" >
            <button  type="submit"   className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign Up
            </button>
            <button
              className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() =>
                (window.location.href = "http://localhost:3000/auth/google")
              }
            >
              Sign up with Google
            </button>
          </div>
          <div className="flex items-center justify-center mb-4 pt-4">
            <button
              className="text-sm text-customGradient-200 hover:text-customGradient-300 focus:outline-none"
              type="button"
              onClick={() => (window.location.href = "/login")}
            >
              Existing User? Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

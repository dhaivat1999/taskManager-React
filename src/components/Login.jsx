import React, { useState } from "react";

function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validation
    const newErrors = {};
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
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length === 0) {
      // If no errors, submit the form or perform any other action
      console.log("Form submitted:", formData);
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
              <p className="text-red-500 text-xs italic">{errors.email}</p>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-customGradient-50 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-customGradient-50 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-customGradient-50 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

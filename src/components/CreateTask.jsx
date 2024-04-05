import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function CreateTask() {
  const navigate = useNavigate;
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    targetCompletionDate: "", // New field for target completion date
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to create task");
      }
        
      window.location.href = '/displayTask';
      
      
      setFormData({
        title: "",
        description: "",
        category: "",
        priority: "",
        targetCompletionDate: "", // Reset target completion date
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating task");
    }
    
  };
 
  // Function to get the current date in the format yyyy-mm-dd
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div className="min-h-screen bg-customGradient-900 flex justify-center items-center">
        <div className="max-w-md w-full bg-customGradient-700 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-customGradient-50 mb-6">
            Create New Task
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-customGradient-50 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title:
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-customGradient-50 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-customGradient-50 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <div className="mb-4">
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.category}
                  onChange={handleChange}
                  list="categoryOptions"
                />
                <datalist id="categoryOptions">
                  <option value="Personal" />
                  <option value="Work" />
                  <option value="Education" />
                  <option value="Chores" />
                  <option value="Reading" />
                </datalist>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-customGradient-50 text-sm font-bold mb-2"
                htmlFor="targetCompletionDate"
              >
                Target Completion Date
              </label>
              <input
                type="date"
                name="targetCompletionDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.targetCompletionDate}
                onChange={handleChange}
                min={getCurrentDate()} // Set min attribute to current date
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-customGradient-50 text-sm font-bold mb-2">
                Priority:
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

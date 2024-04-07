import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function UpdateTask({}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [status,setStatus] =useState(false); 
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    targetCompletionDate: "",
    category: "",
    completed:null // Added category field
  });

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

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tasks/${id}`);
        setTask(response.data);
        setFormData({
          title: response.data.title,
          description: response.data.description,
          priority: response.data.priority,
          targetCompletionDate: new Date(response.data.targetCompletionDate)
            .toISOString()
            .split("T")[0],
          category: response.data.category,
          completed: response.data.completed, // Set completed field
        });
        setStatus(response.data.completed)
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    if (id) {
      fetchTask();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    console.log("Updating Task");
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/tasks/${id}`, formData);
      navigate("/displayTask");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-customGradient-900 flex justify-center items-center px-20 py-20">
        <div className="max-w-screen w-full px-10 bg-customGradient-700 p-8 rounded-lg shadow-lg">
          {status ? <h2 className="text-3xl font-semibold text-customGradient-50 mb-6">
            Completed Task Details
          </h2> : <h2 className="text-3xl font-semibold text-customGradient-50 mb-6">
          Update Task Details
          </h2>
          }
         
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
                disabled // Disable if task is completed
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
                disabled={formData.completed == true}
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
                  disabled
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="targetCompletionDate"
                value={formData.targetCompletionDate}
                onChange={handleChange}
                disabled={formData.completed == true}
                min={getCurrentDate()}
              />
            </div>
            <div className="mb-4">
              <label className="block text-customGradient-50 text-sm font-bold mb-2">
                Priority:
              </label>
              <select
                name="priority"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.priority}
                onChange={handleChange}
                disabled={formData.completed == true}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-customGradient-50 text-sm font-bold mb-2"
                htmlFor="completed"
              >
                Status:
              </label>
              <select
                name="completed"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.completed}
                disabled={formData.completed == true}
                onChange={handleChange}
              >
                <option value={false}>Incomplete</option>
                <option value={true}>Completed</option>
              </select>
            </div>
            {status ? (
              <div className="flex items-center justify-between">
                {/* <button
                  onClick={() => navigate("/createTask")}
                  className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create New Task
                </button> */}
                <button
                  onClick={() => navigate("/displayTask")}
                  className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Show all Tasks
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update Task
                </button>
                <button
                  onClick={() => navigate("/displayTask")}
                  className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Show all Tasks
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

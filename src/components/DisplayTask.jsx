import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DisplayTask() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const handleTaskClick = (taskId) => {
    console.log(taskId);
    navigate(`/updateTask/${taskId}`); // Redirect to task page with task ID
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      <div className="bg-customGradient-900 py-24 sm:py-32 h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-customGradient-200 sm:text-4xl">
              Tasks
            </h2>
            <p className="mt-2 text-lg leading-8 text-customGradient-300">
              These are the tasks that are created by you
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tasks.map((task) => (
              <article
                key={task._id}
                onClick={() => handleTaskClick(task._id)}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-s">
                  <time
                    dateTime={task.creationDate}
                    className="text-customGradient-200"
                  >
                    {new Date(task.creationDate).toLocaleDateString()}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-customGradient-800 hover:bg-gray-100">
                    {task.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-2xl font-semibold leading-6 text-customGradient-200 group-hover:text-customGradient-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {task.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-xl leading-6 text-customGradient-300">
                    Description: {task.description}
                  </p>
                  <p className="mt-2 text-xl leading-6 text-customGradient-300">
                    Priority: {task.priority}
                  </p>
                  <p
                    className={`mt-2 text-xl leading-6 text-customGradient-300 ${
                      task.completed ? "text-green-600" : "text-red-800"
                    }`}
                  >
                    Status: {task.completed ? "Completed" : "Incomplete"}
                  </p>
                  <p className="mt-2 text-xl leading-6 text-customGradient-300">
                    Complete By :{" "}
                    {new Date(task.targetCompletionDate).toLocaleDateString()}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

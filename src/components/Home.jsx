import React, { useEffect, useState } from "react";
import { Link, Element } from "react-scroll";
import { useParams } from "react-router-dom";

export default function Home() {
  const params = new URLSearchParams(window.location.search);
  const [token, setToken] = useState("");
  useEffect(() => {
    const Token = params.get('token');
    console.log(Token);
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
      console.log(Token);
    }
    if(Token) {
      setToken(Token);
      localStorage.setItem("token", Token);
      console.log(Token);
    }
    const storedToken = localStorage.getItem("token");
  }, []);

  return (
    <>
      <div className="bg-customGradient-900 h-screen">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] "></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-customGradient-50 sm:text-6xl">
                Welcome to your personal task manger
              </h1>
              <p className="mt-6 text-lg leading-8 text-customGradient-100">
                Effortlessly Organize Your Day: Task Manager - Your Personal
                Productivity Partner
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {token ? (
                  <>
                    <a
                      href="/displayTask"
                      className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Show your Tasks
                    </a>
                    <a
                      href="/createTask"
                      className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Create new tasks
                    </a>
                  </>
                ) : (
                  <a
                  href="/signup"
                    className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login/Sign up To Get Started
                  </a>
                )}
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </>
  );
}

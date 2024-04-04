import React from "react";
import { Link, Element } from "react-scroll";
export default function Home() {
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
                <a href="/login" className="rounded-md bg-customGradient-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customGradient-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
               
                Login/Sign up To Get Started
                  
                </a>
               
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

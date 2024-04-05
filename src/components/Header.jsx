import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const onSuccess = (res) => {
    console.log("Login Success", res.profileObj);
  };

  const onFailure = (err) => {
    console.log("Login Failure", err);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header"
      className={`mt-0 fixed hidden sm:block top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8 sm:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 sm:flex-1"></div>
        <div className="flex lg:hidden sm:hidden"></div>
        <div className="lg:flex lg:gap-x-12 sm:flex sm:gap-x-12">
          <a
            href="/"
            className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
          >
            Home
          </a>

          <a
            href="/signup"
            className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
          >
            Signup
          </a>
          <a
            href="/login"
            className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
          >
            Login
          </a>
          <a
            href="/logout"
            className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
          >
            Logout
          </a>
          <a
            href="/createTask"
            className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
          >
            Create Task
          </a>
          <a
            href="/displayTask"
            className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
          >
            Display Tasks
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end sm:flex sm:flex-1 sm:justify-end"></div>
      </nav>
    </header>
  );
}

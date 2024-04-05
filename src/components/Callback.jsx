import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Upon component mount, handle authentication callback
    const params = new URLSearchParams(window.location.search);
    const userLoggedIn = params.get("loggedIn");
    console.log(userLoggedIn);
    // If user is logged in,    redirect to the Home component
    if (userLoggedIn === "true") {
      navigate("/");
    } else {
      // Handle authentication failure, redirect to error page or show error message
    }
  }, [navigate]);

  return (
    <div>
      {/* You can show a loading spinner or message while handling the callback */}
      <p>Redirecting...</p>
    </div>
  );
}

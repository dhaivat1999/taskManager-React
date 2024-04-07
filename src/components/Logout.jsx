import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const logout = async () => {
      try {
        // Send a request to logout endpoint to clear the session
        await axios.get("http://localhost:3000/auth/logout");
        // Clear JWT token from local storage
        localStorage.removeItem("token");
        // Redirect to the login page or any other desired route
        window.location.href = "/login";
      } catch (error) {
        console.error("Logout failed:", error);
        // Handle logout failure if needed
      }
    };

    logout(); // Automatically logout when the component mounts
  }, []);

  // Render your application UI here
  return (
    <div>
      {/* Your application UI components */}
    </div>
  );
}

export default App;

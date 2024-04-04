import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="fixed-bottom bg-customGradient-400 text-center">
      <p>&copy; {new Date().getFullYear()} By Dhaivat Desai</p>
    </footer>
  );
}

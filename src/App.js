// src/pages/HomePage.js
import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-center text-blue-700">Welcome to PySoftware</h1>
        <p className="mt-4 text-center text-lg text-gray-700">
          Building innovative software solutions for your business needs. Explore our services and see how we can help you grow.
        </p>

        {/* Call-to-Action Section */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-700 text-white p-6 text-center">
        <p>&copy; 2024 PySoftware. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default App;

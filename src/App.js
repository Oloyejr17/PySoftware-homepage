import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-700 leading-tight">
          Welcome to PySoftware
        </h1>
        <p className="mt-4 text-center text-base md:text-lg text-gray-700 max-w-screen-md mx-auto leading-relaxed">
          Building innovative software solutions for your business needs. Explore our services and see how we can help you grow.
        </p>

        {/* Call-to-Action Section */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="bg-blue-700 text-white py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-blue-800 transition duration-300 text-sm md:text-base"
          >
            Get Started
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white p-4 md:p-6 text-center">
        <p className="text-sm md:text-base">&copy; 2024 PySoftware. All rights reserved.</p>
        <div className="flex justify-center mt-2 md:mt-4 space-x-4 md:space-x-6">
          <a href="#" className="hover:text-yellow-400 text-sm md:text-base">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400 text-sm md:text-base">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default App;

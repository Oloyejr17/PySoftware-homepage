import React, { useState } from "react";

const Navbar = () => {
  // Hardcoded menu items
  const menuItems = [
    { id: "1", menu_item: "Home", href: "home/" },
    { id: "2", menu_item: "Student", href: "students/" },
    { id: "3", menu_item: "Login", href: "login/" },
    { id: "4", menu_item: "Tutor", href: "tutor/" },
    { id: "5", menu_item: "Pricing", href: "price_list/" },
    { id: "6", menu_item: "Sign Up", href: "signup/" },
    { id: "7", menu_item: "Contact", href: "contact/" },
    { id: "8", menu_item: "Help", href: "help/" },
    { id: "9", menu_item: "About", href: "about/" },
    { id: "10", menu_item: "Address", href: "#", isAddress: true }
  ];

  // Hardcoded address data (10 customers for this example)
  const allAddresses = [
    { id: 1, first_name: "John", last_name: "Doe", street: "123 Elm St", postcode: "B76345", state: "London", country: "UK", lat: 38.8951, lon: -77.0364 },
    { id: 2, first_name: "Jane", last_name: "Smith", street: "456 Oak Rd", postcode: "B76346", state: "London", country: "UK", lat: 38.8952, lon: -77.0365 },
    { id: 3, first_name: "Alice", last_name: "Johnson", street: "789 Pine Ave", postcode: "B76347", state: "London", country: "UK", lat: 38.8953, lon: -77.0366 },
    { id: 4, first_name: "Bob", last_name: "Brown", street: "101 Maple Dr", postcode: "B76348", state: "London", country: "UK", lat: 38.8954, lon: -77.0367 },
    { id: 5, first_name: "Charlie", last_name: "Davis", street: "202 Birch Ln", postcode: "B76349", state: "London", country: "UK", lat: 38.8955, lon: -77.0368 },
    { id: 6, first_name: "David", last_name: "Wilson", street: "303 Cedar Blvd", postcode: "B76350", state: "London", country: "UK", lat: 38.8956, lon: -77.0369 },
    { id: 7, first_name: "Eva", last_name: "Martinez", street: "404 Cherry Ct", postcode: "B76351", state: "London", country: "UK", lat: 38.8957, lon: -77.0370 },
    { id: 8, first_name: "Frank", last_name: "Garcia", street: "505 Walnut Way", postcode: "B76352", state: "London", country: "UK", lat: 38.8958, lon: -77.0371 },
    { id: 9, first_name: "Grace", last_name: "Lopez", street: "606 Ash St", postcode: "B76353", state: "London", country: "UK", lat: 38.8959, lon: -77.0372 },
    { id: 10, first_name: "Hank", last_name: "Martinez", street: "707 Pine Ln", postcode: "B76354", state: "London", country: "UK", lat: 38.8960, lon: -77.0373 },
    { id: 11, first_name: "Ivy", last_name: "Thomas", street: "808 Oak Blvd", postcode: "B76355", state: "London", country: "UK", lat: 38.8961, lon: -77.0374 },
    // You can add more addresses here if needed
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [addressesPerPage] = useState(10); // Display 10 addresses per page
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  // Calculate the index range of addresses to display based on the current page
  const indexOfLastAddress = currentPage * addressesPerPage;
  const indexOfFirstAddress = indexOfLastAddress - addressesPerPage;

  // Filter addresses based on search query
  const filteredAddresses = allAddresses.filter(address => {
    return (
      address.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      address.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      address.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
      address.postcode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      address.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      address.country.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Slice the filtered addresses for the current page
  const currentAddresses = filteredAddresses.slice(indexOfFirstAddress, indexOfLastAddress);

  const totalPages = Math.ceil(filteredAddresses.length / addressesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAddresses, setShowAddresses] = useState(false); // State to control address visibility

  const toggleAddress = () => {
    setShowAddresses(!showAddresses); // Toggle address display
  };

  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-bold">PySoftware</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:text-yellow-400 ${item.isAddress ? "cursor-pointer" : ""}`}
              onClick={item.isAddress ? toggleAddress : null} // Handle click on Address item
            >
              <a href={item.href} className="capitalize">
                {item.menu_item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col space-y-2 p-4 bg-blue-800">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:text-yellow-400 ${item.isAddress ? "cursor-pointer" : ""}`}
              onClick={item.isAddress ? toggleAddress : null} // Handle click on Address item
            >
              <a href={item.href} className="capitalize">
                {item.menu_item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Display Address List if "Address" menu item is clicked */}
      {showAddresses && (
        <div className="bg-blue-400 text-white p-4 mt-4"> {/* Changed to lighter blue */}
          <h3 className="text-xl font-bold">Address List:</h3>

          {/* Search bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Addresses"
              className="p-2 border border-gray-300 rounded text-black" // Set text color to black
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            />
          </div>

          {/* Display No Results message if no filtered addresses */}
          {filteredAddresses.length === 0 ? (
            <p>No results found</p>
          ) : (
            <ul className="space-y-2">
              {currentAddresses.map((address) => (
                <li key={address.id} className="border-b py-2">
                  <p><strong>Name:</strong> {address.first_name} {address.last_name}</p>
                  <p><strong>Street:</strong> {address.street}</p>
                  <p><strong>Postcode:</strong> {address.postcode}</p>
                  <p><strong>State:</strong> {address.state}</p>
                  <p><strong>Country:</strong> {address.country}</p>
                  <p><strong>Coordinates:</strong> Lat: {address.lat}, Lon: {address.lon}</p>
                </li>
              ))}
            </ul>
          )}
          
          {/* Pagination Controls */}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handlePrevious}
              className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

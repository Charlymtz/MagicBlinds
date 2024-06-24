import React, { useState } from 'react';

function Header() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginPopup(true);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowRegisterPopup(true);
  };

  const closePopup = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    closePopup();
  };

  return (
    <>
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="block text-white" href="#">
            <span className="sr-only">Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-dice-6"
              viewBox="0 0 16 16"
            >
              <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z" />
              <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0git  0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </a>
          <div className="flex flex-1 items-center justify-end">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <a className="hover:text-gray-300 transition" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-300 transition" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-300 transition" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-5">
              <div className="hidden sm:flex sm:gap-5">
                <a
                  className="block rounded-lg border border-transparent bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-2 text-base font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600"
                  href="#"
                  onClick={handleLoginClick}
                >
                  Login
                </a>
                <a
                  className="block rounded-lg border border-teal-500 bg-white px-6 py-2 text-base font-semibold text-teal-600 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
                  href="#"
                  onClick={handleRegisterClick}
                >
                  Register
                </a>
              </div>
              <button
                className="block md:hidden rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-700"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {showLoginPopup && (
        <Popup title="Login" onClose={closePopup} onSubmit={handleFormSubmit}>
          <label className="block mb-2">
            Email:
            <input type="email" className="border p-2 w-full" required />
          </label>
          <label className="block mb-4">
            Password:
            <input type="password" className="border p-2 w-full" required />
          </label>
        </Popup>
      )}

      {showRegisterPopup && (
        <Popup title="Register" onClose={closePopup} onSubmit={handleFormSubmit}>
          <label className="block mb-2">
            Email:
            <input type="email" className="border p-2 w-full" required />
          </label>
          <label className="block mb-2">
            Password:
            <input type="password" className="border p-2 w-full" required />
          </label>
          <label className="block mb-4">
            Confirm Password:
            <input type="password" className="border p-2 w-full" required />
          </label>
        </Popup>
      )}
    </>
  );
}

function Popup({ title, onClose, onSubmit, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto relative" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <span className="sr-only">Close</span>
          X
        </button>
        <h2 id="dialog-title" className="text-2xl mb-4">{title}</h2>
        <form onSubmit={onSubmit}>
          {children}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;

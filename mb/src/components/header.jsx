import React, { useState, useRef, useEffect } from 'react';
import Logo from '../assets/Logo.png';

function Header() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const loginPopupRef = useRef(null);
  const registerPopupRef = useRef(null);

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterPopup(true);
  };

  const closePopup = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(false);
  };

  const handleClickOutside = (event) => {
    if (loginPopupRef.current && !loginPopupRef.current.contains(event.target)) {
      setShowLoginPopup(false);
    }
    if (registerPopupRef.current && !registerPopupRef.current.contains(event.target)) {
      setShowRegisterPopup(false);
    }
  };

  useEffect(() => {
    if (showLoginPopup || showRegisterPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLoginPopup, showRegisterPopup]);

  return (
    <>
      <header className="bg-neutral-900 text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="block text-white" href="#">
            <span className="sr-only">Home</span>
              <img src={Logo} alt="Logo" width="75" height="75" className="bi bi-dice-6" />
              {/* EL logo sera blanco si es que ell joak lo manda!!! */}
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
                  <a className="hover:text-gray-300 transition pr-10" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-5">
              <div className="hidden sm:flex sm:gap-5">
                <a
                  className="block rounded-lg border border-transparent bg-gradient-to-r from-neutral-500 to-neutral-500 px-6 py-2 text-base font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-600"
                  href="#"
                  onClick={handleLoginClick}
                >
                  Login
                </a>
                <a
                  className="block rounded-lg border border-transparent bg-gradient-to-r from-neutral-500 to-neutral-500 px-6 py-2 text-base font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-600"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={loginPopupRef} className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            <h2 className="text-2xl mb-4">Login</h2>
            <form>
              <label className="block mb-2">
                Email:
                <input type="email" className="border p-2 w-full" />
              </label>
              <label className="block mb-4">
                Password:
                <input type="password" className="border p-2 w-full" />
              </label>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {showRegisterPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={registerPopupRef} className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            <h2 className="text-2xl mb-4">Register</h2>
            <form>
              <label className="block mb-2">
                Email:
                <input type="email" className="border p-2 w-full" />
              </label>
              <label className="block mb-2">
                Password:
                <input type="password" className="border p-2 w-full" />
              </label>
              <label className="block mb-4">
                Confirm Password:
                <input type="password" className="border p-2 w-full" />
              </label>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function Header() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
      closePopup();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: email,
        uid: userCredential.user.uid
      });
      alert('Registration successful');
      closePopup();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <link className="block text-white" href="#">
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
              <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </link>
          <div className="flex flex-1 items-center justify-end">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <link className="hover:text-gray-300 transition" href="#">
                    About
                  </link>
                </li>
                <li>
                  <link className="hover:text-gray-300 transition" href="#">
                    Products
                  </link>
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
                <link
                  className="block rounded-lg border border-transparent bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-2 text-base font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600"
                  href="#"
                  onClick={handleLoginClick}
                >
                  Login
                </link>
                <link
                  className="block rounded-lg border border-teal-500 bg-white px-6 py-2 text-base font-semibold text-teal-600 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
                  href="#"
                  onClick={handleRegisterClick}
                >
                  Register
                </link>
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

      <div className="relative">
        <img
          src="/images/your-banner-image.jpg"
          alt="Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Welcome to Our Website</h1>
        </div>
      </div>

      {showLoginPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            <h2 className="text-2xl mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <label className="block mb-2">
                Email:
                <input
                  type="email"
                  className="border p-2 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="block mb-4">
                Password:
                <input
                  type="password"
                  className="border p-2 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {showRegisterPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            <h2 className="text-2xl mb-4">Register</h2>
            <form onSubmit={handleRegister}>
              <label className="block mb-2">
                Email:
                <input
                  type="email"
                  className="border p-2 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="block mb-2">
                Password:
                <input
                  type="password"
                  className="border p-2 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label className="block mb-4">
                Confirm Password:
                <input
                  type="password"
                  className="border p-2 w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
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

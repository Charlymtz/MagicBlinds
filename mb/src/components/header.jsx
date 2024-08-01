import React, { useState, useRef, useEffect } from 'react';
import { auth, db } from './firebase'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

function Header() {
  // Definición de estados para controlar la visibilidad de los popups y los valores de los inputs
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const popupRef = useRef(null);

  // Evento que se dispara al hacer clic en el botón de Login
  const handleLoginClick = () => {
    setShowLoginPopup(true); // Muestra el popup de login
  };

  // Evento que se dispara al hacer clic en el botón de Register
  const handleRegisterClick = () => {
    setShowRegisterPopup(true); // Muestra el popup de registro
  };

  // Evento que cierra los popups
  const closePopup = () => {
    setShowLoginPopup(false); // Oculta el popup de login
    setShowRegisterPopup(false); // Oculta el popup de registro
  };

  // Evento que se dispara al enviar el formulario de login
  const handleLogin = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful'); // Muestra una alerta de éxito
      closePopup(); // Cierra el popup
    } catch (error) {
      console.error('Error logging in:', error);
      alert(error.message); // Muestra una alerta con el mensaje de error
    }
  };

  // Evento que se dispara al enviar el formulario de registro
  const handleRegister = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (password !== confirmPassword) {
      alert("Passwords do not match"); // Muestra una alerta si las contraseñas no coinciden
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });
      alert('Registration successful'); // Muestra una alerta de éxito
      closePopup(); // Cierra el popup
    } catch (error) {
      console.error('Error registering:', error);
      alert(error.message); // Muestra una alerta con el mensaje de error
    }
  };

  // Evento que se dispara al hacer clic fuera del popup para cerrarlo
  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      closePopup(); // Cierra el popup si el clic no fue dentro del popup
    }
  };

  // useEffect para añadir y remover el event listener al montar y desmontar el componente
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick); // Añade el event listener al montar
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick); // Remueve el event listener al desmontar
    };
  }, []);

  return (
    <>
      <header className="bg-neutral-900 text-white">
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
              <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
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
                  <a className="hover:text-gray-300 transition pr-10" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-5">
              <div className="hidden sm:flex sm:gap-5">
                <button
                  className="block rounded-lg border border-transparent bg-gradient-to-r from-neutral-500 to-neutral-500 px-6 py-2 text-base font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-600"
                  onClick={handleLoginClick} // Evento para mostrar el popup de login
                >
                  Login
                </button>
                <button
                  className="block rounded-lg border border-transparent bg-gradient-to-r from-neutral-500 to-neutral-500 px-6 py-2 text-base font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-600"
                  onClick={handleRegisterClick} // Evento para mostrar el popup de registro
                >
                  Register
                </button>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
          <div ref={popupRef} className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto relative">
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
                  onChange={(e) => setEmail(e.target.value)} // Evento para actualizar el estado del email
                  required
                />
              </label>
              <label className="block mb-4">
                Password:
                <input
                  type="password"
                  className="border p-2 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Evento para actualizar el estado de la contraseña
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {showRegisterPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
          <div ref={popupRef} className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto relative">
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
                  onChange={(e) => setEmail(e.target.value)} // Evento para actualizar el estado del email
                  required
                />
              </label>
              <label className="block mb-2">
                Password:
                <input
                  type="password"
                  className="border p-2 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Evento para actualizar el estado de la contraseña
                  required
                />
              </label>
              <label className="block mb-4">
                Confirm Password:
                <input
                  type="password"
                  className="border p-2 w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} // Evento para actualizar el estado de la confirmación de contraseña
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

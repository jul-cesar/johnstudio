import { Menu, X } from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#060606] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl">
              <img
                src="jsticon.svg"
                alt="Logo"
                width={128}
                height={40}
                className="w-32 transition-opacity duration-300 ease-in-out"
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center md:mr-20">
            <div className="flex items-center space-x-4">
              <Link
                to="/nosotros"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Sobre nosotros
              </Link>
              <a
                href="#pricing"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Servicios
              </a>
              <a
                href="#team"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Equipo
              </a>
              <Link
                to="https://linktr.ee/johns_rivero"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Contacto
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/nosotros"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/nosotros"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              About
            </Link>
            <a
              href="#pricing"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Servicios
            </a>
            <Link
              to="https://linktr.ee/johns_rivero"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

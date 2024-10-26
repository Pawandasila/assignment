"use client";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50 top-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Image src="/logo.svg" alt="logo" width={130} height={50} />
          </div>

          <div className="md:flex md:items-center md:gap-8">
            <form className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 rounded-lg bg-gray-800 py-2.5 pl-10 pr-4 text-sm text-gray-200 transition-colors focus:border-primary focus:outline-none focus:ring focus:ring-primary/20"
              />
              <span className="absolute start-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </form>

            {/* Navigation */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm">
                <li>
                  <a
                    className="text-gray-300 transition hover:text-rose-500"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-rose-500"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-rose-500"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-rose-500"
                    href="#"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-rose-500"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            {/* Profile Dropdown */}
            <div className="hidden md:relative md:block">
              <button
                type="button"
                className="overflow-hidden rounded-full border-2 border-gray-700 hover:border-rose-500 transition-colors"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Toggle profile menu</span>
                <img
                  src="https://images.pexels.com/photos/9072375/pexels-photo-9072375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="User profile"
                  className="size-10 object-cover"
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute end-0 z-10 mt-2 w-56 rounded-xl border border-gray-800 bg-gray-900 shadow-lg"
                  role="menu"
                >
                  <div className="p-2">
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-rose-500"
                      role="menuitem"
                    >
                      My profile
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-rose-500"
                      role="menuitem"
                    >
                      Billing summary
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-rose-500"
                      role="menuitem"
                    >
                      Team settings
                    </a>
                  </div>

                  <div className="border-t border-gray-800 p-2">
                    <form method="POST" action="#">
                      <button
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-400 hover:bg-gray-800 hover:text-primary"
                        role="menuitem"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                          />
                        </svg>
                        Logout
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button className="rounded-lg bg-gray-800 p-2.5 text-gray-300 transition hover:bg-gray-700 hover:text-primary">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
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
      </div>
    </header>
  );
};

export default Header;

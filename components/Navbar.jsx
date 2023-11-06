import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-transparent absolute top-0 w-full z-50">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-transparent">
        <a className="text-3xl font-bold leading-none" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
            className="fill-black"
          >
            <path d="M 25.494141 4.9980469 C 24.185141 4.9980469 22.89 5.3478594 21.75 6.0058594 C 20.015 7.0078594 18.773859 8.6235937 18.255859 10.558594 C 17.736859 12.493594 18.002047 14.514281 18.998047 16.238281 L 33.005859 41.25 C 34.341859 43.563 36.831859 45.001953 39.505859 45.001953 C 40.814859 45.001953 42.11 44.652141 43.25 43.994141 C 44.985 42.992141 46.226141 41.376406 46.744141 39.441406 C 47.263141 37.506406 46.997953 35.485719 46.001953 33.761719 L 31.994141 8.75 C 30.658141 6.437 28.168141 4.9980469 25.494141 4.9980469 z M 16.070312 13.640625 L 7.0703125 28.640625 C 8.1403125 28.230625 9.29 28 10.5 28 C 15.35 28 19.369688 31.659375 19.929688 36.359375 L 24.089844 29.419922 L 17.269531 17.240234 C 16.619531 16.120234 16.220312 14.900625 16.070312 13.640625 z M 10.5 30 A 7.5 7.5 0 0 0 10.5 45 A 7.5 7.5 0 0 0 10.5 30 z"></path>
          </svg>
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-gray-600 p-3"
            onClick={toggleMenu}
          >
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:gap-14 lg:space-x-6 ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/"
              className={`text-md ${
                router.pathname === "/" ? "font-semibold" : "text-black"
              } hover:text-gray-500`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/categories"
              className={`text-md ${
                router.pathname === "/categories"
                  ? "font-semibold"
                  : "text-black"
              } hover:text-gray-500`}
            >
              Categories
            </Link>
          </li>

          <li>
            <Link
              href="/latest"
              className={`text-md ${
                router.pathname === "/latest" ? "font-semibold" : "text-black"
              } hover:text-gray-500`}
            >
              Latest&nbsp;blogs
            </Link>
          </li>

          <li>
            <Link
              href="/about-us"
              className={`text-md ${
                router.pathname === "/about-us" ? "font-semibold" : "text-black"
              } hover:text-gray-500`}
            >
              About&nbsp;us
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`text-md ${
                router.pathname === "/contact" ? "font-semibold" : "text-black"
              } hover:text-gray-500`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign In
        </a>
        <a
          className="hidden lg:inline-block py-2 px-6 bg-gray-400 hover:bg-gray-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign&nbsp;up
        </a>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "" : "hidden"}`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-slate-800 opacity-80 overflow-y-auto shadow-xl">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
                className="fill-gray-800"
              >
                <path d="M 25.494141 4.9980469 C 24.185141 4.9980469 22.89 5.3478594 21.75 6.0058594 C 20.015 7.0078594 18.773859 8.6235937 18.255859 10.558594 C 17.736859 12.493594 18.002047 14.514281 18.998047 16.238281 L 33.005859 41.25 C 34.341859 43.563 36.831859 45.001953 39.505859 45.001953 C 40.814859 45.001953 42.11 44.652141 43.25 43.994141 C 44.985 42.992141 46.226141 41.376406 46.744141 39.441406 C 47.263141 37.506406 46.997953 35.485719 46.001953 33.761719 L 31.994141 8.75 C 30.658141 6.437 28.168141 4.9980469 25.494141 4.9980469 z M 16.070312 13.640625 L 7.0703125 28.640625 C 8.1403125 28.230625 9.29 28 10.5 28 C 15.35 28 19.369688 31.659375 19.929688 36.359375 L 24.089844 29.419922 L 17.269531 17.240234 C 16.619531 16.120234 16.220312 14.900625 16.070312 13.640625 z M 10.5 30 A 7.5 7.5 0 0 0 10.5 45 A 7.5 7.5 0 0 0 10.5 30 z"></path>
              </svg>
            </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className={`block p-4 ${
                    router.pathname === "/" ? "font-bold text-2xl" : "text-md"
                  } text-white font-semibold hover:bg-blue-50 hover:text-blue-600 rounded`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`block p-4 ${
                    router.pathname === "/categories"
                      ? "font-bold text-2xl"
                      : "text-md"
                  } text-white font-semibold hover:bg-blue-50 hover:text-blue-600 rounded`}
                  href="/categories"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  className={`block p-4 ${
                    router.pathname === "/latest"
                      ? "font-bold text-2xl"
                      : "text-md"
                  } text-white font-semibold hover:bg-blue-50 hover:text-blue-600 rounded`}
                  href="/latest"
                >
                  Latest blogs
                </Link>
              </li>
              <li>
                <Link
                  className={`block p-4 ${
                    router.pathname === "/about-us"
                      ? "font-bold text-2xl"
                      : "text-md"
                  } text-white font-semibold hover:bg-blue-50 hover:text-blue-600 rounded`}
                  href="/about-us"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className={`block p-4 ${
                    router.pathname === "/contact"
                      ? "font-bold text-2xl"
                      : "text-md"
                  } text-white font-semibold hover:bg-blue-50 hover:text-blue-600 rounded`}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign in
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-none text-xs text-center text-white font-semibold bg-gray-400 hover:bg-gray-700  rounded-xl"
                href="#"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

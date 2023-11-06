import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="absolute top w-full flex justify-end bg-gradient-to-t from-black via-transparent overflow-hidden to-black h-[100vh]">
      {/* :HERO IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1562832625-795d57deb5ef?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute w-full h-full object-cover object-left sm:object-center opacity-70"
      />

      {/* :HERO MAIN CONTAINER */}
      <div className="relative py-28 xl:py-40 w-full md:w-2/3 lg:w-1/2 h-screen flex flex-col justify-center">
        {/* ::Hero title & text */}
        <div className="mx-5 md:mx-0 p-8 rounded-xl md:rounded-r-none bg-gray-800 bg-opacity-50 text-white shadow-2xl">
          <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">
            Blogging, <br />
            <span className="text-yellow-400 text-opacity-80">
              give your soul an
            </span>
            <br />
            escape !
          </h1>
          <p className="mt-3 text-gray-100 font-mono">
            Crafting ideas into words that inspire, educate, and spark
            conversations.
            <br />
            Blogs are windows to the soul, lighthouses of wisdom, and Link
            journey of self-discovery in the digital age...!
          </p>
        </div>
        {/* ::Social media */}
      </div>

      {/* :BOTTOM OPTIONS */}
      <div className="absolute left-1/2 bottom-0 w-full md:w-2/3 flex justify-around items-end transform -translate-x-1/2">
        {/* ::Our Story */}
        <Link
          href="latest"
          className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14"
        >
          Our Blogs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </Link>
        {/* ::Our Shop */}
        <Link
          href="categories"
          className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14"
        >
          Our Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </Link>
        {/* ::Our Contact */}
        <Link
          href="contact"
          className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14"
        >
          Our Contacts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

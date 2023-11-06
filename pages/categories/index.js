import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="relative">
      <div className="absolute top w-full flex justify-end bg-gradient-to-t from-black via-transparent overflow-hidden to-black h-[100vh]">
        <img
          src="https://images.unsplash.com/photo-1562832625-795d57deb5ef?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute w-full h-full object-cover inset-0 bg-black opacity-80"
        />
      </div>
      <Navbar />
      <div className="absolute top-[7rem] right-[12rem] p-10 bg-cover">
        <div className="container mx-auto py-2 lg:pt-15">
          <div className="flex justify-center">
            <div class="flex w-2/5 flex-wrap">
              <Link href="#" legacyBehavior className="md:m-1">
                <div className="relative flex items-end justify-start w-1/2 text-left bg-center bg-cover h-96 dark:bg-gray-500 hover:opacity-75 cursor-pointer custom-hover-effect">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mb-5 p-3 bg-black bg-opacity-40 text-white">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                    >
                      Food
                    </a>
                    <div className="flex flex-col justify-start text-center dark:text-gray-100">
                      <span className="text-3xl font-semibold leading-none tracking-wide">
                        14
                      </span>
                      <span className="leading-none uppercase">August</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="#" legacyBehavior className="md:m-1">
                <div className="relative flex items-end justify-start w-1/2 text-left bg-center bg-cover h-96 dark:bg-gray-500 hover:opacity-75 cursor-pointer custom-hover-effect">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src=" https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mb-5 p-3 bg-black bg-opacity-40 text-white">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                    >
                      Food
                    </a>
                    <div className="flex flex-col justify-start text-center dark:text-gray-100">
                      <span className="text-3xl font-semibold leading-none tracking-wide">
                        14
                      </span>
                      <span className="leading-none uppercase">August</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="#" legacyBehavior className="md:m-1">
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 hover:opacity-75 cursor-pointer custom-hover-effect">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mb-5 p-3 bg-black bg-opacity-40 text-white">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                    >
                      Food
                    </a>
                    <div className="flex flex-col justify-start text-center dark:text-gray-100">
                      <span className="text-3xl font-semibold leading-none tracking-wide">
                        14
                      </span>
                      <span className="leading-none uppercase">August</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div class="flex w-2/5 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
            </div>
            <div className="flex w-1/5 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

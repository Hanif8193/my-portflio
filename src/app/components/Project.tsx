import Link from "next/link";
import React from "react";
import Image from "next/image";
import SS from "../../../public/ss1.png";
import SS2 from "../../../public/ss2.png";
import SS3 from "../../../public/ss3.png";
import S from "../../../public/s.png";
function Project() {
  return (
    <div id="Project" className="bg-blue-50 bg-cover bg-center ">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={SS}
                  width={100}
                  height={100}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    CSR-SSR-SSG-ISR
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Rendering
                  </h1>
                  <p className="leading-relaxed ">
                    In this project I am showing the type of renderning.
                  </p>
                  <Link href={"https://presentation-zeta-bay.vercel.app/"}>
                    <p className="leading-relaxed py-2 hover:underline  hover:text-green-500 ">
                      View Project:
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  src={SS2}
                  width={100}
                  height={100}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Grid
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Templet Grid
                  </h1>
                  <p className="leading-relaxed">
                    In this project the templet style of grid
                  </p>
                  <Link href={"https://grid-templet.vercel.app/"}>
                    <p className="leading-relaxed hover:text-green-500 hover:underline py-2 ">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={SS3}
                  width={100}
                  height={100}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Class Assignment
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    First Assigmen of Figma
                  </h1>
                  <p className="leading-relaxed">
                    The First Project which is build with the help of Figma,
                  </p>
                  <Link href={"https://class-assig2.vercel.app/"}>
                    <p className="leading-relaxed hover:text-green-500 hover:underline py-2 ">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={S}
                  width={100}
                  height={100}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    First Web
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Group Routinh
                  </h1>
                  <p className="leading-relaxed">
                    This is my first web in which i am showing routing & group
                    Routing.
                  </p>
                  <Link href={"https://web-cv--dusky.vercel.app/"}>
                    <p className="leading-relaxed  hover:text-green-500 hover:underline py-2">
                      View Project:
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;

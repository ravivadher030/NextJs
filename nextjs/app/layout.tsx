'use client';
import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggle,setToggle]=useState(false)
  const toggleNavbr = ()=> {
    setToggle(!toggle)
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="dark:bg-slate-800 flex justify-center p-4 ">
            <div className="container">
              <div className="flex justify-between items-center flex-wrap">
                <div className="logo_img w-100 cursor-pointer">
                  <Image
                    src="/ravi.jpg"
                    alt="Profile picture"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <button
                  type="button"
                  className="navbar-menu text-lg md:hidden"
                  data-collapse-toggle="navbar-cta"
                  aria-controls="navbar-cta"
                  aria-expanded="false"
                  onClick={toggleNavbr}
                >
                  <span className="sr-only">open menu</span>
                  <HiMiniBars3BottomLeft
                    className="cursor-pointer"
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`${
                    toggle ? "flex" : "hidden"
                  } items-center md:flex md:order-1 w-full md:w-auto`}
                  id="navbar-cta"
                >
                  <ul className="flex flex-col w-full space-y-5 md:space-y-0 justify-center p-4 items-center md:flex-row font-medium md:space-x-8">
                    <li className="m-0">
                      <a href="#" className="text-blue-800">
                        Home
                      </a>
                    </li>
                    <li className="m-0">
                      <a href="#" className="text-blue-800">
                        Experience
                      </a>
                    </li>
                    <li className="m-0">
                      <a href="#" className="text-blue-800">
                        Languages
                      </a>
                    </li>
                    <li className="m-0">
                      <a href="#" className="text-blue-800">
                        Hobbies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

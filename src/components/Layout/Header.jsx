import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { IoLocation } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Header() {
  //   1. Use a state variable to track the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    console.log("menu")
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // 2. Define a function to update the state with the current scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // 3. Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // 4. Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  // 5. Use the state variable in your logic
  useEffect(() => {
    const headerTop = document.getElementById("headerTop");
    const mainHeader = document.getElementById("mainHeader");

    if (scrollPosition > 5) {
      headerTop.classList.add("hidden");
      mainHeader.classList.add("bg-neutral-800", "text-blue-400", "py-5");
    } else {
      // document.getElementById('my-header').classList.remove('scrolled');
      headerTop.classList.remove("hidden");
      mainHeader.classList.remove("bg-neutral-800", "text-blue-400", "py-5");
    }
  }, [scrollPosition]); // This effect runs whenever scrollPosition changes

  return (
    <header className="w-lvw relative z-10">
      <div className="fixed w-full">
        {/* header top */}
        <div id="headerTop" className="w-full h-fit text-white">
          <div className="hidden md:flex justify-between bg-transparent gap-4 border-b-1  px-1 py-3 border-amber-200">
            <div className="w-2/4 flex justify-between items-center">
              <span>
                <IoLocation className="inline text-center" />
                Nipania, Schema 134, Indore
              </span>
              <span>
                <IoTimeOutline className="inline text-center" /> Daily : 8.00 am
                to 10.00 pm
              </span>
            </div>
            <div className=" flex justify-between pr-3 gap-10 items-center">
              <span>
                <IoCallOutline className="inline text-center" />
                +91 9485768420{" "}
              </span>
              <span>
                <MdOutlineMailOutline className="inline text-center" />{" "}
                alphachef@email.com
              </span>
            </div>
          </div>
        </div>
        {/* main header */}
        <div
          id="mainHeader"
          className="px-10 flex justify-between py-10 w-full h-fit transition-all duration-500"
        >
          <div className="w-1/2 md:w-1/5 text-xl md:3xl font-bold text-orange-300">
            Alpha-Chef
          </div>
          <div className="text-3xl text-white md:hidden" onClick={handleMenu}>
            {!isOpen ? (
              <GiHamburgerMenu />
            ) : (
              <IoMdClose />
            )}
          </div>

          <div className="hidden md:w-4/5 md:block">
            <nav className="">
              <ul className="hidden md:flex justify-evenly font-semibold text-white uppercase *:hover:text-orange-300 ">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/">Menus</NavLink>
                </li>
                <li>
                  <NavLink to="/">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Our Chef</NavLink>
                </li>
                <li>
                  <NavLink to="/">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Pages</NavLink>
                </li>
                <li>
                  <NavLink to="/">Find a Table</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          
            <>
              <div
                id="sidebar"
                className={`fixed top-0 left-0 z-10 h-full w-80 bg-stone-800 text-white p-6 transition-transform duration-700 ease-in-out ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
              >
                <div
                  className=" flex justify-end text-white md:hidden"
                  onClick={handleMenu}
                >
                  {isOpen && <IoMdClose className="border text-2xl rounded-2xl" />}
                </div>
                
                <div className="text-center mt-2 mb-5 text-3xl ">
                Alpha-Chef

                </div>

                <nav className="h-full ">
                  <ul className="flex flex-col justify-evenly gap-2 font-semibold text-white uppercase border-b-1 border-amber-100 *:hover:text-orange-300 *:border-t-1 *:border-amber-100 *:py-2">
                    <li className="">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Menus</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">About us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Our Chef</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Contact us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Pages</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Find a Table</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </>
          
        </div>
      </div>
    </header>
  );
}

export default Header;

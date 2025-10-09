import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router"
import { IoLocation } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

function Header() {
//   1. Use a state variable to track the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // 2. Define a function to update the state with the current scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // 3. Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // 4. Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  // 5. Use the state variable in your logic
  useEffect(() => {
    const headerTop = document.getElementById("headerTop");
    const mainHeader = document.getElementById("mainHeader");

    if (scrollPosition > 5) {
      headerTop.classList.add("hidden");
      mainHeader.classList.add("bg-green-500","text-blue-400","py-5")

    } else {
      // document.getElementById('my-header').classList.remove('scrolled');
      headerTop.classList.remove("hidden")
      mainHeader.classList.remove("bg-green-500","text-blue-400","py-5")
    }
  }, [scrollPosition]); // This effect runs whenever scrollPosition changes

  return (
    <header className='w-full '>
        <div>
            {/* header top */}
            <div id='headerTop' className='mx-3 px-1 py-3 border-b-1 border-amber-200 flex justify-between gap-4' >
                <div className='w-2/4 flex justify-between items-center'>
                    <span><IoLocation className='inline text-center'/>Nipania, Schema 134, Indore</span>
                    <span><IoTimeOutline className='inline text-center'/> Daily : 8.00 am to 10.00 pm</span>
                </div>
                <div className=' flex justify-between pr-3 gap-10 items-center'>
                    <span><IoCallOutline className='inline text-center'/>+91 9485768420 </span>
                    <span><MdOutlineMailOutline className='inline text-center'/> alphachef@email.com</span>
                </div>
            </div>
            {/* main header */}
            <div id='mainHeader' className='p-6 flex justify-between py-10'>
                <div className='w-1/4 text-3xl font-bold text-orange-300'>
                    Alpha-Chef
                </div>
                <div className='w-3/4'>
                <nav className=''>
                    <ul className='flex justify-evenly font-semibold uppercase *:hover:text-orange-300 *:transition-all'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Menus</NavLink></li>
                        <li><NavLink to="/">About us</NavLink></li>
                        <li><NavLink to="/">Our Chef</NavLink></li>
                        <li><NavLink to="/">Contact us</NavLink></li>
                        <li><NavLink to="/">Pages</NavLink></li>
                        <li><NavLink to="/">Find a Table</NavLink></li>
                    </ul>
                </nav>
                </div>
            </div>

        </div>

    </header>
  );
}

export default Header;

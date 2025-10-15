import React from 'react';

import { MdOutlineMailOutline } from "react-icons/md";

import FooterBg from "../../assets/images/background/image-4.jpg"
import Pattern4 from "../../assets/images/background/pattern-4.png"
import Pattern9 from "../../assets/images/background/pattern-9.svg"
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className='w-full h-fit '>
      <div className='relative h-full w-full pt-20 pb-15'>
        <div className='absolute -z-10 inset-0 bg-cover top-0 left-0 bg-center' 
        // style={{ backgroundImage: `url(${FooterBg})`}}
        style={{ backgroundImage: `url(${FooterBg})` }}>
        </div>
        <div className='m-auto p-5 w-full'>
          <div className='flex justify-center items-center flex-row flex-wrap'>
            <div className='w-full lg:w-2/4 lg:order-2'>
              <div className=' m-auto relative w-full px-4 py-8'
              style={{ backgroundImage: `url(${Pattern4})` }}
              >
                <div className='absolute inset-0 bg-cover top-0 left-0 w-4 h-full bg-center'
                style={{ backgroundImage: `url(${Pattern9})` }}></div>
                
                <div className='text-center text-orange-200 p-5'>
                  <div className='mb-7 text-3xl md:text-4xl font-bold'>Alpha <br />
                    <span className='text-2xl md:text-3xl font-semibold'>Chef</span>
                  </div>
                  <div className='mb-7'>
                    <ul className='text-neutral-400'>
                      <li>Restaurant St, Delicious City, London 9578, UK</li>
                      <li>booking@domainname.com</li>
                      <li>Booking Request : +88-123-123456</li>
                      <li>Open : 09:00 am - 01:00 pm</li>
                    </ul>
                  </div>
                  <div className=' mb-3'>
                    <h2 className='text-xl md:text-3xl'>Get News & Offers</h2>
                    <p className='text-neutral-400'>Subscribe us & Get 25% Off.</p>
                  </div>
                  <div className='bg-neutral-700 md:mx-20 lg:mx-40 '>
                    <form className=''>
                      <div className='flex justify-center items-center relative '>
                        <span className='absolute left-1 '><MdOutlineMailOutline /></span>
                        <input type="email" name="" id="" className='relative block w-full md:mr-27 md:px-7 py-2'/>
                        <input type="button" value="Subscribe" className='absolute top-0 right-0 px-2 md:px-5 py-2 bg-orange-200 text-black'/>
                      </div>
                    </form>
                  </div>

                </div>
                <div className='absolute bg-cover right-0 top-0 w-4 h-full bg-center'
                style={{ backgroundImage: `url(${Pattern9})` }}></div>
              </div>
              
            </div>
            <div className='w-full sm:w-2/4 lg:w-1/4 order-1'>
              <div className='m-auto'>
                <div className='px-5 py-8'>
                  <div className='w-full flex justify-center items-center text-center'>
                    <ul className="w-full flex flex-col justify-evenly gap-2 font-light text-sm text-white uppercase *:hover:text-orange-300 ">
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
                  </ul>
                  </div>  
                </div>  
              </div>
            </div>
            <div className='w-full sm:w-2/4 lg:w-1/4 order-3'>
              <div className='m-auto '>
                <div className='px-5 py-8'>
                  <div className='w-full flex justify-center items-center text-center'>
                    <ul className="w-full flex flex-col justify-evenly gap-2 font-light text-sm text-white uppercase *:hover:text-orange-300 ">
                    <li className="">
                      <NavLink to="/">Instagram</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Facebook</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Whats App</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">YouTube</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Tweeter</NavLink>
                    </li>
                  </ul>
                  </div>  
                </div>  
              </div>
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer

import React from "react";

import BannerContactImg from "../../assets/images/background/banner-image-4.jpg";
import Separator from "../../assets/images/icons/separator.svg";
import MessageImage1 from "../../assets/images/resource/image-1.jpg";

function index() {
  return (
    <>
      {/* page intro section */}
      <section className="w-full static relative">
        <div
          className="absolute -z-10 inset-0 bg-cover top-0 left-0 bg-center brightness-40"
          style={{ backgroundImage: `url(${BannerContactImg})` }}
        ></div>
        <div className="py-40 flex flex-col lg:flex-row justify-center items-center">
          <div className="h-full w-full lg:w-1/2 flex items-center justify-center text-center">
            <div className="px-5 md:px-18 pt-5">
              <div className=" max-w-120 text-white">
                <p className="text-amber-100 mb-4 uppercase">Any Query ?</p>
                <div className="flex items-center justify-center">
                  <img src={Separator} alt="seprator" className=" w-30 mb-5" />
                </div>

                <h2 className="capitalize text-4xl">
                  <span className=" text-white">Contact Us</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Reservation Section  */}
      <section className="h-full w-full relative bg-neutral-800">
        <div className="mx-1 md:mx-16 p-4 static -mt-70 ">
          <div className="bg-black w-full text-white">
            <div className="p-5 flex flex-col md:flex-row justify-center gap-5">
              <div className="w-full md:w-1/3 text-center ">
                <strong>Lunch Time</strong>

                <p className="mt-5">
                  Monday to Sunday <br /> 11.00 am - 2.30pm
                </p>
              </div>
              <div className="w-full md:w-1/3 text-center">
                <strong>Contact Info</strong>
                <p className="mt-5">
                  Restaurant St, Delici City, London 9578, UK <br />
                  Email : booking@domainname.com <br />
                  <span className="text-orange-200">
                    Booking : +88-123-123456
                  </span>
                </p>
              </div>
              <div className="w-full md:w-1/3 text-center">
                <strong>Dinner Time</strong>
                <p className="mt-5">
                  Monday to Sunday <br /> 05.30 pm - 11.30pm
                </p>
              </div>
            </div>
          </div>
          <div className="w-full relative bg-black">
            <div className="flex justify-center w-full h-full items-center flex-wrap  text-white">
              <div className="w-full lg:w-1/2 mx-auto p-10">
                <div className="text-center text mb-10">
                  <h1 className="text-5xl mb-4">Message Us</h1>
                  <p>
                    Have a question about the our service? We're here to help,
                    contact us today
                  </p>
                </div>
                <div>
                  <form>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-full">
                      <div className="w-full  px-2 mb-5">
                        <div className=" bg-neutral-700 text-white">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Your Name"
                            className="px-5 py-2 w-full font-medium h-14 placeholder:text-white border-1 border-gray-400 focus:outline-2 focus:outline-amber-200"
                          />
                        </div>
                      </div>

                      <div className="w-full  px-2 mb-5">
                        <div className="  bg-neutral-700 text-white">
                          <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Your Email"
                            className="px-5 py-2 w-full font-medium h-14 placeholder:text-white border-1 border-gray-400 focus:outline-2 focus:outline-amber-200"
                          />
                        </div>
                      </div>

                      <div className="w-full  px-2 mb-5">
                        <div className="bg-neutral-700 text-white">
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="Phone Number"
                            className="px-5 py-2 w-full font-medium h-14 placeholder:text-white border-1 border-gray-400 focus:outline-2 focus:outline-amber-200"
                          />
                        </div>
                      </div>

                      <div className="w-full h-fit px-2 mb-5">
                        <div className="bg-neutral-700 text-white">
                          <textarea
                            name="Request"
                            id=""
                            rows="5"
                            placeholder="Any special request"
                            className="px-5 py-2 w-full font-medium placeholder:text-white border-1 border-gray-400 focus:outline-2 focus:outline-amber-200"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-fit text-center text-black bg-orange-200 p-3">
                        <button
                          type="submit"
                          className="font-semibold font-serif tracking-widest uppercase"
                        >
                          Send Your Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="w-full h-full lg:w-1/2 px-10 text-white text-center">
                <div className="">
                  <img
                    src={MessageImage1}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;

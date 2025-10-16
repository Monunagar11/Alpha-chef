import React from "react";

import Banner1 from "../../assets/images/background/banner-image-1.jpg";
import Image1 from "../../assets/images/resource/image-1.jpg";
import Image2 from "../../assets/images/resource/image-2.jpg";
import Separator from "../../assets/images/icons/separator.svg";
import Sicon1 from "../../assets/images/resource/s-icon-1.png";
import Sicon2 from "../../assets/images/resource/s-icon-2.png";
import Sicon3 from "../../assets/images/resource/s-icon-3.png";
import Sicon4 from "../../assets/images/resource/s-icon-4.png";
import Pattern7 from "../../assets/images/background/pattern-7.png";
import ServiceImg from "../../assets/images/resource/service-image.png";
import Featured4 from "../../assets/images/resource/featured-4.jpg";
import Featured5 from "../../assets/images/resource/featured-5.jpg";
import Featured6 from "../../assets/images/resource/featured-6.jpg";
import Featured7 from "../../assets/images/resource/featured-7.jpg";
import WhyIcon1 from "../../assets/images/resource/why-icon-1.png";
import WhyIcon2 from "../../assets/images/resource/why-icon-2.png";
import WhyIcon3 from "../../assets/images/resource/why-icon-3.png";
import WhyIcon4 from "../../assets/images/resource/why-icon-4.png";


function index() {
  return (
    <>
      {/* page intro section */}
      <section className="w-full static relative">
        <div
          className="absolute -z-10 inset-0 bg-cover top-0 left-0 bg-center brightness-40"
          style={{ backgroundImage: `url(${Banner1})` }}
        ></div>
        <div className="m-0 pt-100">
          <div className="text-white"></div>
        </div>
      </section>

    {/* Who we are */}
      <section className="w-full h-fit bg-neutral-900">
        <div className="py-10">
          <div className=" flex flex-col lg:flex-row w-full justify-center items-center">
            <div className="h-full w-full  flex items-center justify-center text-center">
              <div className="px-5 w-full md:px-16 md:pb-18 pt-5">
                <div className="w-full text-white">
                  <p className="text-amber-100 mb-4 uppercase">Who We Are</p>
                  <div className="flex items-center justify-center">
                    <img
                      src={Separator}
                      alt="seprator"
                      className=" w-30 mb-5"
                    />
                  </div>

                  <h2 className="text-3xl mb-4 ">
                    <span className=" text-white">
                      A modern restaurant with a menu that will make your mouth water. Servicing delicious food since 45 years.
                       Enjoy our seasonal menu and experience the beauty of naturalness
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto p-5">
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
              {/* our services images div */}
              <div className="w-full lg:w-1/3 order-3 lg:order-2">
                <div className="px-5 mb-10">
                  <div className="w-full h-full mt-10">
                    <div className="relative h-full w-full bg-center text-center flex justify-center">
                      <div className="absolute inset-0 bg-amber-100 opacity-25 w-25 -top-10 bg-center bg-center m-auto brightness-40"
                            style={{ backgroundImage: `url(${Pattern7})` }}
                      ></div>
                      <div className="relative">
                        <img src={ServiceImg} alt="Service Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" md:w-1/2 lg:w-1/3 p-5 order-1">
                <div className="flex flex-col gap-5 sm:flex-row justify-center items-center mb-5">
                  <div className="rounded-full  bg-black p-2">
                    <img
                      src={Sicon1}
                      alt="Delivery icon"
                      className="object-cover min-h-25 min-w-25"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl text-orange-50 mb-2">
                      Door Delivery
                    </h3>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy printing and typeset industry
                      lorem Ipsum has been.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col-reverse gap-5 sm:flex-row justify-center items-center">
                  <div className="text-center sm:text-right">
                    <h3 className="text-xl text-orange-50 mb-2">Fine Dining</h3>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy printing and typeset industry
                      lorem Ipsum has been.
                    </p>
                  </div>
                  <div className="rounded-full bg-black p-2">
                    <img
                      src={Sicon2}
                      alt="Delivery icon"
                      className="object-cover min-h-25 min-w-25"
                    />
                  </div>
                </div>
              </div>

              <div className=" md:w-1/2 lg:w-1/3 p-5 order-2 lg:order-3">
                <div className="flex flex-col gap-5 sm:flex-row justify-center items-center mb-5">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl text-orange-50 mb-2">
                      Outdoor Catering
                    </h3>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy printing and typeset industry
                      lorem Ipsum has been.
                    </p>
                  </div>
                  <div className="rounded-full  bg-black p-2">
                    <img
                      src={Sicon3}
                      alt="Outdoor Catering"
                      className="object-cover min-h-25 min-w-25"
                    />
                  </div>
                </div>

                <div className="flex flex-col-reverse gap-5 sm:flex-row justify-center items-center">
                  <div className="rounded-full bg-black p-2">
                    <img
                      src={Sicon4}
                      alt="Benquets Hall"
                      className="object-cover min-h-25 min-w-25"
                    />
                  </div>
                  <div className="text-center sm:text-right">
                    <h3 className="text-xl text-orange-50 mb-2">Benquets Hall</h3>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy printing and typeset industry
                      lorem Ipsum has been.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 35 year of experience section */}
      <section className="w-full h-full bg-neutral-900">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="h-fit md:h-200 w-full lg:w-1/2">
            <img
              src={Image2}
              alt="35 year of experience"
              className="h-fit md:h-200 w-full object-cover"
            />
          </div>
          <div className="h-full lg:h-200 w-full lg:w-1/2 flex items-center justify-center text-center">
            <div className=" px-18 pb-18 pt-5">
              <div className=" max-w-120 text-white">
                <p className="text-amber-100 mb-4 uppercase">
                  35 year of experience
                </p>
                <div className="flex items-center justify-center">
                  <img src={Separator} alt="seprator" className=" w-30 mb-5" />
                </div>

                <h2 className="capitalize text-4xl mb-4 ">
                  <span className=" text-white">Award Winning Chef</span>
                </h2>
                <p className="pt-6 text-center text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt accusamus quis quas voluptatem eaque vero, iste ipsam
                  praesentium, ratione animi quae atque. At libero ab voluptatum
                  voluptatibus pariatur, numquam distinctio?
                </p>
                <h2 className="text-amber-100 text-sm mt-5 uppercase">
                  Henry - EXCUTIVE CHEF
                </h2>
                <div className="pt-5">
                  <button className="border-2 text-black text-sm md:text-2xl font-medium border-amber-100 bg-amber-100 py-3 px-8 uppercase">
                    Meet Our Team{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delightful Experience section */}
      <section className="w-full h-full bg-neutral-900">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="h-full lg:h-200 w-full lg:w-1/2 flex items-center justify-center text-center">
            <div className=" px-18 pb-18 pt-5">
              <div className=" max-w-120 text-white">
                <p className="text-amber-100 mb-4 uppercase">
                  Delightful Experience
                </p>
                <div className="flex items-center justify-center">
                  <img src={Separator} alt="seprator" className=" w-30 mb-5" />
                </div>

                <h2 className="capitalize text-4xl mb-4 ">
                  <span className=" text-white">Dinner, Event or Party?</span>
                </h2>
                <p className="pt-6 text-center text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt accusamus quis quas voluptatem eaque vero, iste ipsam
                  praesentium, ratione animi quae atque. At libero ab voluptatum
                  voluptatibus pariatur, numquam distinctio?
                </p>
                <h2 className="text-amber-100 text-sm mt-5 uppercase">
                  Henry - EXCUTIVE CHEF
                </h2>
                <div className="pt-5">
                  <button className="border-2 text-black text-sm md:text-2xl font-medium border-amber-100 bg-amber-100 py-4 px-12 uppercase">
                    Discover Now{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-200 w-full lg:w-1/2">
            <img
              src={Image1}
              alt="Delightful Experience"
              className="h-fit md:h-200 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full h-fit bg-neutral-900">
        <div className="py-10">
          <div className=" flex flex-col lg:flex-row justify-center items-center">
            <div className="h-full w-full lg:w-1/2 flex items-center justify-center text-center">
              <div className="px-5 md:px-18 md:pb-18 pt-5">
                <div className=" max-w-120 text-white">
                  <p className="text-amber-100 mb-4 uppercase">Our Services</p>
                  <div className="flex items-center justify-center">
                    <img
                      src={Separator}
                      alt="seprator"
                      className=" w-30 mb-5"
                    />
                  </div>

                  <h2 className="capitalize text-4xl mb-4 ">
                    <span className=" text-white">
                      Exquisite Restaurant in City
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto p-5">
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
              {/* our services images div */}
              <div className="w-full lg:w-1/3 order-3 lg:order-2">
                <div className="px-5 mb-10">
                  <div className="w-full h-full mt-10">
                    <div className="relative h-full w-full bg-center text-center flex justify-center">
                      <div className="absolute inset-0 bg-amber-100 opacity-25 w-25 -top-10 bg-center bg-center m-auto brightness-40"
                            style={{ backgroundImage: `url(${Pattern7})` }}
                      ></div>
                      <div className="relative">
                        <img src={ServiceImg} alt="Service Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" md:w-1/2 lg:w-1/3 p-5 order-1">
                <div className="flex flex-col gap-5 sm:flex-row justify-center items-center mb-5">
                  <div className="rounded-full  bg-black p-2">
                    <img
                      src={Sicon1}
                      alt="Delivery icon"
                      className="object-cover min-h-25 min-w-25"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl text-orange-50 mb-2">
                      Door Delivery
                    </h3>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy printing and typeset industry
                      lorem Ipsum has been.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col-reverse gap-5 sm:flex-row justify-center items-center">
                  <div className="text-center sm:text-right">
                    <h3 className="text-xl text-orange-50 mb-2">Fine Dining</h3>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy printing and typeset industry
                      lorem Ipsum has been.
                    </p>
                  </div>
                  <div className="rounded-full bg-black p-2">
                    <img
                      src={Sicon2}
                      alt="Delivery icon"
                      className="object-cover min-h-25 min-w-25"
                    />
                  </div>
                </div>
              </div>

              <div className=" md:w-1/2 lg:w-1/3 p-5 order-2 lg:order-3">
                <div className="flex flex-col gap-5 sm:flex-row justify-center items-center mb-5">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl text-orange-50 mb-2">
                      Outdoor Catering
                    </h3>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy printing and typeset industry
                      lorem Ipsum has been.
                    </p>
                  </div>
                  <div className="rounded-full  bg-black p-2">
                    <img
                      src={Sicon3}
                      alt="Outdoor Catering"
                      className="object-cover min-h-25 min-w-25"
                    />
                  </div>
                </div>

                <div className="flex flex-col-reverse gap-5 sm:flex-row justify-center items-center">
                  <div className="rounded-full bg-black p-2">
                    <img
                      src={Sicon4}
                      alt="Benquets Hall"
                      className="object-cover min-h-25 min-w-25"
                    />
                  </div>
                  <div className="text-center sm:text-right">
                    <h3 className="text-xl text-orange-50 mb-2">Benquets Hall</h3>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy printing and typeset industry
                      lorem Ipsum has been.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Why Choose us */}
      <section className="w-full h-fit">
              <div className="m-auto py-16  w-full bg-neutral-900">
                <div className="flex justify-center items-center flex-col w-full  text-white">
                  <div className="text-center w-full">
                    <p className="text-amber-100 uppercase mb-4">Why Choose Us</p>
      
                    <h2 className="capitalize text-4xl mb-4">Our Strength</h2>
                  </div>
                </div>
                {/* <div className="columns-1 w-full md:columns-2 lg:columns-3 grid justify-evenly grid-cols-1 md:grid-cols-2 items-center overflow-hidden" > */}
                <div className="w-full">
                <div className="flex w-full  items-center flex-wrap text-center ">
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4 my-4 group ">
                    <div className=" mb-4 h-full relative overflow-hidden">
                      <img
                        src={Featured4}
                        alt=""
                        srcset=""
                        className="object-cover w-full transition-all duration-700 group-hover:scale-105"
                      />
                      
                      <div className="absolute bottom-0 h-fit w-full p-5 origin-left brightness-90">
                        <div className=" h-full w-full m-auto px-2 text-center mb-5">
                            <div className="m-auto grid place-items-center">
                                <img src={WhyIcon1} alt="" 
                                className="object-center"
                                />
                            </div>
                            
                          <p className="text-amber-100 uppercase">Hygienic Food</p>
                          
                        </div>
                      </div>
      
                      <div className="absolute h-full w-[50%]  bg-gradient-to-r from-gray-300 to-gray-50  origin-top-left -skew-x-25 top-0 -left-[85%] opacity-50 group-hover:left-160 group-hover:opacity-10 transition-all duration-1000"></div>
                    </div>
                  </div>
      
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4 my-4 group">
                    <div className=" mb-4 relative lg:mt-20 overflow-hidden">
                      <img
                        src={Featured5}
                        alt=""
                        srcset=""
                        className="object-cover w-full transition-all duration-300 group-hover:scale-105"
                      />
                      
                      <div className="absolute bottom-0 h-fit w-full p-5 origin-left brightness-90">
                        <div className=" h-full w-full m-auto px-2 text-center">
                            <div className="m-auto grid place-items-center mb-5">
                                <img src={WhyIcon2} alt="" 
                                className="object-center"
                                />
                            </div>
                            
                          <p className="text-amber-100 uppercase">Fresh Environment</p>
                          
                        </div>
                      </div>
                      <div className="absolute h-full w-[50%]  bg-gradient-to-r from-gray-300 to-gray-50  origin-top-left -skew-x-25 top-0 -left-[85%] opacity-50 group-hover:left-160 group-hover:opacity-10 transition-all duration-1000"></div>
                    </div>
                  </div>
      
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4 my-4 group">
                    <div className=" mb-4 relative overflow-hidden">
                      <img
                        src={Featured6}
                        alt=""
                        srcset=""
                        className="object-cover w-full transition-all duration-300 group-hover:scale-105"
                      />
                      
                      <div className="absolute bottom-0 h-fit w-full p-5 origin-left brightness-90">
                        <div className=" h-full w-full m-auto px-2 text-center">
                            <div className="m-auto grid place-items-center mb-5">
                                <img src={WhyIcon3} alt="" 
                                className="object-center"
                                />
                            </div>
                            
                          <p className="text-amber-100 uppercase">Skilled Chefs</p>
                          
                        </div>
                      </div>
                      <div className="absolute h-full w-[50%]  bg-gradient-to-r from-gray-300 to-gray-50  origin-top-left -skew-x-25 top-0 -left-[85%] opacity-50 group-hover:left-160 group-hover:opacity-10 transition-all duration-1000"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4 my-4 group">
                    <div className=" mb-4 relative lg:mt-20 overflow-hidden">
                      <img
                        src={Featured7}
                        alt=""
                        srcset=""
                        className="object-cover w-full transition-all duration-300 group-hover:scale-105"
                      />
                      
                      <div className="absolute bottom-0 h-fit w-full p-5 origin-left brightness-90">
                        <div className=" h-full w-full m-auto px-2 text-center">
                            <div className="m-auto grid place-items-center mb-5">
                                <img src={WhyIcon4} alt="" 
                                className="object-center "
                                />
                            </div>
                            
                          <p className="text-amber-100 uppercase">Event & Party</p>
                          
                        </div>
                      </div>
                      <div className="absolute h-full w-[50%]  bg-gradient-to-r from-gray-300 to-gray-50  origin-top-left -skew-x-25 top-0 -left-[85%] opacity-50 group-hover:left-160 group-hover:opacity-10 transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
                </div>
                {/* scroller */}
              </div>
            </section>
    </>
  );
}

export default index;

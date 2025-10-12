import { useState } from "react";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import HeroImage1 from "../assets/images/main-slider/slider-1.jpg";
import HeroImage2 from "../assets/images/main-slider/slider-2.jpg";
import HeroImage3 from "../assets/images/main-slider/slider-3.jpg";
import BookIcon1 from "../assets/images/resource/book-icon-1.png";
import Pattern7 from "../assets/images/background/pattern-7.png";
import offerImg1 from "../assets/images/resource/offer-image-1.jpg";
import offerImg2 from "../assets/images/resource/offer-image-2.jpg";
import offerImg3 from "../assets/images/resource/offer-image-3.jpg";
import Bg1 from "../assets/images/background/bg-1.png";
import Bg2 from "../assets/images/background/bg-2.png";
import Image1 from "../assets/images/resource/image-1.jpg";
import Image2 from "../assets/images/resource/image-2.jpg";
import Badge1 from "../assets/images/resource/badge-1.png";
import Badge2 from "../assets/images/resource/badge-1-bg.png";
import ImageSection3 from "../assets/images/background/image-1.jpg";
import Team1 from "../assets/images/resource/team-1.jpg";
import Team2 from "../assets/images/resource/team-2.jpg";
import Team3 from "../assets/images/resource/team-3.jpg";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setIndex] = useState(0);

  const images = [HeroImage1, HeroImage2, HeroImage3];

  const handleToggel = () => {
    setIsOpen(!isOpen);
  };

  const nextImage = () => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setIndex(newIndex);
  };

  const prevImg = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setIndex(newIndex);
  };

  return (
    <>
      <div className="w-full h-lvh relative">
        <div
          className="absolute -z-10 inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
        <div className="flex w-full h-full absolute font-bold text-2xl justify-between items-center text-white">
          <div className="hidden sm:block m-5 border border-amber-100 rotate-45 text-amber-100 hover:bg-amber-200 transition duration-300">
            <div className=" p-3 -rotate-45 hover:text-black" onClick={prevImg}>
              <GrPrevious />
            </div>
          </div>
          <div className="hidden sm:block m-5 border border-amber-100 text-amber-100 rotate-45 hover:bg-amber-200 transition duration-300">
            <div
              className="p-3 -rotate-45 hover:text-black"
              onClick={nextImage}
            >
              <GrNext />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full gap-4 pt-30 m-auto">
          <p className="text-sm uppercase text-amber-200 tracking-[4px] mb-10">
            Amazing & Delicious
          </p>
          <h1 className="text-2xl md:text-5xl text-white text-center font-sans">
            Where every flovor <br /> tells a Story
          </h1>
          <p className="text-white text-2xl text-center">
            Come with the family and with mouthwatering food
          </p>
          <button className="border-2 border-amber-100 bg-amber-100 py-4 px-12">
            view our menu{" "}
          </button>
        </div>

        <div
          className="h-24 w-24 border-1 border-amber-100 animate-spin absolute bottom-8 right-8"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="h-24 w-24 absolute bottom-8 right-8 bg-amber-100 items-center flex flex-col text-center p-2">
          <img src={BookIcon1} alt="Book-icon" srcset="" className="mb-1" />
          <p className="font-extralight leading-none ">Book a table</p>
        </div>
      </div>

      {/* Flovour for royalty section */}
      <div className="bg-black relative w-full overflow-hidden">
        <div className="py-8 md:px-12 my-10">
          <div className="flex justify-center">
            <div className="flex w-150 flex-col text-center gap-6  my-10 mx-4">
              <p className="text-sm font-semibold uppercase text-amber-200 tracking-[4px] mb-10">
                Flavors For Royalty
              </p>
              <h1 className="text-5xl capitalize text-white text-center font-sans ">
                we offer top notch
              </h1>
              <p className="text-white">
                {" "}
                Come with the family and with mouthwatering food, Come with the
                family and with mouthwatering food,Come with the family and with
                mouthwatering food
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-evenly items-center flex-wrap gap-4 px-2 mt-10">
              <div className="mt-10">
                <div className="flex flex-col justify-center items-center h-full m-auto w-75 relative z-20 text-center">
                  <div
                    className="w-35 absolute h-115 mb-18 -z-10 bg-cover m-auto bg-center group-hover:rotate-y-180 transition duration-500"
                    style={{ backgroundImage: `url(${Pattern7})` }}
                  ></div>
                  <div className="flex justify-items-start flex-col">
                    <img
                      src={offerImg1}
                      alt="offer image"
                      srcset=""
                      className="w-72 h-95 min-w-72 min-h-82"
                    />

                    <h3 className="text-white text-2xl mt-2">Breakfast</h3>
                    <p className="text-amber-200">View Menu</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex flex-col justify-center items-center h-full  w-75 relative z-20 text-center">
                  <div
                    className="w-35 absolute h-115 mb-18 -z-10 bg-cover bg-center group-hover:rotate-y-180 transition duration-500"
                    style={{ backgroundImage: `url(${Pattern7})` }}
                  ></div>
                  <div className="flex justify-items-start flex-col">
                    <img
                      src={offerImg2}
                      alt="offer image"
                      srcset=""
                      className="w-72 h-95 min-w-72 min-h-82"
                    />

                    <h3 className="text-white text-2xl mt-2">Breakfast</h3>
                    <p className="text-amber-200">View Menu</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex flex-col justify-center items-center h-full  w-75 relative z-20 text-center">
                  <div
                    className="w-35 absolute h-115 mb-18 -z-10 bg-cover bg-center group-hover:rotate-y-180 transition duration-500"
                    style={{ backgroundImage: `url(${Pattern7})` }}
                  ></div>
                  <div className="flex justify-items-start flex-col">
                    <img
                      src={offerImg3}
                      alt="offer image"
                      srcset=""
                      className="w-72 h-95 min-w-72 min-h-82"
                    />

                    {/* front img */}
                    <h3 className="text-white text-2xl mt-2">Breakfast</h3>
                    <p className="text-amber-200">View Menu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute -bottom-20 left-0 overflow-hidden animate-bounce">
            <img src={Bg1} alt="bg1" srcset="" className="" />
          </div>
          <div className="hidden md:block absolute top-20 right-0  animate-bounce ">
            <img src={Bg2} alt="bg2" className="" />
          </div>
        </div>
      </div>

      <section className="w-full ">
        <div className="pt-28 pb-32 px-2 bg-neutral-900 ">
          <div className="m-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-20 mx-5 text-white">
              <div className="text-center max-w-120">
                <p className="text-amber-100 mb-4">Our Story</p>

                <h2 className="capitalize text-2xl mb-4">
                  Every Flovor tells a sotry
                </h2>
                <p className="mb-4 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt accusamus quis quas voluptatem eaque vero, iste ipsam
                  praesentium, ratione animi quae atque. At libero ab voluptatum
                  voluptatibus pariatur, numquam distinctio?
                </p>
                <h3 className="mb-4 text-2xl">Book Through Call</h3>
                <h2 className="mb-8 text-4xl">+91 80654 57652</h2>
                <div className="mb-4">
                  <button className="border-2 text-black text-2xl border-amber-100 bg-amber-100 py-4 px-12">
                    Read More{" "}
                  </button>
                </div>
              </div>
              <div className=" lg:ml-12">
                <div className="sm:pl-20 pl-8 ">
                  <div className="relative min-h-64 min-w-64 max-h-157 max-w-157">
                    <img
                      src={Image1}
                      alt="images 1 restorent images"
                      className="object-cover"
                    />

                    <div className="absolute -top-[15%] right-0 z-20">
                      <div className="relative">
                        <div
                          className="absolute"
                          style={{ backgroundImage: `url(${Badge2})` }}
                        >
                          <img src={Badge2} alt="" className=" rotate-45 " />
                        </div>
                        <div className="">
                          <img src={Badge1} alt="" className="" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 -left-20  max-w-37 max-h-37">
                      <div className="grid place-items-center w-full h-full relative z-20 ">
                        <div
                          className="w-35 h-60 absolute mb-18 -z-10 bg-cover bg-center group-hover:rotate-y-180 transition duration-500"
                          style={{ backgroundImage: `url(${Pattern7})` }}
                        ></div>
                        <div className=" min-w-37 min-h-37">
                          <img
                            src={Image2}
                            alt="offer image"
                            srcset=""
                            className="object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full bg-neutral-900">
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
          <div className="h-200 w-full lg:w-1/2">
            <img
              src={ImageSection3}
              alt="Lobster Tortellini"
              className="h-200 w-full object-cover"
            />
          </div>
          <div className="h-120 lg:200 w-full lg:w-1/2">
            <div className=" px-18 pb-18 pt-5">
              <div className=" max-w-120 text-white">
                <p className="text-amber-100 mb-4 uppercase">Special Dish</p>

                <h2 className="capitalize text-4xl mb-4 ">
                  <span className="bg-gray-600 text-gray-900">
                    Lobster Tortellini
                  </span>
                </h2>
                <p className="pt-6 text-justify text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt accusamus quis quas voluptatem eaque vero, iste ipsam
                  praesentium, ratione animi quae atque. At libero ab voluptatum
                  voluptatibus pariatur, numquam distinctio?
                </p>

                <h2 className=" text-3xl pt-10">
                  <span className="font-extralight text-2xl">$40.00</span>{" "}
                  $20.00
                </h2>
                <div className="pt-10">
                  <button className="border-2 text-black text-2xl border-amber-100 bg-amber-100 py-4 px-12">
                    Read More{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* chef section */}
      <section className="w-full h-full bg-neutral-700">
        <div className="py-8 md:px-12 ">
          <div className="flex justify-center">
            <div className="flex w-150 flex-col text-center gap-6  my-10 mx-4">
              <p className="text-sm font-semibold uppercase text-amber-200 tracking-[4px] mb-10">
                experienced team
              </p>
              <h1 className="text-5xl capitalize text-white text-center font-sans ">
                Meet Our Chef
              </h1>
            </div>
          </div>
          <div className="flex w-full justify-evenly items-center flex-wrap  gap-5">
            <div className="w-72 my-4 group">
              <div
                className="mb-4 relative group  ">
                <img src={Team1} alt="" srcset="" className="object-cover " />
                <div className="absolute top-0 left-0 h-full w-5 bg-amber-300 group-hover:w-full opacity-50 transition-all duration-500">

                </div>
              </div>
              <h2 className="text-4xl">Willium Joe</h2>
              <p className="text-amber-100 ">Master Chef</p>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.
              </p>
            </div>

            <div className="w-72 my-4">
              <div className=" mb-4 group-hover:rotate-y-180 transition duration-500">
                <img src={Team2} alt="" srcset="" className="object-cover" />
              </div>
              <h2 className="text-4xl">Willium Joe</h2>
              <p className="text-amber-100 ">Master Chef</p>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.
              </p>
            </div>

            <div className="w-72 my-4">
              <div className=" mb-4  group-hover:rotate-y-180 transition duration-500">
                <img src={Team3} alt="" srcset="" className="object-cover" />
              </div>
              <h2 className="text-4xl">Willium Joe</h2>
              <p className="text-amber-100 ">Master Chef</p>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

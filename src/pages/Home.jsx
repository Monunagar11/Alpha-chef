import { useState } from "react";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import HeroImage1 from "../assets/images/main-slider/slider-1.jpg";
import HeroImage2 from "../assets/images/main-slider/slider-2.jpg";
import HeroImage3 from "../assets/images/main-slider/slider-3.jpg";
import BookIcon1 from "../assets/images/resource/Book-icon-1.png";

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
          <div className="m-5 border border-amber-100 rotate-45 text-amber-100 hover:bg-amber-200 transition duration-300">
            <div className="p-3 -rotate-45 hover:text-black" onClick={prevImg}>
              <GrPrevious />
            </div>
          </div>
          <div className="m-5 border border-amber-100 text-amber-100 rotate-45 hover:bg-amber-200 transition duration-300">
            <div
              className="p-3 -rotate-45 hover:text-black"
              onClick={nextImage}
            >
              <GrNext />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full gap-4 pt-30">
          <p className="text-sm uppercase text-amber-200 tracking-[4px] mb-10">
            Amazing & Delicious
          </p>
          <h1 className="text-5xl text-white text-center font-sans">
            Where every flovor <br /> tells a Story
          </h1>
          <p className="text-white text-2xl">
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
      <div className="bg-black">
        <div className="py-12 ">
          <div className="flex justify-center">
            <div className="flex w-150 flex-col text-center gap-6 justify-center my-10">
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
            <div className="flex justify-between items-center">
                <div className="relative">
                    {/* back img */}
                    <div></div>
                    {/* front img */}
                    <div></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import BannerChefImg from "../../assets/images/background/banner-image-5.jpg";
import BackgroundImg5 from "../../assets/images/background/image-5.jpg";
import MainChef from "../../assets/images/resource/mainchef.jpg";
import Separator from "../../assets/images/icons/separator.svg";
import Pattern7 from "../../assets/images/background/pattern-7.png";
import Team1 from "../../assets/images/resource/team-1.jpg";
import Team2 from "../../assets/images/resource/team-2.jpg";
import Team3 from "../../assets/images/resource/team-3.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

function index() {
  return (
    <>
      {/* page intro section */}
      <section className="w-full static relative">
        <div
          className="absolute -z-10 inset-0 bg-cover top-0 left-0 bg-center brightness-40"
          style={{ backgroundImage: `url(${BannerChefImg})` }}
        ></div>
        <div className="py-40 flex flex-col lg:flex-row justify-center items-center">
          <div className="h-full w-full lg:w-1/2 flex items-center justify-center text-center">
            <div className="px-5 md:px-18 pt-5">
              <div className=" max-w-120 text-white">
                <p className="text-amber-100 mb-4 uppercase">Our Team</p>
                <div className="flex items-center justify-center">
                  <img src={Separator} alt="seprator" className=" w-30 mb-5" />
                </div>

                <h2 className="capitalize text-4xl">
                  <span className=" text-white">Meet Our Chef</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 35 year of experience section */}
      <section className="w-full h-full bg-neutral-900">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="h-fit w-full lg:w-1/2 p-18 relative m-8">
            <img
              src={MainChef}
              alt="35 year of experience"
              className="relative h-fit md:h-200 w-full object-cover z-20"
            />
            <div
              className="absolute bg-amber-100 w-25 h-9/12 opacity-25 bottom-10 left-10 z-0"
              style={{ backgroundImage: `url(${Pattern7})` }}
            ></div>
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

      {/* A mordern restorent with a menu */}
      <section className="w-full h-lvh relative">
        <div
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover bg-center bg-cover bg-fixed bg-blend-multiply"
          style={{ backgroundImage: `url(${BackgroundImg5})` }}
        >
          <div className="bg-black opacity-10 w-full h-full"></div>
        </div>
        <div className="m-auto py-16 md:px-20 w-full h-full flex justify-center items-center">
          <div className="flex justify-center items-center flex-col  w-fit  text-white">
            <p className="text-3xl md:text-4xl text-center mb-9 text-wrap md:mx-20">
              A modern restaurant with a menu that will make your mouth water.
            </p>
            <p className="text-amber-100 uppercase mb-4 text-center tracking-widest">
              Henry - Master chef
            </p>
          </div>
        </div>
      </section>

      {/* chef section */}
      <section className="w-full h-full bg-neutral-700">
        <div className="py-8 md:px-12 ">
          <div className="flex justify-center">
            <div className="flex w-150 flex-col text-center gap-6  my-10 ">
              <p className="text-sm font-semibold uppercase text-amber-200 tracking-[4px] mb-10">
                experienced team
              </p>
              <h1 className="text-5xl capitalize text-white text-center font-sans ">
                Meet Our Chef
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  gap-5">
            <div className="w-full my-4 px-5 group">
              <div className="mb-4  relative group  ">
                <img
                  src={Team1}
                  alt=""
                  srcset=""
                  className="object-cover w-full"
                />
                <div className="absolute top-0 left-0 h-full w-full origin-left rotate-y-90 bg-orange-200 group-hover:rotate-y-0 opacity-60 transition-all duration-500">
                  <div className="flex relative justify-evenly items-center h-full">
                    <FaFacebookF className="" />
                    <FaLinkedinIn />
                    <FaInstagram />
                    <TiSocialTwitter />
                  </div>
                </div>
              </div>
              <h2 className="text-4xl text-white">Willium Joe</h2>
              <p className="text-amber-100 tracking-widest">Master Chef</p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia.
              </p>
            </div>

            <div className="w-full my-4 px-5 group">
              <div className=" mb-4 relative group">
                <img
                  src={Team2}
                  alt=""
                  srcset=""
                  className="object-cover w-full"
                />
                <div className="absolute top-0 left-0 h-full w-full origin-left rotate-y-90 bg-orange-200 group-hover:rotate-y-0 opacity-60 transition-all duration-500">
                  <div className="flex relative justify-evenly items-center h-full">
                    <FaFacebookF className="" />
                    <FaLinkedinIn />
                    <FaInstagram />
                    <TiSocialTwitter />
                  </div>
                </div>
              </div>
              <h2 className="text-4xl text-white">Steave Den</h2>
              <p className="text-amber-100 tracking-widest">Master Chef</p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia.
              </p>
            </div>

            <div className="w-full my-4 px-5 group">
              <div className=" mb-4  relative group">
                <img
                  src={Team3}
                  alt=""
                  srcset=""
                  className="object-cover w-full"
                />
                <div className="absolute top-0 left-0 h-full w-full origin-left rotate-y-90 bg-orange-200 group-hover:rotate-y-0 opacity-60 transition-all duration-500">
                  <div className="flex relative justify-evenly items-center h-full">
                    <FaFacebookF className="" />
                    <FaLinkedinIn />
                    <FaInstagram />
                    <TiSocialTwitter />
                  </div>
                </div>
              </div>
              <h2 className="text-4xl text-white">Lily Sofy</h2>
              <p className="text-amber-100 tracking-widest">Master Chef</p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;

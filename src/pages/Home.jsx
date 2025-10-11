import { useState } from "react";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import HeroImage1 from "../assets/images/main-slider/slider-1.jpg"
import HeroImage2 from "../assets/images/main-slider/slider-2.jpg"
import HeroImage3 from "../assets/images/main-slider/slider-3.jpg"

function Home(){
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setIndex] = useState(0)

    const images = [HeroImage1, HeroImage2, HeroImage3];

    const handleToggel = ()=>{
         setIsOpen(!isOpen);
    }

    const nextImage = ()=>{
        const isFirst = currentIndex == 1;
        const newIndex = isFirst ? images.length - 1 : currentIndex -1;
        setIndex(newIndex);
    }

    const prevImg = () =>{
        const isLast = currentIndex == images.length -1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setIndex(newIndex);
    }

    return(
        <>
        <div className="w-full h-lvh relative">
            <div
        className="absolute -z-1 inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="flex w-full h-full z-10 justify-between items-center text-white">
            <div className="" onClick={prevImg}><GrPrevious /></div>
            <div className="" onClick={nextImage}><GrNext /></div>



        </div>
            {/* <img src={img} alt="" className="object-none w-full min-w-[320px] h-lvh absolute top-0 left-0 -z-1"/>  */}
                 <h1>Project- <span className='text-2xl text-yellow-600'>Alpha</span> Chef</h1>
                <div className={isOpen? "text-2xl text-green-500":"text-red-600"}>
                    div 1
                </div>
                <button className="p-2 bg-amber-800 text-white" onClick={handleToggel}>toggel color</button>
            </div>
        </div>
                

        </>
    )
}

export default Home;
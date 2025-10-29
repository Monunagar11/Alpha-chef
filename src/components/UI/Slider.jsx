import React, { useEffect, useState } from 'react';
import author1 from "../../assets/images/resource/author-thumb-1.jpg";
import author2 from "../../assets/images/resource/author-thumb-2.jpg";
import author3 from "../../assets/images/resource/author-thumb-3.jpg";

function Slider() {
    const [index, setIndex] = useState(0);

    const images = [author1, author2, author3];

    useEffect(()=>{
        const interval = setInterval(()=>{
           
            setIndex((prev)=>{
 if(index == images.length-1){
                setIndex(0);
                return;
            };
            return prev+1;
            })
            
        },2000)

        return ()=>{
            clearInterval(interval)
        }

    },[index])
   

  return (
    <section className='h-lvh w-full'>
        <div className='px-10 m-auto h-full w-full'>
            <div className='h-full w-full my-10'>
            <div className='h-full w-full flex justify-center items-center'>
                <img src={images[index]} alt="" className='object-cover h-full w-full '/>
            </div>

            </div>

        </div>

    </section>
  )
}

export default Slider;

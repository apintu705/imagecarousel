import React, { useState } from 'react'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';




export const ImageSlider = ({data}) => {
    const [current,setCurrent]=useState(0);
    const length=data.length;
    if (!Array.isArray(data) || data.length <= 0) {
        return null;
      }
    const nextslide=()=>{
        setCurrent(current===length-1?0:current+1);
    };
    const prevslide=()=>{
        setCurrent(current===0?length-1:current-1);
        
    };


  return (
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevslide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextslide} />
        {data.map((e,i)=>{
            return (
                <div key={i} className={i === current?"slide active":"slide"}>
                    {i === current?(<img className="image" src={e.image} alt="" />):""}
                </div>
            )
        })}
    </section >
  )
}

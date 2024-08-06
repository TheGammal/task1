import React, { useState } from 'react'
import port1 from '../../assets/images/port1.png'
import port2 from '../../assets/images/port2.png'
import port3 from '../../assets/images/port3.png'

export default function Portfolio() {
    const [images, setImages] = useState([
        { src: port1 },
        { src: port2 },
        { src: port3 },
        { src: port1 },
        { src: port2 },
        { src: port3 },
    ]);
    return (
        <div className='bg-white p-6 absolute top-[68px] z-0 left-0 w-full flex flex-col justify-center items-center text-[#2c3e50] min-h-screen'>
            <div className='container text-center mt-20'>
                <h2 className='text-4xl font-bold mb-4'>PORTFOLIO COMPONENT</h2>
                <div className='flex justify-center items-center w-full mb-4'>
                    <div className='w-1/12 border-t-4 border-[#2c3e50]'></div>
                    <i className='fa-solid fa-star mx-2 text-[#2c3e50]'></i>
                    <div className='w-1/12 border-t-4 border-[#2c3e50]'></div>
                </div>
            </div>
            <div className='container grid grid-cols-3 gap-4 p-14 mb-56'>
                {images.map((images, index) => (
                    <div key={index} className='flex items-center justify-center p-3'>
                        <img src={images.src} className=' rounded-lg' />
                    </div>

                ))}
            </div>
            
        </div>
    )
}
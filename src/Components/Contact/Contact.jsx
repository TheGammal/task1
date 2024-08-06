import React from 'react'

export default function Contact() {
    return (
        <div className='bg-white p-6 absolute top-[68px] z-0 left-0 w-full flex flex-col justify-center items-center text-[#2c3e50] min-h-screen'>
            <div className='container text-center mt-20'>
                <h2 className='text-4xl font-bold mb-4'>CONTACT SECTION</h2>
                <div className='flex justify-center items-center w-full mb-4'>
                    <div className='w-1/12 border-t-4 border-[#2c3e50]'></div>
                    <i className='fa-solid fa-star mx-2 text-[#2c3e50]'></i>
                    <div className='w-1/12 border-t-4 border-[#2c3e50]'></div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <form className="bg-white p-6 rounded w-2/3 text-start mb-72">
                    <input type="text" placeholder='userName' className='mt-1 mb-7 w-full px-3 py-2 border border-transparent border-b-gray-300 rounded-md' />
                    <input type="text" placeholder='userAge' className='mt-1 mb-7 w-full px-3 py-2 border border-transparent border-b-gray-300 rounded-md' />
                    <input type="email" placeholder='userEmail' className='mt-1 mb-7 w-full px-3 py-2 border border-transparent border-b-gray-300 rounded-md' />
                    <input type="password" placeholder='userPassword' className='mt-1 mb-7 w-full px-3 py-2 border border-transparent border-b-gray-300 rounded-md' />
                    
                    <button type="submit" className='py-2 px-4 bg-[#1abc9c] text-white font-light rounded-md shadow-sm'>send Message</button>
                </form>
            </div>
        </div>
    )
}
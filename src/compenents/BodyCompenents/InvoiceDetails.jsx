import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { FaCircle } from "react-icons/fa";



function InvoiceDetails({ isDark }) {
    return (
        <>
            <div className='mx-auto flex flex-col gap-4 w-[730px] md:w-[327px]  pt-[65px] lg:pt-[90px] mb-6 '>
                <div className='flex flex-col gap-7'>
                    <button className='flex items-center  gap-2 text-m-gray font- md:font-bold font-sans text-[15px] '>
                        <IoIosArrowBack className='text-[14px] hover:text-primary-1' /> Go back
                    </button>
                    <div className={`h-[88px] w-full flex justify-between  items-center   ${isDark ? "bg-dark-gray " : "bg-white"} shadow-sm rounded-[8px] px-8`}>
                        <div className=' flex flex-row gap-2  items-center md:w-full  md:justify-between '>
                            <h1 className='font-medium font-sans text-[13] text-gray-400'>Status</h1>
                            <span className='w-[104px] h-[40px] flex justify-center items-center gap-3   rounded font-bold text-[#FF8F00] bg-[#FF8F00] bg-opacity-10'>
                                <FaCircle className='text-[#FF8F00] text-[8px]' />
                                Pending
                            </span>
                        </div>
                        <div className='flex gap-1 md:hidden'>
                            <button className={` bg-white text-m-gray hover:bg-gray-200  px-4 font-sans font-semibold text-center h-12 w-[73px] rounded-full  `}> Edit</button>
                            <button className={` bg-accent-red  hover:bg-accent-light text-white  px-4 font-sans font-semibold text-center h-12 w-[89px] rounded-full `}> Delete</button>
                            <button className={` bg-primary-1 hover:bg-primary-h text-white  px-5 font-sans font-semibold text-center h-12 w-[131px] rounded-full  `}> Save & Send</button>
                        </div>
                    </div>

                </div>
                <div className={`w-full p-8  ${isDark ? "bg-dark-gray " : "bg-white"}`}>
                    <div className='flex justify-between md:flex-col md:justify-start md:gap-6 '>
                        <div className='flex flex-col font-sans gap-y-2'>
                            <h1 className={`font-bold  text-[15px] ${isDark ? " text-white" : "text-black"} `}>
                                <span className='text-gray-500'>#</span>
                                RT3080
                            </h1>
                            <h1 className='font-medium text-sm text-m-gray'>
                                Graphic Design
                            </h1>
                        </div>
                        <div className={`flex flex-col text-end md:text-start font-medium text-sm font-sans ${isDark ? "text-white" : "text-secondary-black "}`}>
                            <h1>270 Lot Fedragoum</h1>
                            <p>Ouarzazate</p>
                            <h2>E1 3EZ</h2>
                            <h1>Morocco</h1>
                        </div>
                    </div>
                    <div className='flex justify-between pr-[80px] md:flex-wrap md:pr-[20px] md:pt-4 md:gap-4'>
                        <div className='flex flex-col gap-7 font-sans'>
                            <div className='flex flex-col gap-2 '>
                                <h1 className='text-sm font-medium text-m-gray'>Invoice Date</h1>
                                <p className={`text-sm font-bold ${isDark ? " text-white" : "text-secondary-black "}`}>
                                    21 August 2021
                                </p>

                            </div>
                            <div className='flex flex-col gap-2 font-sans '>
                                <h1 className='text-sm font-medium text-m-gray'>Payment Due</h1>
                                <p className={`text-sm font-bold ${isDark ? " text-white" : "text-secondary-black "}`}>
                                    21 Sep 2021
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-sm font-medium text-m-gray pb-2'>Bill To</h1>
                            <h1 className={`text-sm font-bold ${isDark ? " text-white" : "text-secondary-black "}`}>Youssef Elhaouil</h1>
                            <p className='text-sm font-medium text-m-gray'>270 Lot Fedragoum</p>
                            <p className='text-sm font-medium text-m-gray'>Ouarzazate</p>
                            <p className='text-sm font-medium text-m-gray'>87 R98</p>
                            <p className='text-sm font-medium text-m-gray'>Morocco</p>

                        </div>
                        <div>
                            <h1 className='text-sm font-medium text-m-gray pb-2'>Sent to</h1>
                            <p className={`text-sm font-bold ${isDark ? " text-white" : "text-secondary-black "}`}>Youssefelha1949@gmail.com</p>
                        </div>
                    </div>
                    <div className='pt-8 flex flex-col '>
                        <div className={` p-[30px] ${isDark ? "bg-light-blue bg-opacity-20 " : "bg-[#979797] bg-opacity-10"}`}>
                            <table className={`w-full  `}>
                                <thead className=''>
                                    <tr className="text-left text-sm md:text-[11px] font-sans font-medium text-m-gray">
                                        <th>Item Name</th>
                                        <th className="text-center">QTY.</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={`text-left text-md md:text-[12px] font-sans font-bold ${isDark ? "text-white" : "text-secondary-black"}`} >
                                        <td>Mouse</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">$ 90.00</td>
                                        <td className="text-center">$ 900.00</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>


                        <div className='h-20 w-full flex justify-between items-center p-[30px] bg-secondary-black font-sans rounded-b-md '>
                            <h1 className='text-white text-sm font-medium '>Amount</h1>
                            <p className='text-white text-xl font-bold  '>$ 900.00</p>


                        </div>
                    </div>
                    <div className='md:flex md:gap-1 md:pt-4 hidden'>
                        <button className={` bg-white text-m-gray hover:bg-gray-200  px-4 font-sans font-semibold text-center h-12 w-[73px] rounded-full  `}> Edit</button>
                        <button className={` bg-accent-red  hover:bg-accent-light text-white  px-4 font-sans font-semibold text-center h-12 w-[89px] rounded-full `}> Delete</button>
                        <button className={` bg-primary-1 hover:bg-primary-h text-white  px-5 font-sans font-semibold text-center h-12 w-[131px] rounded-full  `}> Save & Send</button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default InvoiceDetails

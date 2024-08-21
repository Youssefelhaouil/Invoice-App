import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";




function InvoiceForm({ isDark, newInvoice, setNewInvoice }) {
    return (
        <>
            <div className={`fixed flex flex-col gap-4 top-0 w-[719px] pl-[140px] lg:px-4 pt-8 lg:pt-4 pr-12  lg:top-[72px]   
            h-screen overflow-y-scroll   md:w-full rounded-lg pb-[40px] md:pb-[80px] 
        ${isDark ? "bg-secondary-black " : "bg-white"}`}>

                <div className='flex justify-between'>
                    <h1 className={`font-sans font-bold text-xl ${isDark ? "text-white" : "text-secondary-black"}`}>New Invoice</h1>
                    <IoCloseSharp onClick={() => setNewInvoice(false)}
                        className='text-primary-1 hover:text-primary-h cursor-pointer text-[30px]   ' />
                </div>
                <h1 className='text-primary-1 font-sans font-bold cursor-pointer text-[15px]   '>Bill from</h1>
                <form className='flex flex-col gap-2' action="">
                    <div className='flex flex-col gap-1'>
                        <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                            htmlFor="streetAdress"> Street adress</label>
                        <input
                            type="text"
                            name='streetAdress'
                            required id='streetAdress' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    </div>
                    <div className='pt-3 flex md:grid md:grid-cols-2 gap-1'>
                        <div className='flex flex-col gap-1 w-1/3 md:w-auto '>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                                htmlFor="streetAdress"> City</label>
                            <input
                                type="text"
                                name='City'
                                required id='City' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                        </div>
                        <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                                htmlFor="streetAdress"> Post Code</label>
                            <input
                                type="text"
                                name='streetAdress'
                                required id='streetAdress' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                        </div>
                        <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                                htmlFor="streetAdress"> Country</label>
                            <input
                                type="text"
                                name='streetAdress'
                                required id='streetAdress' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                        </div>
                    </div>
                    <h1 className='pt-4 text-primary-1 font-sans font-bold cursor-pointer text-[15px]   '>Bill To</h1>
                    <div className='flex flex-col gap-1'>
                        <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                            htmlFor="streetAdress"> Client's name</label>
                        <input
                            type="text"
                            name='ClienName'
                            required id='ClienName' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                            htmlFor="streetAdress"> Client's email</label>
                        <input
                            type="email"
                            name='clientEmail'
                            required id='clientEmail' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                            htmlFor="clientAdress"> Street adress</label>
                        <input
                            type="text"
                            name='clientAdress'
                            required id='clientAdress' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    </div>
                    <div className='pt-3 flex w-full   md:grid md:grid-cols-2 gap-2'>
                        <div className='flex flex-col gap-1 w-1/3 md:w-auto  '>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray " : "text-m-gray"}`}
                                htmlFor="clientCity"> City</label>
                            <input
                                type="text"
                                name='clientCity'
                                required id='clientCity' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                        </div>
                        <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                                htmlFor="clientPost"> Post Code</label>
                            <input
                                type="text"
                                name='clientPost'
                                required id='clientPost' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                        </div>
                        <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                                htmlFor="ClientCountry"> Country</label>
                            <input
                                type="text"
                                name='ClientCountry'
                                required id='ClientCountry' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                        </div>
                    </div>
                    <div className='pt-3 grid grid-cols-2  gap-1 '>
                        <div className='flex flex-col gap-1 '>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray " : "text-m-gray"}`}
                                htmlFor="issueDate"> Issue Date</label>
                            <input
                                type="date"
                                name='issueDate'
                                required id='issueDate' className={`h-12  border-[1px]   font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white  " : "bg-white border text-secondary-black-light-gray text-secondary-black"} `} />
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                                htmlFor="clientPost">Payment Terms </label>
                            <select className={`h-12  border-[1px]  font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white  " : "bg-white border text-secondary-black-light-gray text-secondary-black"} `} name="filter" id="filter">
                                <option value="thirty"> Net 30 Days</option>
                                <option value="fourteen"> Net 14 Days</option>
                                <option value="seven"> Net 7 Days</option>
                                <option value="one"> Net 1 Days</option>

                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                            htmlFor="clientAdress"> Projet Description</label>
                        <input
                            type="text"
                            name='description'
                            required id='description' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    </div>
                    <h1 className='pt-4 text-m-gray font-sans font-bold cursor-pointer text-[15px]   '>Items List</h1>


                    <div className='pt-3 grid grid-cols-[40%_10%_20%_20%_10%]  gap-2'>
                        <div className='flex flex-col gap-1 '>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray " : "text-m-gray"}`}
                                htmlFor="clientCity"> Items Name</label>
                            <input
                                type="text"
                                name='clientCity'
                                required id='clientCity' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                                htmlFor="clientPost"> Qty.</label>
                            <input
                                type="number"
                                name='clientPost'
                                required id='clientPost' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                                htmlFor="ClientCountry">Price</label>
                            <input
                                type="number"
                                name='ClientCountry' required
                                id='ClientCountry' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                                htmlFor="ClientCountry"> Total</label>
                            <h1></h1>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-1 pt-4'>
                            <MdDelete className='text-[20px] text-m-gray hover:text-accent-red cursor-pointer ' />

                        </div>
                    </div>
                    <button
                        className={`h-[48px] rounded-full flex justify-center items-center gap-2 font-bold font-sans mt-4  
                    ${isDark ? "bg-dark-gray hover:bg-dark-blue text-white " : "bg-light-gray hover:bg-gray-400 text-secondary-black  "}`}>
                        <FaPlus className='text-center' />
                        Add New Item
                    </button>
                    <div className='pt-4 flex justify-between'>
                        <button className={` bg-light-gray text-gray-600  px-5 font-sans font-semibold text-center h-12 rounded-full hover:bg-gray-300 `}>
                            Discard
                        </button>
                        <div className='flex gap-2'>
                            <button  className={` bg-dark-blue text-gray-400  px-5 font-sans font-semibold text-center h-12 rounded-full hover:bg-dark-gray `}> Save as Draft</button>
                            <button className={` bg-primary-1 text-white  px-5 font-sans font-semibold text-center h-12 rounded-full hover:bg-primary-h `}> Save & Send</button>
                        </div>


                    </div>



                </form>



            </div>
        </>
    )
}

export default InvoiceForm

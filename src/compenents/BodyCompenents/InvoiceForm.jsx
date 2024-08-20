import React from 'react';
import { IoCloseSharp } from "react-icons/io5";


function InvoiceForm({ isDark, newInvoice, setNewInvoice }) {
    return (
        <>
            <div className={`absolute flex flex-col top-0 w-[719px] lg:top-[72px] pl-[120px] pt-8   
            h-screen overflow-y-scrollscroll md:w-full rounded-lg
        ${isDark ? "bg-secondary-black " : "bg-white"}`}>

                <div className='flex justify-beetwen w-full '>
                    <h1>New Invoice</h1>
                    <IoCloseSharp onClick={() => setNewInvoice(false)}
                        className='text-primary-1 hover:text-primary-h cursor-pointer text-[30px]  ' />
                </div>



            </div>
        </>
    )
}

export default InvoiceForm

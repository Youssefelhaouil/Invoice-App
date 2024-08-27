import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa6";
import { InvoiceContext } from '/src/context/InvoiceContext.jsx';




function Button({ isDark, setNewInvoice,searchByOption }) {
    const { invoices } = useContext(InvoiceContext);

    return (
        <>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <h1 className={`font-sans font-bold text-[35px] md:text-[24px] ${isDark ? "text-white" : "text-secondary-black"}`}>
                        Invoices
                    </h1>
                    {invoices.length > 0 ? <h5 className={` font-sans font-normal text-[13px] ${isDark ? "text-white" : "text-secondary-black"}`}>
                        There are {invoices.length} invoices
                    </h5>

                    :<h5 className={` font-sans font-normal text-[13px] ${isDark ? "text-white" : "text-secondary-black"}`}>
                        No Invoices
                    </h5>}
                </div>
                <div className='flex gap-2 items-center'>

                    <select onChange={(e)=>searchByOption(e.target.value) }
                    className={`font-sans text-[14px] font-bold w-[130px] md:w-[53px] h-[15px] 
                    ${isDark ? "bg-dark-bg text-white " : "bg-light-bg text-secondary-black"}`} 
                    name="filter" id="filter">
                        <option className='py-4 px-4' value="filter"> Filter By Option</option>
                        <option className='py-4 px-4' value="draft"> Draft</option>
                        <option className='py-4 px-4' value="pending">Pending</option>
                        <option className='py-4 px-4' value="paid">paid</option>
                    </select>


                    <button onClick={() => setNewInvoice(true)}
                        className='h-[48px] w-[150px] md:w-[90px] md:h-[44px] px-2
                         bg-primary-1 hover:bg-primary-h flex items-center text-white rounded-full  
                          font-sans font-bold text-[15px] gap-4'>
                        <span className='bg-white w-[32px] h-[32px] rounded-full flex justify-center items-center'>
                            <FaPlus className='  text-primary-1  text-sm ' />
                        </span>
                        <h1>New<span className="md:hidden"> Invoice</span></h1>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Button

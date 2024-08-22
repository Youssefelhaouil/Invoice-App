import React ,{useContext} from 'react'
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { InvoiceContext } from '/src/context/InvoiceContext.jsx';




function InvoiceCard({ isDark }) {
    const { invoices } = useContext(InvoiceContext);

    return (
        <>
            {
                invoices.map((invoice, index) =>
                    <div key={index} className={`cursor-pointer h-[72px] w-[730px] mt-5 mx-auto ${isDark ? " bg-dark-blue" : " bg-white"} hover:border-primary-1 hover:border-[1px]  rounded-[8px] shadow-md md:h-[134px] md:w-[327px]`}>
                        <div className='flex md:flex-col md:justify-center  my-auto pl-6 md:pl-3 px-7 gap-8 h-full'>
                            <div className='flex  md:justify-between'>
                                <div className='flex jusrify-center items-center md:items-start pl-3 md:flex-col gap-8'>
                                    <h1 className={`font-bold font-sans text-[15px] ${isDark ? " text-white" : "text-black"} `}>
                                        <span className='text-gray-500'>#</span>
                                        {invoice.id}
                                    </h1>
                                    <h1 className={`font-medium font-sans text-[13px] text-m-gray `}>
                                        Due  {invoice.dateData.date}
                                    </h1>
                                </div>
                                <div className='flex items-center md:items-start justify-end'>
                                    <h1 className='pl-10 text-center font-medium font-sans text-[13px] text-m-gray'>{invoice.billToData.ClientName}</h1>
                                </div>
                            </div>
                            <div className='flex  justify-end  md:justify-between items-center gap-4 ml-6 md:ml-0 '>
                                <h1 className={`font-bold font-sans text-[15px] md:pl-3 md:mt-[-40px] ${isDark ? " text-white" : "text-black"} `}>$ {invoice.itemsData.total} </h1>
                                <span className='flex justify-center items-center gap-3 bg-[#e2f8f0] text-center w-[104px] h-[40px] rounded font-bold text-[#33D69F] md:mt-[-60px]'>
                                    <FaCircle className='text-[#33D69F] text-[8px]' />
                                    Paid
                                </span>

                            </div>
                            <div className='flex items-center justify-end pl-8 md:hidden'>
                                <IoIosArrowForward className='text-end text-[#33D69F] ' />

                            </div>
                        </div>

                    </div>
                )
            }

        </>
    )
}

export default InvoiceCard

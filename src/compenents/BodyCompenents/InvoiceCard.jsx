import React, { useContext } from 'react';
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { InvoiceContext } from '/src/context/InvoiceContext.jsx';
import { useNavigate } from 'react-router-dom';

function InvoiceCard({ isDark }) {
    const { invoices } = useContext(InvoiceContext);
    const navigate = useNavigate();

    const paidCard = () => {
        return (
            <span className='w-[104px] h-[40px] flex justify-center items-center gap-3 rounded font-bold text-[#33D69F] bg-[#e2f8f0] '>
                <FaCircle className='text-[#33D69F] text-[8px]' />
                Paid
            </span>
        );
    };

    const pendingCard = () => {
        return (
            <span className='w-[104px] h-[40px] flex justify-center items-center gap-3 rounded font-bold text-[#FF8F00] bg-[#FF8F00] bg-opacity-10'>
                <FaCircle className='text-[#FF8F00] text-[8px]' />
                Pending
            </span>
        );
    };

    const draftCard = () => {
        return (
            <span className='w-[104px] h-[40px] flex justify-center items-center gap-3 rounded font-bold text-[#373B53] bg-[#979797]  '>
                <FaCircle className='text-[#373B53] text-[8px]' />
                Draft
            </span>
        );
    };

    const handleInvoiceClick = (id) => {
        navigate(`/invoice/${id}`);
    };

    return (
        <>
            {invoices.map((invoice, index) => (
                <div
                    key={index}
                    className={`cursor-pointer h-[72px] w-[730px] mt-5  mx-auto ${isDark ? "bg-dark-blue" : "bg-white"} hover:border-primary-1 hover:border-[1px] rounded-[8px] shadow-md md:h-[134px] md:w-[327px]`}
                    onClick={() => handleInvoiceClick(invoice.id)}
                >
                    <div className='relative md:relative flex md:flex-col md:justify-center my-auto  md:pl-3 px-7 gap-[40px] h-full md:gap-4 '>

                        <h1 className={`absolute top-6 md:left-6 md:top-4 font-bold font-sans text-[15px] ${isDark ? "text-white" : "text-black"}`}>
                            <span className='text-gray-500'>#</span>
                            {invoice.id}
                        </h1>
                        <h1 className='absolute left-[17%] top-7 md:top-[60px] md:left-4 font-medium font-sans text-[13px] text-m-gray'>
                            Due {invoice.dateData.date}
                        </h1>

                        <div className='absolute top-[35%]  left-[40%] md:left-[65%]     md:top-4  '>
                            <h1 className='  font-medium font-sans text-[13px] text-m-gray'>
                                {invoice.billToData.ClientName}
                            </h1>
                        </div>
                        <div className='absolute left-[62%] md:left-[6px] top-6 md:top-[90%] flex justify-end md:justify-between items-center gap-4 ml-6 md:ml-0'>
                            <h1 className={`font-bold font-sans  text-[15px] md:pl-3 md:mt-[-40px] ${isDark ? "text-white" : "text-black"}`}>
                                $ {invoice.itemsData.reduce((total, item) => total + item.total, 0).toFixed(2)}
                            </h1>
                        </div>
                        <div className='absolute right-[45px]  top-4 md:top-1/2 md:right-6 md:bottom-2'>
                            {invoice.type === "pending" ? pendingCard() : invoice.type === "draft" ? draftCard() : paidCard()}

                        </div>
                        <div className='absolute right-2 top-[35%] flex items-center justify-end pl-8 md:hidden'>
                            <IoIosArrowForward className='text-end text-[#33D69F]' />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default InvoiceCard;

import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { InvoiceContext } from '/src/context/InvoiceContext.jsx';
import DeleteConfirmation from './DeleteConfirmation'
import InvoiceForm from './InvoiceForm';


function InvoiceDetails({ isDark,newInvoice, setNewInvoice,setIsEditing,isEditing }) {
    const { invoices, updateInvoiceStatus } = useContext(InvoiceContext);
    const { invoiceId } = useParams();
    const [deleteClicked, setDeleteClicked] = useState(false);

    const invoice = invoices.find(inv => inv.id === invoiceId);

    if (!invoice) {
        return <div>Invoice not found</div>;
    }
    const handleMarkAsPaid = () => {
        updateInvoiceStatus(invoiceId, { type: 'paid' });

    };


    const paidCard = () => {
        return (
            <span className='flex justify-center items-center gap-3 bg-[#e2f8f0] text-center w-[104px] h-[40px] rounded font-bold text-[#33D69F] '>
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
            <span className='flex justify-center items-center gap-3 bg-[#9797975a] text-center w-[104px] h-[40px] rounded font-bold text-[#373B53] '>
                <FaCircle className='text-[#373B53] text-[8px]' />
                Draft
            </span>
        );
    };

    return (
        <>
            <div className='mx-auto flex flex-col gap-4 w-[730px] md:w-[327px] pt-[65px] lg:pt-[90px] mb-6 '>
                <div className='flex flex-col gap-7'>
                    <Link to="/">
                        <button className='flex items-center gap-2 text-m-gray font- md:font-bold font-sans text-[15px] '>
                            <IoIosArrowBack className='text-[14px] hover:text-primary-1' /> Go back
                        </button>
                    </Link>
                    <div className={`h-[88px] w-full flex justify-between items-center ${isDark ? "bg-dark-gray " : "bg-white"} shadow-sm rounded-[8px] px-8`}>
                        <div className='flex flex-row gap-2 items-center md:w-full md:justify-between '>
                            <h1 className='font-medium font-sans text-[13] text-gray-400'>Status</h1>
                            {invoice.type === "pending" ? pendingCard() : invoice.type === "draft" ? draftCard() : paidCard()}
                        </div>
                        <div className='flex gap-1 md:hidden'>
                            <button onClick={() => setIsEditing(true)} className={`bg-white text-m-gray hover:bg-gray-200 px-4 font-sans font-semibold text-center h-12 w-[73px] rounded-full`}> Edit</button>
                            <button onClick={() => setDeleteClicked(true)} className={`bg-accent-red hover:bg-accent-light text-white px-4 font-sans font-semibold text-center h-12 w-[89px] rounded-full`}> Delete</button>
                            {invoice.type !== "pending" ? null : <button onClick={handleMarkAsPaid} className={`bg-primary-1 hover:bg-primary-h text-white px-5 font-sans font-semibold text-center h-12 w-[131px] rounded-full`}> Mark as Paid</button>}
                        </div>
                    </div>
                </div>
                <div className={`w-full p-8 ${isDark ? "bg-dark-gray " : "bg-white"}`}>
                    <div className='flex justify-between md:flex-col md:justify-start md:gap-6'>
                        <div className='flex flex-col font-sans gap-y-2'>
                            <h1 className={`font-bold text-[15px] ${isDark ? "text-white" : "text-black"}`}>
                                <span className='text-gray-500'>#</span>
                                {invoice.id}
                            </h1>
                            <h1 className='font-medium text-sm text-m-gray'>
                                {invoice.descriptionData}
                            </h1>
                        </div>
                        <div className={`flex flex-col text-end md:text-start font-medium text-sm font-sans ${isDark ? "text-white" : "text-secondary-black "}`}>
                            <h1>{invoice.billFromData.StreetAddress}</h1>
                            <p>{invoice.billFromData.City}</p>
                            <h2>{invoice.billFromData.PostCode}</h2>
                            <h1>{invoice.billFromData.Country}</h1>
                        </div>
                    </div>
                    <div className='flex justify-between pr-[80px] md:flex-wrap md:pr-[20px] md:pt-4 md:gap-4'>
                        <div className='flex flex-col gap-7 font-sans'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-sm font-medium text-m-gray'>Invoice Date</h1>
                                <p className={`text-sm font-bold ${isDark ? "text-white" : "text-secondary-black "}`}>
                                    {invoice.dateData.date}
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 font-sans'>
                                <h1 className='text-sm font-medium text-m-gray'>Payment Due</h1>
                                <p className={`text-sm font-bold ${isDark ? "text-white" : "text-secondary-black "}`}>
                                    {invoice.dateData.dueDate}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-sm font-medium text-m-gray pb-2'>Bill To</h1>
                            <h1 className={`text-sm font-bold ${isDark ? "text-white" : "text-secondary-black "}`}>{invoice.billToData.ClientEmail}</h1>
                            <p className='text-sm font-medium text-m-gray'>{invoice.billToData.StreetAdress}</p>
                            <p className='text-sm font-medium text-m-gray'>{invoice.billToData.City}</p>
                            <p className='text-sm font-medium text-m-gray'>{invoice.billToData.CodePost}</p>
                            <p className='text-sm font-medium text-m-gray'>{invoice.billToData.Country}</p>
                        </div>
                        <div>
                            <h1 className='text-sm font-medium text-m-gray pb-2'>Sent to</h1>
                            <p className={`text-sm font-bold ${isDark ? "text-white" : "text-secondary-black "}`}>{invoice.billToData.ClientEmail}</p>
                        </div>
                    </div>
                    <div className='pt-8 flex flex-col'>
                        <div className={`p-[30px] ${isDark ? "bg-light-blue bg-opacity-20 " : "bg-[#979797] bg-opacity-10"}`}>
                            <table className='w-full'>
                                <thead>
                                    <tr className="text-left text-sm md:text-[11px] font-sans font-medium text-m-gray">
                                        <th>Item Name</th>
                                        <th className="text-center">QTY.</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Total</th>
                                    </tr>
                                </thead>
                                {invoice.itemsData.map((item, index) =>
                                    <tbody key={index}>
                                        <tr className={`text-left text-md md:text-[12px] font-sans font-bold ${isDark ? "text-white" : "text-secondary-black"}`}>
                                            <td>{item.name}</td>
                                            <td className="text-center">{item.qty}</td>
                                            <td className="text-center">$ {item.price}</td>
                                            <td className="text-center">$ {item.total}</td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                        <div className='h-20 w-full flex justify-between items-center p-[30px] bg-secondary-black font-sans rounded-b-md'>
                            <h1 className='text-white text-sm font-medium'>Amount</h1>
                            <p className='text-white text-xl font-bold'>$ {invoice.itemsData.reduce((total, item) => total + item.total, 0).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='md:flex md:justify-between md:gap-1 md:pt-4 hidden'>
                        <button className={`bg-white text-m-gray hover:bg-gray-200 px-4 font-sans font-semibold text-center h-12 w-[73px] rounded-full`}> Edit</button>
                        <button className={`bg-accent-red hover:bg-accent-light text-white px-4 font-sans font-semibold text-center h-12 w-[89px] rounded-full`}> Delete</button>
                        {invoice.type !== "pending" ? null : <button onClick={handleMarkAsPaid} className={`bg-primary-1 hover:bg-primary-h text-white px-5 font-sans font-semibold text-center h-12 w-[131px] rounded-full`}> Mark as Paid</button>}
                    </div>
                </div>
            </div>
            {deleteClicked && <div className='fixed top-0 left-0 bottom-0 right-0 h-screen bg-black bg-opacity-50'>
                <DeleteConfirmation setDeleteClicked={setDeleteClicked} isDark={isDark} invoice={invoice} />
            </div>}
            {
                isEditing &&
                <div className='fixed top-0 left-0 bottom-0 right-0 h-screen bg-black bg-opacity-50'>
                    <InvoiceForm newInvoice={newInvoice} setNewInvoice={setNewInvoice} isDark={isDark} isEditing={isEditing} setIsEditing={setIsEditing} invoice={invoice} />
                </div>
            }
        </>
    );
}

export default InvoiceDetails;

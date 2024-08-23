import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InvoiceContext } from '../../context/InvoiceContext';

function DeleteConfirmation({ isDark, setDeleteClicked, invoice }) {
    const { deleteInvoice } = useContext(InvoiceContext);
    const handleDelete = () => {
        if (deleteInvoice) {
            deleteInvoice(invoice.id);
        }
    };

    return (
        <div className={`w-[480px] h-[249px] md:w-[327px] md:h-[220px] flex flex-col justify-center font-sans gap-4  mx-auto p-8 mt-[150px] md:mt-[50%] rounded-md ${isDark ? "bg-dark-blue" : "bg-white "}`}>
            <h1 className={`font-bold text-xl ${isDark ? "text-white" : "text-secondary-black"}`}>Confirm deletion</h1>
            <p className={`font-medium text-sm ${isDark ? "text-gray-100" : "text-dark-blue"}`}>Are you sure you want to delete invoice #{invoice.id}? This action cannot be undone.</p>
            <div className='flex gap-2 justify-end'>
                <button onClick={() => setDeleteClicked(false)} className='h-12 w-[91px] font-sans font-medium text-center text-white bg-gray-400 hover:bg-gray-300  rounded-full '>Cancel</button>
                <Link to="/">
                    <button onClick={handleDelete} className='h-12 w-[91px] font-sans font-medium text-center text-white bg-accent-red hover:bg-accent-light   rounded-full '>
                        Delete
                        </button>
                </Link>
            </div>
        </div>
    )
}

export default DeleteConfirmation

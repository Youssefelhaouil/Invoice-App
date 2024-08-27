import React, { useContext, useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import BillFrom from './FormElement/BillFrom';
import BillTo from './FormElement/BillTo';
import DatePicker from './FormElement/DatePicker';
import ItemsList from './FormElement/ItemsList';
import DescriptionForm from './FormElement/DescriptionForm';
import { InvoiceContext } from '/src/context/InvoiceContext.jsx';

function InvoiceForm({ isDark, newInvoice, setNewInvoice, isEditing, setIsEditing, invoice }) {
    const { addInvoice, updateInvoiceStatus } = useContext(InvoiceContext);

    const [billFrom, setBillFrom] = useState({
        StreetAddress: "",
        City: "",
        PostCode: "",
        Country: "",
    });
    const [billTo, setBillTo] = useState({
        ClientName: "",
        ClientEmail: "",
        StreetAddress: "",
        City: "",
        PostCode: "",
        Country: "",
    });
    const [date, setDate] = useState({
        date: "",
        PaymentTerms: "",
    });
    const [description, setDescription] = useState('');
    const [items, setItems] = useState([
        {
            name: '',
            qty: 0,
            price: 0,
            total: 0,
        }
    ]);

    useEffect(() => {
        if (isEditing ) {
            setBillFrom(invoice.billFromData);
            setBillTo(invoice.billToData);
            setDate(invoice.dateData);
            setDescription(invoice.descriptionData);
            setItems(invoice.itemsData);
        }
    }, [isEditing]);

    const generateUniqueId = () => {
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        const randomNumber = Math.floor(Math.random() * 10000);
        return `${randomLetter}${randomNumber}`;
    };

    const invoiceData = {
        id: isEditing ? invoice.id : generateUniqueId(),  
        billFromData: billFrom,
        billToData: billTo,
        dateData: date,
        descriptionData: description,
        itemsData: items,
        type: '',
    };

    const handleSave = (type) => {
        const updatedInvoiceData = { ...invoiceData, type };
        
        if (isEditing) {
            updateInvoiceStatus(invoice.id, updatedInvoiceData); 
        } else {
            addInvoice(updatedInvoiceData); 
        }

        setNewInvoice(false);
        setIsEditing(false);
    };

    const addItem = () => {
        setItems([...items, { name: '', qty: 0, price: 0, total: 0 }]);
    };

    return (
        <>
            <div className={`fixed flex flex-col gap-4 top-0 w-[719px] pl-[140px] lg:px-4 pt-8 lg:pt-4 pr-12 lg:top-[72px]   
            h-screen overflow-y-scroll md:w-full rounded-lg pb-[40px] lg:pb-[80px] 
        ${isDark ? "bg-secondary-black " : "bg-white"}`}>

                {newInvoice && (
                    <div className='flex justify-between'>
                        <h1 className={`font-sans font-bold text-xl ${isDark ? "text-white" : "text-secondary-black"}`}>New Invoice</h1>
                        <IoCloseSharp onClick={() => setNewInvoice(false)}
                            className='text-primary-1 hover:text-primary-h cursor-pointer text-[30px] ' />
                    </div>
                )}
                {isEditing && (
                    <div className='flex justify-between'>
                        <h1 className={`font-sans font-bold text-xl ${isDark ? "text-white" : "text-secondary-black"}`}>Edit #{invoice.id}</h1>
                        <IoCloseSharp onClick={() => setIsEditing(false)}
                            className='text-primary-1 hover:text-primary-h cursor-pointer text-[30px] ' />
                    </div>
                )}
                
                <h1 className='text-primary-1 font-sans font-bold cursor-pointer text-[15px]'>Bill from</h1>
                <form className='flex flex-col gap-2' action="">
                    <BillFrom isDark={isDark} billFrom={billFrom} setBillFrom={setBillFrom}  />
                    <h1 className='pt-4 text-primary-1 font-sans font-bold cursor-pointer text-[15px]'>Bill To</h1>
                    <BillTo isDark={isDark} billTo={billTo} setBillTo={setBillTo}  />
                    <DatePicker isDark={isDark} date={date} setDate={setDate}  />
                    <DescriptionForm isDark={isDark} description={description} setDescription={setDescription}  />
                    <h1 className='pt-4 text-m-gray font-sans font-bold cursor-pointer text-[15px]'>Items List</h1>
                    <ItemsList isDark={isDark} items={items} setItems={setItems}  />
                    <button type='button' onClick={addItem}
                        className={`h-[48px] rounded-full flex justify-center items-center gap-2 font-bold font-sans mt-4  
                    ${isDark ? "bg-dark-gray hover:bg-dark-blue text-white " : "bg-light-gray hover:bg-gray-400 text-secondary-black  "}`}>
                        <FaPlus className='text-center' />
                        Add New Item
                    </button>
                    <div className='pt-4 flex justify-between'>
                        <button onClick={() => setNewInvoice(false)} className={` bg-light-gray text-gray-600  px-5 font-sans font-semibold text-center h-12 rounded-full hover:bg-gray-300 `}>
                            Discard
                        </button>
                        <div className='flex gap-2'>
                            <button  onClick={() => handleSave("draft")} className={` bg-dark-blue text-gray-400  px-5 font-sans font-semibold text-center h-12 rounded-full hover:bg-dark-gray `}>
                                Save as Draft
                            </button>
                            <button  onClick={() => handleSave("pending")} className={` bg-primary-1 text-white  px-5 font-sans font-semibold text-center h-12 rounded-full hover:bg-primary-h `}>
                                Save & Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default InvoiceForm;

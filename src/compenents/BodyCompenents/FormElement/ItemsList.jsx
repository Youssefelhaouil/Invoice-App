import React from 'react';
import { MdDelete } from "react-icons/md";


function ItemsList({ isDark, setItems, items , invoice,isEditing }) {

    const handleNameChange = (index, value) => {
        const updatedItems = [...items];
        updatedItems[index].name = value;
        setItems(updatedItems);
    };
    const handleQtyChange = (index, value) => {
        const updatedItems = [...items];
        updatedItems[index].qty = value;
        updatedItems[index].total = value * updatedItems[index].price;
        setItems(updatedItems);
    };

    const handlePriceChange = (index, value) => {
        const updatedItems = [...items];
        updatedItems[index].price = value;
        updatedItems[index].total = updatedItems[index].qty * value;
        setItems(updatedItems);
    };

    const handleDelete = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };
    

    return (
        <>
            {items.map((item, index) =>
                <div key={index} className='pt-3 grid grid-cols-[40%_10%_20%_20%_10%]  gap-2'>
                    <div className='flex flex-col gap-1 '>
                        <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray " : "text-m-gray"}`}
                            htmlFor="ItemsName"> Items Name</label>
                        <input
                            type="text"
                            value={item.name}
                            onChange={(e) => handleNameChange(index, e.target.value)}
                            id={`itemName-${index}`}
                            required className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                            htmlFor="Qty"> Qty.</label>
                        <input
                            type="number"
                            value={item.qty}
                            onChange={(e) => handleQtyChange(index, e.target.value)}
                            id={`qty-${index}`}
                            required className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                            htmlFor="price">Price</label>
                        <input
                            type="number"
                            value={item.price}
                            onChange={(e) => handlePriceChange(index, e.target.value)}
                            id={`price-${index}`}
                            required
                            className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    </div>
                    <div className='flex flex-col  gap-1'>
                        <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                            htmlFor="total"> Total</label>
                        <h1 className={`font-bold text-md text-center pt-3 ${isDark ? "text-white" : "text-secondary-black"}`}>
                            $ {(item.total).toFixed(2)}
                        </h1>
                    </div>
                    {items.length > 1 && <div onClick={() => handleDelete(index)} className='flex flex-col items-center justify-center gap-1 pt-4'>
                        <MdDelete  className='text-[20px] text-m-gray hover:text-accent-red cursor-pointer ' />

                    </div>}
                </div>
            )}
        </>
    )
}

export default ItemsList

import React from 'react';

function BillFrom({ isDark, billFrom = {}, setBillFrom }) { // Added default empty object for billFrom
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillFrom(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <div className='flex flex-col gap-1'>
                <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                    htmlFor="streetAddress">Street Address</label>
                <input
                    type="text"
                    name='StreetAddress'
                    onChange={handleChange}
                    id='streetAddress'
                    className={`h-12 border-[1px] font-sans font-bold px-3 text-[15px] rounded ${isDark ? "bg-dark-blue border-none text-white" : "bg-white border-light-gray text-secondary-black"} `} />
            </div>
            <div className='pt-3 flex md:grid md:grid-cols-2 gap-1'>
                <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                    <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                        htmlFor="city">City</label>
                    <input
                        type="text"
                        name='City'
                        onChange={handleChange}
                        id='city'
                        className={`h-12 border-[1px] font-sans font-bold px-3 text-[15px] rounded ${isDark ? "bg-dark-blue border-none text-white" : "bg-white border-light-gray text-secondary-black"} `} />
                </div>
                <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                    <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                        htmlFor="PostCode">Post Code</label>
                    <input
                        type="text"
                        name='PostCode'
                        onChange={handleChange}
                        id='PostCode'
                        className={`h-12 border-[1px] font-sans font-bold px-3 text-[15px] rounded ${isDark ? "bg-dark-blue border-none text-white" : "bg-white border-light-gray text-secondary-black"} `} />
                </div>
                <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                    <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                        htmlFor="country">Country</label>
                    <input
                        type="text"
                        name='Country'
                        onChange={handleChange}
                        id='country'
                        className={`h-12 border-[1px] font-sans font-bold px-3 text-[15px] rounded ${isDark ? "bg-dark-blue border-none text-white" : "bg-white border-light-gray text-secondary-black"} `} />
                </div>
            </div>
        </>
    );
}

export default BillFrom;

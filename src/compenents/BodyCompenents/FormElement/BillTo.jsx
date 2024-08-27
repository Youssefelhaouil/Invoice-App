import React from 'react'

function BillTo({ isDark, billTo, setBillTo,errors }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillTo(prev => ({ ...prev, [name]: value }))
    }
    return (
        <>
            <div className='flex flex-col gap-1'>
                <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                    htmlFor="ClientName"> Client's name</label>
                <input
                    type="text"
                    name='ClientName'
                    value={billTo.ClientName}
                    onChange={handleChange}

                    id='ClientName' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                {errors.ClientName && <p className="text-red-500 text-xs">{errors.ClientName}</p>}

            </div>
            <div className='flex flex-col gap-1'>
                <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                    htmlFor="ClientEmail"> Client's email</label>
                <input
                    type="email"
                    name='ClientEmail'
                    onChange={handleChange}
                    value={billTo.ClientEmail}
                    id='ClientEmail' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                {errors.ClientEmail && <p className="text-red-500 text-xs">{errors.ClientEmail}</p>}

            </div>
            <div className='flex flex-col gap-1'>
                <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                    htmlFor="ClientAddress"> Street adress</label>
                <input
                    type="text"
                    name='ClientAddress'
                    onChange={handleChange}
                    value={billTo.ClientAddress}
                    id='ClientAddress' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                {errors.ClientAddress && <p className="text-red-500 text-xs">{errors.ClientAddress}</p>}

            </div>
            <div className='pt-3 flex w-full   md:grid md:grid-cols-2 gap-2'>
                <div className='flex flex-col gap-1 w-1/3 md:w-auto  '>
                    <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray " : "text-m-gray"}`}
                        htmlFor="ClientCity"> City</label>
                    <input
                        type="text"
                        name='ClientCity'
                        onChange={handleChange}
                        value={billTo.ClientCity}
                        id='ClientCity' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    {errors.ClientCity && <p className="text-red-500 text-xs">{errors.ClientCity}</p>}

                </div>
                <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                    <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                        htmlFor="CodePost"> Post Code</label>
                    <input
                        type="text"
                        name='CodePost'
                        value={billTo.CodePost}
                        onChange={handleChange}
                        id='CodePost' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    {errors.CodePost && <p className="text-red-500 text-xs">{errors.CodePost}</p>}

                </div>
                <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                    <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                        htmlFor="ClientCountry"> Country</label>
                    <input
                        type="text"
                        name='ClientCountry'
                        onChange={handleChange}
                        value={billTo.ClientCountry}
                        id='ClientCountry' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                    {errors.ClientCountry && <p className="text-red-500 text-xs">{errors.ClientCountry}</p>}

                </div>
            </div>
        </>
    )
}

export default BillTo

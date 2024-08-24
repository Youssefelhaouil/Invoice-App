import React from 'react'

function BillTo({isDark ,setBillTo , invoice,isEditing}) {
    const handleChange= (e)=>{
        const {name,value}= e.target;
        setBillTo(prev=> ({...prev , [name] : value}))
    }
    return (
        <>
            <div className='flex flex-col gap-1'>
                <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                    htmlFor="ClientName"> Client's name</label>
                <input
                    type="text"
                    name='ClientName'
                    onChange={handleChange}
                    required id='ClientName' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
            </div>
            <div className='flex flex-col gap-1'>
                <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                    htmlFor="ClientEmail"> Client's email</label>
                <input
                    type="email"
                    name='ClientEmail'
                    onChange={handleChange}

                    required id='ClientEmail' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
            </div>
            <div className='flex flex-col gap-1'>
                <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                    htmlFor="StreetAdress"> Street adress</label>
                <input
                    type="text"
                    name='StreetAdress'
                    onChange={handleChange}

                    required id='StreetAdress' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
            </div>
            <div className='pt-3 flex w-full   md:grid md:grid-cols-2 gap-2'>
                <div className='flex flex-col gap-1 w-1/3 md:w-auto  '>
                    <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray " : "text-m-gray"}`}
                        htmlFor="City"> City</label>
                    <input
                        type="text"
                        name='City'
                        onChange={handleChange}

                        required id='City' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                </div>
                <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                    <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                        htmlFor="CodePost"> Post Code</label>
                    <input
                        type="text"
                        name='CodePost'
                        
                        onChange={handleChange}
                        required id='CodePost' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                </div>
                <div className='flex flex-col gap-1 w-1/3 md:w-auto'>
                    <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                        htmlFor="Country"> Country</label>
                    <input
                        type="text"
                        name='Country'
                        onChange={handleChange}
                        required id='Country' className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                </div>
            </div>
        </>
    )
}

export default BillTo

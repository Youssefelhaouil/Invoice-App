import React from 'react'

function DescriptionForm({ isDark, description, setDescription, errors }) {
    return (
        <>
            <div className='flex flex-col gap-1'>
                <label className={`font-sans font-medium text-[15px] ${isDark ? "text-light-gray" : "text-m-gray"}`}
                    htmlFor="description"> Projet Description</label>
                <input
                    type="text"
                    name='description'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`h-12  border-[1px] font-sans font-bold px-3 text-[15px]  rounded ${isDark ? "bg-dark-blue  border-none text-white " : "bg-white border-light-gray text-secondary-black"} `} />
                {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}

            </div>
        </>
    )
}

export default DescriptionForm

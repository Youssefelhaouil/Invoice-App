import React from 'react'
import Empty from '/src/assets/Empty.png'

function NothingPage({isDark}) {
    return (
        <>
            <div className='flex flex-col mx-auto justify-center h-[342px] w-[240px] gap-4 pt-[100px]'>
                <img className='h-[199px] ' src={Empty}  alt="empty image" /> 
                <h1 className={`font-sans font-bold text-[24px] text-center ${isDark ? "text-white" : "text-secondary-black"}`}>There is nothing here</h1>
                <p className={`font-sans font-light text-[14px] text-center text-pretty ${isDark ? "text-white" : "text-secondary-black"}`}>create an invoice by clicking the New invoice button and get started </p>
            </div>

        </>
    )
}

export default NothingPage

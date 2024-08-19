import React from 'react';
import Logo from '../assets/Logo.png';
import profile from '../assets/profile.png';
import { IoMoonSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";



function Header({ isDark, setDark }) {
    return (
        <>
            <div className='fixed flex flex-col lg:flex-row  justify-between w-[103px] h-screen rounded-r-3xl lg:rounded-none  lg:w-screen lg:h-[103px] bg-dark-blue '>
                <div className='bg-primary-1 h-[103px] w-[103px] rounded-r-3xl  grid place-items-center '>
                    <img src={Logo}  alt="" />
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center py-8 lg:py-2 lg:px-2 gap-8 lg:gap-6 '>
                    {
                        isDark ?
                            <button onClick={() => setDark(!isDark)}>
                                <IoMoonSharp className={`text-[19px] text-light-blue`} />
                            </button>
                            : <button onClick={() => setDark(!isDark)}>
                                <IoSunny className={`text-[19px] text-light-blue`}  />
                            </button>
                    }
                    <hr className='h-[2px] w-full lg:w-[1px]  lg:h-full bg-light-gray ' />
                    <div>
                        <img src={profile} className='h-[40px] w-[40px]    ' alt="" />

                    </div>
                </div>

            </div>
        </>
    )
}

export default Header

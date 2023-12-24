'use client'
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

function SelectRegion({selectRegion, selectedRegion}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center w-fit relative z-10 font-semibold text-sm">
            <div onClick={() => setOpen((prev) => !prev)} className="flex justify-between items-center w-56 my-2 p-5 bg-white-text-dark dark:bg-dark-blue-ele-dark rounded-md cursor-pointer shadow-xl">
                <span>{selectedRegion}</span>
                <IoIosArrowDown />
            </div>
            <div className={`flex flex-col bg-white-text-dark dark:bg-dark-blue-ele-dark dark:text-white-text-dark w-48 my-2 rounded-lg ${ open ? "opacity-100 h-auto" : "opacity-0 h-0"} transition-all duration-200 overflow-hidden absolute top-16 w-56 left-0`}>
                <div onClick={(e) =>  {selectRegion(e.target.innerText); setOpen(false)}} 
                className={`flex justify-start items-center px-5 py-1 pt-4 cursor-pointer`}
                >
                    <span>Africa</span>
                </div>

                <div onClick={(e) =>  {selectRegion(e.target.innerText); setOpen(false)}} 
                className={`flex justify-start items-center px-5 py-1 cursor-pointer`}
                >
                    <span>America</span>
                </div>

                <div onClick={(e) =>  {selectRegion(e.target.innerText); setOpen(false)}} 
                className={`flex justify-start items-center  px-5 py-1 cursor-pointer`}
                >
                    <span>Asia</span>
                </div>

                <div onClick={(e) =>  {selectRegion(e.target.innerText); setOpen(false)}} 
                className={`flex justify-start items-center px-5 py-1 cursor-pointer `}
                >
                    <span>Europe</span>
                </div>

                <div onClick={(e) =>  {selectRegion(e.target.innerText); setOpen(false)}} 
                className={`flex justify-start items-center  px-5 py-1 pb-4 cursor-pointer`}
                >
                    <span>Oceania</span>
                </div>
            </div>
        </div>
    );
}

export default SelectRegion;
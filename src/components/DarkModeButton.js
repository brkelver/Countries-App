'use client'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { HiOutlineMoon } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";

function DarkModeButton() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme('light');

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <button onClick={()=> changeTheme()} className='font-semibold text-lg max-[550px]:text-base flex justify-center items-center gap-2'>
            {theme === 'dark' ? <HiMoon size={18} /> :<HiOutlineMoon size={22} />}Dark Mode
        </button>
    );
}

export default DarkModeButton;
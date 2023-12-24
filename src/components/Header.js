import Link from 'next/link';
import React from 'react';
import DarkModeButton from './DarkModeButton';


function Header() {
    return (
        <div className='w-full flex justify-center shadow-md bg-white dark:bg-dark-blue-ele-dark h-24'>
            <div className='w-[1280px] max-xl:w-[968px] max-lg:w-[624px] max-md:w-[480px] max-[550px]:w-[350px] flex justify-between text-center items-center'>
                <Link href='/' className='font-extrabold text-2xl max-[600px]:text-lg'>Where in the world?</Link>
                <DarkModeButton />
            </div>
        </div>
    );
}

export default Header;
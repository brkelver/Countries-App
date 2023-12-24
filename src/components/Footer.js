import Link from 'next/link';
import React from 'react';

function Footer() {
    return (
        <div className='flex justify-center items-center w-full h-20 gap-1 bg-white-text-dark dark:bg-dark-blue-ele-dark shadow-xl'>
            <span>Made By </span> <Link href='https://github.com/brkelver' className='font-extrabold text-lg'> Burak Elver</Link>
        </div>
    );
}

export default Footer;
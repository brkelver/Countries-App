import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function CountryCard({country}) {
    return (
        <Link href={`/${country["cca3"]}`} className=' max-w-[22rem] w-[280px] max-md:w-[320px] max-[550px]:w-[290px] dark:bg-dark-blue-ele-dark'>
            <div className='flex flex-col shadow-md h-88 rounded-md'>
                <Image src={country.flags.png} width={320} height={240} quality={100} alt='Flag' className='h-[180px] w-auto rounded-tl-md rounded-tr-md'/>
                <div className='flex flex-col gap-4 p-6 mb-6'>
                    <h2 className='font-extrabold text-lg'>{country.name.common}</h2>
                    <div>
                        <p><span className='font-semibold'>Population: </span>{(country.population).toLocaleString("en-US")}</p>
                        <p><span className='font-semibold'>Region: </span>{country.region}</p>
                        <p><span className='font-semibold'>Capital: </span>{country.capital}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CountryCard;
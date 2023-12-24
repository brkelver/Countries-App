'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";

function CountryDetails() {
    const [isLoading,setIsLoading] = useState(true);
    const [country,setCountry] = useState({});
    const [borders,setBorders] = useState([]);

    const pathname = usePathname();
    const router = useRouter();

    useEffect(()=> {
        const fetchCountries = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alpha${pathname}`);

            const data = await res.json();
            setCountry({...data[0]});
            if('borders' in data[0]){
                Object.values(data[0].borders).map(async (border) =>  {
                    const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alpha/${border}`);
                    const data2 = await res2.json();
                    setBorders((prev) => [...prev,data2[0]]);
                })
            }
            setIsLoading(false)
            
        }
        fetchCountries();
    }, [])

    if(isLoading) return <div className='h-screen w-full flex justify-center items-center'>Loading</div>

    return (
        <div className='flex flex-col w-[1280px] max-xl:w-[968px] max-lg:w-[624px] max-md:w-[450px] max-[550px]:w-[350px]'>
            <Link href='#' onClick={() => router.back()} className='flex items-center text-center gap-2 py-2 px-10 my-20 max-lg:my-10 shadow-[0px_1px_5px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] w-fit rounded-md dark:bg-dark-blue-ele-dark'>
                <FaArrowLeftLong /> Back 
            </Link>
            <div className='flex gap-24 h-[440px] max-md:flex-col max-md:h-screen max-md:gap-0'>
                <div className='flex justify-start w-1/2 h-full relative max-xl:w-3/5 max-md:h-1/4 max-md:w-auto'>
                    <Image src={country.flags.svg} alt='Flag' fill={true} priority={true} quality={100} className='max-lg:object-contain max-md:object-fill'></Image>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center gap-12 max-xl:w-2/5 max-xl:gap-0 max-md:w-full max-md:h-4/5 max-xl:justify-start max-md:mt-10'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-extrabold text-3xl max-[550px]:text-xl'>{country.name.common}</h1>
                        <div className='flex justify-between max-xl:flex-col max-[550px]:text-sm'>
                            <div className='flex flex-col gap-y-2'>
                                <p><span className='font-semibold'>Native Name: </span>{country.name.official}</p>
                                <p><span className='font-semibold'>Population: </span>{(country.population).toLocaleString("en-US")}</p>
                                <p><span className='font-semibold'>Region: </span>{country.region}</p>
                                <p><span className='font-semibold'>Sub Region: </span>{country.subregion}</p>
                                <p><span className='font-semibold'>Capital: </span>{country.capital['0']}</p>
                            </div>
                            <div className='flex flex-col gap-y-2 max-xl:my-8'>
                                <p><span className='font-semibold'>Top Level Domain: </span>{country.tld['0']}</p>
                                <p><span className='font-semibold'>Currencies: </span>{country.currencies[Object.keys(country.currencies)[0]].name}</p>
                                <p><span className='font-semibold'>Languages: </span>{Object.values(country.languages).join(', ')}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 flex-wrap'>
                        <span className='font-semibold mr-1'>Border Countries:</span>
                        {borders.map(border => <Link href={`/${border["cca3"]}`} key={border["cca3"]} className=' flex min-w-24 h-7 px-4 justify-center items-center text-sm dark:bg-dark-blue-ele-dark shadow-[rgba(67,71,85,0.17)_0px_0px_0.4em,rgba(90,125,188,0.05)_0px_0.25em_1em]'>{border.name.common}</Link>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;
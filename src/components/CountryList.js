'use client'
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import CountryCard from './CountryCard';
import SelectRegion from './SelectRegion';
import process from "process";

function CountryList() {
    const [countries,setCountries] = useState([]);
    const [filteredCountries,setFilteredCountries] = useState([]);
    const [input,setInput] = useState('');
    const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
    
    useEffect(()=> {
        const fetchCountries = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all?fields=name,population,region,capital,flags,cca3`);
            console.log(res);
            const data = await res.json();
            setCountries([...data]);
        }
        fetchCountries();
    }, [])

    const inputChange= (e) => {
        setInput(e);
        const searchCountry = countries.filter((country) => country.name.common.toLowerCase().includes(e.toLowerCase()));
        setFilteredCountries([...searchCountry]);
    }

    const deleteFilter = () => {
        setInput('');
        setSelectedRegion('Filter by Region');
        setFilteredCountries([]);
    }

    const selectRegion = (e) => {
        setSelectedRegion(e);
        const selectRegionList = countries.filter((country) => country.region.toLowerCase().includes(e.toLowerCase()));
        setFilteredCountries([...selectRegionList]);
    }

    if(countries.length === 0) return <div>Loading</div>

    return (
        <div className='max-w-[1280px] min-h-screen'>
            <div className='pb-12 flex items-center justify-between max-md:flex-col max-md:gap-6 '>
                <div className='relative'>
                    <span className='absolute left-0 top-0 py-[20px] pl-[32px] pr-[20px]  text-dark-gray-input-light cursor-pointer' ><IoIosSearch size={24} /></span>
                    <input className='w-[30rem] max-lg:w-[24rem] max-[550px]:w-[350px] h-16 p-6 px-20 shadow-md rounded-md bg-white-text-dark dark:bg-dark-blue-ele-dark' placeholder='Search for a country...' value={input} onChange={(e)=> inputChange(e.target.value)} />
                    {filteredCountries.length > 0 ? <span className='absolute right-0 top-0 py-[20px] px-[20px] cursor-pointer' onClick={()=>deleteFilter()}><IoCloseOutline size={24} /></span> : ''}
                </div>
                <SelectRegion selectRegion={selectRegion} selectedRegion={selectedRegion}/>
            </div>
            <div className='grid gap-16 max-[550px]:gap-12 max-md:justify-items-center grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
                {filteredCountries.length > 0 ? filteredCountries.map((country,index) => <CountryCard country={country} key={index}/>) : countries.map((country,index) => <CountryCard country={country} key={index}/>)}
            </div>
        </div>
    );
}

export default CountryList;
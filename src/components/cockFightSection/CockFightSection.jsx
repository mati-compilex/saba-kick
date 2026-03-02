import React from 'react'
import Channels from './Channels'
import History from './History'
import HLSStream from '../HLSStream'
import { useState, useEffect, useRef } from 'react'
import ReactCountryFlag from "react-country-flag"
import arrowDown from '../../assets/downArrow.png'
const countries = [
  { code: 'KH', name: 'Cambodia' },
  { code: 'TH', name: 'Thailand' },
  { code: 'PH', name: 'Philippines' },
  { code: 'VN', name: 'Vietnam' },
]

const CockFightSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [activeStream, setActiveStream] = useState('https://live3.krikyabd.me/hls/stream.m3u8')
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='m-3'>
      <div className='mb-[28px] mt-[13px] flex text-white'>
        <div className='relative' ref={dropdownRef}>
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex items-center justify-center gap-2 bg-emphasis px-6 py-1 rounded-full mr-2 border border-neutral_variant-20'>
            <ReactCountryFlag countryCode={selectedCountry.code} svg style={{ width: '24px', height: '24px' }} />
            <span className='text-sm text-white'>{selectedCountry.name}</span>
            <img src={arrowDown} alt="" />
          </div> 
          
          {isOpen && (
            <div className='absolute top-full left-0 mt-2 bg-neutral_variant-5 rounded-lg shadow-lg py-2 min-w-[200px] z-50'>
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => {
                    setSelectedCountry(country)
                    setIsOpen(false)
                  }}
                  className='w-full text-left px-4 py-2 hover:bg-gray-900 flex items-center gap-3'
                >
                  <ReactCountryFlag countryCode={country.code} svg style={{ width: '20px', height: '20px' }} />
                  <span className='text-sm text-white text-nowrap'>{country.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className='border-r border-neutral_variant-20 h-8 align-center mr-2'></div>
        <Channels isLive={true} />
      </div>
      <HLSStream url={activeStream} className="h-[182px] rounded-lg overflow-hidden mb-[19px]" />
      <History selectedCountry={selectedCountry} />
    </div>
  )
}

export default CockFightSection

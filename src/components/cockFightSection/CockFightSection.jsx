import React from 'react'
import Channels from './Channels'
import History from './History'
import HLSStream from '../HLSStream'
import ErrorReportModal from '../ErrorReportModal'
import { useState, useEffect, useRef } from 'react'
import ReactCountryFlag from "react-country-flag"
import arrowDown from '../../assets/downArrow.png'
import { ReportIcon } from '../../assets/icons/report.jsx'
import { ShareIcon } from '../../assets/icons/share.jsx'
import { ThumbUpIcon } from '../../assets/icons/thumbUp.jsx'
import { ThumbUpFillIcon } from '../../assets/icons/thumbUpFill.jsx'
import { ThumbDownIcon } from '../../assets/icons/thumbDown.jsx'
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
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(1102)
  const [showReportModal, setShowReportModal] = useState(false)
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
        <Channels isLive={true} onStreamChange={setActiveStream} />
      </div>
      <div className="relative">
        <HLSStream url={activeStream} className="h-[182px] rounded-lg overflow-hidden" />
        <div className="bg-strong-45deg py-4 rounded-b-lg">
          <div className="flex items-center justify-between px-3">
            <div className="bg-nv-45deg p-[1px] rounded-[20px]">
              <button 
                onClick={() => setShowReportModal(true)}
                className="bg-emphasis rounded-[inherit] flex gap-2 items-center p-2"
              >
                <ReportIcon height={16} width={16} color="#B4B7BC" />
                <span className="text-neutral-70 font-medium text-[11px] leading-3">
                  Error report
                </span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-nv-45deg p-[1px] rounded-[20px]">
                <div className="bg-emphasis rounded-[inherit] flex gap-2 items-center p-2">
                  <button
                    className="flex items-center gap-1 pr-3 border-r-2 border-neutral_variant-20"
                    onClick={() => {
                      if (liked) {
                        setLikes((v) => v - 1)
                        setLiked(false)
                      } else {
                        setLikes((v) => v + 1)
                        setLiked(true)
                      }
                    }}
                  >
                    {liked ? (
                      <ThumbUpFillIcon height={18} width={18} color="#F3F3F4" />
                    ) : (
                      <ThumbUpIcon height={18} width={18} color="#F3F3F4" />
                    )}
                    <span className="text-neutral-95 font-medium text-[11px] leading-3">
                      {likes}
                    </span>
                  </button>
                  <button className="flex items-center gap-1">
                    <ThumbDownIcon height={18} width={18} color="#F3F3F4" />
                  </button>
                </div>
              </div>
              <div className="bg-nv-45deg p-[1px] rounded-[20px]">
                <div className="bg-emphasis rounded-[inherit] flex gap-2 items-center p-2">
                  <ShareIcon height={18} width={18} color="#B4B7BC" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <History selectedCountry={selectedCountry} />
      <ErrorReportModal isOpen={showReportModal} onClose={() => setShowReportModal(false)} />
    </div>
  )
}

export default CockFightSection

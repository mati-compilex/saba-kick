import React from 'react'
import Channels from './Channels'
import LiveStream from './LiveStream'
import History from './History'

const CockFightSection = () => {
  return (
    <div >
     <div  className='mb-[28px] mt-[13px]'>
      <Channels isLive={true}/>
      </div>
      <LiveStream className="h-[182px]"/>
       <div  className='mt-[19px] mb-[20px] '>
      <Channels isLive={false}/>
      </div>
      <History />
    </div>
  )
}

export default CockFightSection

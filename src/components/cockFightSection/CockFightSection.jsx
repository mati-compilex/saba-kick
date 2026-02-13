import React from 'react'
import Channels from './Channels'
import LiveStream from './LiveStream'
import History from './History'

const CockFightSection = () => {
  return (
    <div>
      <Channels />
      <LiveStream className="h-[182px]"/>
      <Channels />
      <History />
    </div>
  )
}

export default CockFightSection

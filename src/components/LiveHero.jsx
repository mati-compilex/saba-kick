import { useState } from 'react'
import Badge from './ui/Badge.jsx'
import Card from './ui/Card.jsx'

function LiveHero({ match, showScreen = false }) {
  const [isScreenVisible, setIsScreenVisible] = useState(showScreen)
  const oddsHome = match.oddsHome ?? '1.22'
  const oddsAway = match.oddsAway ?? '4.3'

  return (
    <Card className="p-4">
      {/* <div className="flex items-center justify-between text-[10px] text-gray-500">
        <span className="font-semibold uppercase tracking-wide">Advanced</span>
        <Badge tone="live">{match.status ?? 'Live'}</Badge>
      </div> */}
      <div onClick={() => setIsScreenVisible(!isScreenVisible)} className="cursor-pointer">
        <div className="mt-2 text-center text-[11px] text-gray-500">
          {match.league}
        </div>
        <div className="mt-1 text-center text-sm font-semibold text-gray-900">
          {match.home} - {match.away}
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded border border-gray-300 text-[11px] text-gray-500">
              Player
            </div>
          </div>
          <div className="text-lg font-bold text-gray-800">VS</div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded border border-gray-300 text-[11px] text-gray-500">
              Player
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center justify-between rounded-xl bg-gray-100 px-4 py-3 text-xs font-semibold text-gray-800">
            <span className="text-gray-500">W1</span>
            <span>{oddsHome}</span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-gray-100 px-4 py-3 text-xs font-semibold text-gray-800">
            <span className="text-gray-500">W2</span>
            <span>{oddsAway}</span>
          </div>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${isScreenVisible ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="rounded-xl border border-dashed border-gray-300 px-4 py-14 text-center text-base font-semibold text-gray-700">
          LIVE SCREEN
        </div>
      </div>
    </Card>
  )
}

export default LiveHero

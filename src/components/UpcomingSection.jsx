import { useState } from 'react'
import Button from './ui/Button.jsx'
import MatchCard from './MatchCard.jsx'

function UpcomingSection({ matches, mode = 'placeholder' }) {
  const [showScreen, setShowScreen] = useState(false)
  const hasMatches = matches.length > 0
  const showPlaceholder = mode === 'placeholder'
  const showList = mode === 'list'

  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold text-gray-900">
        Upcoming & Ended
      </div>
      {showPlaceholder ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div onClick={() => setShowScreen(!showScreen)} className="cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="rounded border border-gray-300 px-2 py-1 text-[10px] font-semibold text-gray-700">
                Country<br />Flag
              </div>
              <div className="rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold text-white">
                LIVE
              </div>
            </div>
            <div className="text-center mb-4">
              <div className="inline-block rounded-full bg-gray-200 px-4 py-1 text-xs font-medium text-gray-700">
                Europa League
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-center">
                <div className="w-16 h-16 border border-gray-300 rounded flex items-center justify-center mb-2">
                  <div className="text-[9px] text-gray-500">LEAGUE<br />LOGO</div>
                </div>
                <div className="text-xs font-semibold text-gray-900">League Name</div>
              </div>
              <div className="rounded-full bg-gray-900 px-4 py-2 text-sm font-bold text-white">
                3 : 2
              </div>
              <div className="text-center">
                <div className="w-16 h-16 border border-gray-300 rounded flex items-center justify-center mb-2">
                  <div className="text-[9px] text-gray-500">LEAGUE<br />LOGO</div>
                </div>
                <div className="text-xs font-semibold text-gray-900">League Name</div>
              </div>
            </div>
          </div>
          <div className={`rounded-xl border border-gray-300 bg-gray-50 aspect-video flex items-center justify-center overflow-hidden transition-all duration-500 ${showScreen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="text-2xl font-bold text-gray-900">LIVE SCREEN</div>
          </div>
        </div>
      ) : null}
      {showList && hasMatches ? (
        <div className="space-y-3">
          {matches.map((match, index) => (
            <MatchCard key={`${match.home}-${index}`} match={match} />
          ))}
        </div>
      ) : null}
      <Button variant="ghost" className="w-full">
        SHOW MORE COMPETITIONS
      </Button>
    </div>
  )
}

export default UpcomingSection

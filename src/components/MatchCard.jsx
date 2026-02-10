import Badge from './ui/Badge.jsx'
import Card from './ui/Card.jsx'

function MatchCard({ match }) {
  const badgeTone = match.status === 'Live' ? 'live' : 'neutral'
  return (
    <Card className="p-3">
      <div className="flex items-center justify-between text-[11px] text-gray-500">
        <span>{match.league}</span>
        <Badge tone={badgeTone}>{match.status}</Badge>
      </div>
      <div className="mt-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center text-xs font-semibold">
        <div className="rounded-lg border border-gray-200 px-2 py-2">
          {match.home}
        </div>
        <div className="text-[10px] text-gray-400">VS</div>
        <div className="rounded-lg border border-gray-200 px-2 py-2">
          {match.away}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between text-xs">
        <span className="text-gray-500">{match.time}</span>
        <span className="font-bold text-gray-900">
          {match.scoreHome} : {match.scoreAway}
        </span>
      </div>
    </Card>
  )
}

export default MatchCard

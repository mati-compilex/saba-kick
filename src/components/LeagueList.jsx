import Card from './ui/Card.jsx'

function LeagueList({ groups }) {
  return (
    <Card className="p-4">
      <div className="text-sm font-semibold text-gray-900">
        Match Leagues
      </div>
      <div className="mt-3 space-y-4 text-sm text-gray-700">
        {groups.map((group) => (
          <div key={group.title}>
            <div className="flex items-center justify-between text-xs font-semibold uppercase text-gray-500">
              <span>{group.title}</span>
              <button className="text-[10px] text-emerald-600">
                Group Detail
              </button>
            </div>
            <div className="mt-2 space-y-2">
              {group.items.map((item) => (
                <label
                  key={item.name}
                  className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-xs"
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-3 w-3 rounded border-gray-300"
                      defaultChecked
                    />
                    {item.name}
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold">
                    {item.count}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default LeagueList

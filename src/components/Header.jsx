import Badge from './ui/Badge.jsx'
import IconButton from './ui/IconButton.jsx'

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="rounded-md bg-gray-900 px-2 py-1 text-[13px] font-black tracking-wide text-white">
          KICK
        </span>
        <Badge tone="live">Live</Badge>
      </div>
      <div className="flex items-center gap-2">
        <IconButton label="Search">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.65" y1="16.65" x2="21" y2="21" />
          </svg>
        </IconButton>
        <IconButton label="Menu">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </IconButton>
      </div>
    </div>
  )
}

export default Header

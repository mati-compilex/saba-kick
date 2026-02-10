function Footer() {
  return (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-4 text-[11px] text-gray-500">
      <p>
        Live scores, match highlights, and full replays curated across the top
        leagues and tournaments.
      </p>
      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <span>Contact</span>
        <span>About</span>
        <span>Help</span>
        <span>Live</span>
        <span>Sports</span>
        <span>News</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[10px] font-semibold">
          FB
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[10px] font-semibold">
          IG
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[10px] font-semibold">
          YT
        </span>
      </div>
      <div className="text-[10px] text-gray-400">
        (c) 2026 KICK. All rights reserved.
      </div>
    </div>
  )
}

export default Footer

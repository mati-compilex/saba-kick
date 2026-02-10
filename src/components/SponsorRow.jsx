function SponsorRow({ sponsors }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {sponsors.map((name) => (
        <span
          key={name}
          className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[9px] font-bold uppercase text-gray-600"
        >
          {name}
        </span>
      ))}
    </div>
  )
}

export default SponsorRow

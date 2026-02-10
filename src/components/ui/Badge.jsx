function Badge({ tone = 'neutral', children }) {
  const tones = {
    neutral: 'bg-gray-100 text-gray-700',
    live: 'bg-red-500 text-white',
    dark: 'bg-gray-900 text-white',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

export default Badge

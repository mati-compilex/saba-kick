function Chip({ active = false, children, onClick }) {
  const base =
    'rounded-full px-3 py-1 text-[10px] font-semibold border transition'
  const activeStyles = active
    ? 'bg-gray-900 text-white border-gray-900'
    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${activeStyles}`}
    >
      {children}
    </button>
  )
}

export default Chip

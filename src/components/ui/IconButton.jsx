function IconButton({ label, children }) {
  return (
    <button
      type="button"
      className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50"
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  )
}

export default IconButton

const styles = {
  primary:
    'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700',
  ghost:
    'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 active:bg-gray-100',
}

function Button({ variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    />
  )
}

export default Button

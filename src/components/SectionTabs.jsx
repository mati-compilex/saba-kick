function SectionTabs({ tabs, activeTab, onChange }) {
  const icons = {
    hot: '🔥',
    football: '⚽',
    basketball: '🏀',
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange?.(tab.id)}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            activeTab === tab.id
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300'
          }`}
        >
          <span className="text-sm">{icons[tab.id]}</span>
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default SectionTabs

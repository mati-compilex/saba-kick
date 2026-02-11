  import fireIcon from '../assets/fireIcon.png'
  import footballIcon from '../assets/footballIcon.png'
  import cockfightingIcon from '../assets/cockfightingIcon.png'
function SectionTabs({ tabs, activeTab, onChange }) {

  const icons = {
    hot: fireIcon,
    football: footballIcon,
    basketball: cockfightingIcon,
  }

  return (
    <div className="flex flex-wrap justify-between bg-[#f2f2f2] rounded-[16px] p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange?.(tab.id)}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            activeTab === tab.id
              ? 'bg-[#ffffff] text-[#4b4b4b ]'
              : 'bg-transparent text-gray-700'
          }`}
        >
          <span className="text-xs"><img src={icons[tab.id]} alt={tab.label} className="w-5 h-5" /></span>{tab.label}
        </button>
      ))}
    </div>
  )
}

export default SectionTabs

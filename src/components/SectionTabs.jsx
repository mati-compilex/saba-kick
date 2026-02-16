import fireIcon from '../assets/fireIcon.png'
import footballIcon from '../assets/footballIcon.png'
import cockfightingIcon from '../assets/cockfightingIcon.png'

function SectionTabs({ tabs, activeTab, onChange, isIcons = true, isLive = false }) {

  const icons = {
    hot: fireIcon,
    football: footballIcon,
    cockfighting: cockfightingIcon,
  }

  return (
    <div className="flex flex-wrap justify-between lg:justify-center lg:gap-2 bg-lightGray rounded-[16px] p-1 md:w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange?.(tab.id)}
          className={`relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-normal transition ${activeTab === tab.id
              ? 'bg-white text-[#4b4b4b]'
              : 'bg-transparent text-gray-700'
            }`}
        >
          {tab.isLive && (
            <span className="absolute top-[-12px] right-[-4px] px-1 bg-[#d9001b] rounded-[5px] text-white font-bold  border-2 border-white">Live</span>
          )}
          {isIcons && (
            <span className="text-xs">
              <img src={icons[tab.id]} alt={tab.label} className="w-5 h-5" />
            </span>
          )}
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default SectionTabs
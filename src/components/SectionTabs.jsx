

function SectionTabs({ tabs, activeTab, onChange, isIcons = true ,className}) {
  return (
    <div className="flex flex-wrap lg:justify-center gap-2 bg-lightGray md:w-fit border-b-2 border-neutral_variant-20">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange?.(tab.id)}
          className={`relative flex items-center gap-1.5 px-1 py-1.5 text-xs font-normal label-m transition ${className} ${activeTab === tab.id
              ? '!text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#EDF9FF] after:via-[#4CC0FF] after:to-[#5787FF]'
              : ' !text-neutral-60'
            }`}
        >
          {tab.isLive && (
            <span className="absolute top-[-12px] right-[-15px] px-1 bg-[#d9001b] rounded-[5px] text-white font-bold border-2 border-white">
              Live
            </span>
          )}

          {tab.icon && (
            <span className="flex items-center">
              {typeof tab.icon === "string" ? (
                <img src={tab.icon} alt={tab.label} className="w-5 h-5" />
              ) : (
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-primary-60' : 'text-neutral-60'}`} />
              )}
            </span>
          )}

          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default SectionTabs
import { useState } from "react";
import SectionTabs from "../SectionTabs.jsx";
import LiveStream from "./LiveStream.jsx";
import { LiveDotIcon } from "../../assets/icons/LiveDot.jsx";

const liveTabs = [
  { id: "cpc1", label: "CPC 2", isLive: true },
  { id: "cpc2", label: "CPC 03", isLive: true },
  { id: "fg1", label: "FG1", isLive: false },
  { id: "fg2", label: "FG2", isLive: false },
  { id: "cpc4", label: "CPC 04", isLive: false },
];

const tabs = [
  { id: "cpc1", label: "CPC 2" },
  { id: "cpc2", label: "CPC 03" },
  { id: "fg1", label: "FG1" },
  { id: "fg2", label: "FG2" },
  { id: "cpc4", label: "CPC 04" },
];

export function ChannelTabs({ tabs, activeTab, onChange, isIcons = true, className }) {
  return (
    <div className="flex flex-wrap justify-between lg:justify-center lg:gap-2 md:w-fit ">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange?.(tab.id)}
          className={`relative flex items-center gap-1.5 px-3  text-xs font-normal rounded-full h-[32px] bg-emphasis label-m transition border border-variant-20 ${className} ${activeTab === tab.id
            ? '!text-neutral-95 border  before:absolute before:inset-0 before:bg-nv-45deg before:-z-10 before:rounded-lg'
            : ' !text-neutral-60'
            }`}
            style={{borderImageSource:"linear-gradient(108.69deg, rgba(126, 132, 151, 0.82) 0.46%, rgba(83, 91, 117, 0) 50.27%, rgba(80, 86, 98, 0.42) 100.08%)"}}
        >
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
          {tab.isLive && (
            <LiveDotIcon />
          )}
        </button>
      ))}
    </div>
  )
}
function Channels({ isLive }) {
  const [activeTab, setActiveTab] = useState("cpc1");

  const onTabChange = (tabId) => {
    setActiveTab(tabId);
  };





  return (
    <>
      <div className="">
        <ChannelTabs tabs={isLive ? liveTabs : tabs}
          activeTab={activeTab} onChange={onTabChange} isIcons={false}
          className="bg-emphasis before:absolute before:inset-0 before:bg-nv-45deg before:-z-10 before:rounded-lg" />
      </div>
    </>
  );
}

export default Channels;
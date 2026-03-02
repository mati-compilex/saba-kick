import { useState } from "react";
import SectionTabs from "../SectionTabs.jsx";
import LiveStream from "./LiveStream.jsx";
import { LiveDotIcon } from "../../assets/icons/LiveDot.jsx";

const liveTabs = [
  { id: "cpc1", label: "CPC 1", url: "https://live3.krikyabd.me/hls/stream.m3u8", isLive: false },
  { id: "cpc2", label: "CPC 2", url: "https://live6.krikyabd.me/hls/stream.m3u8", isLive: false },
  { id: "cpc3", label: "CPC 3", url: "https://live2.krikyabd.me/hls/stream.m3u8", isLive: false },
  { id: "cpc4", label: "CPC 4", url: "https://live4.krikyabd.me/hls/stream.m3u8", isLive: true },
  { id: "cpc5", label: "CPC 5", url: "https://live5.krikyabd.me/hls/stream.m3u8", isLive: true },
  { id: "fg3", label: "FG 3", url: "https://live1.krikyabd.me/hls/stream.m3u8", isLive: true },
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
    <div className="flex gap-2 flex-nowrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange?.(tab.id)}
          className={`relative flex items-center gap-1.5 px-3 text-xs font-normal rounded-full h-[32px] bg-emphasis label-m transition border border-variant-20 whitespace-nowrap flex-shrink-0 ${className} ${activeTab === tab.id
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
function Channels({ isLive, onStreamChange }) {
  const [activeTab, setActiveTab] = useState("cpc1");

  const onTabChange = (tabId) => {
    setActiveTab(tabId);
    const selectedTab = liveTabs.find(tab => tab.id === tabId);
    if (selectedTab && onStreamChange) {
      onStreamChange(selectedTab.url);
    }
  };





  return (
    <>
      <div className={`overflow-x-scroll scrollbar-hide scrollbar-none`}
        style={ isLive ? { maxWidth: 'calc(100vw - 12.5rem)' } : {} }
      >
        <ChannelTabs tabs={liveTabs}
          activeTab={activeTab} onChange={onTabChange} isIcons={false}
          className="bg-emphasis before:absolute before:inset-0 before:bg-nv-45deg before:-z-10 before:rounded-lg" />
      </div>
    </>
  );
}

export default Channels;
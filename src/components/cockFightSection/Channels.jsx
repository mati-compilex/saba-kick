import { useState } from "react";
import SectionTabs from "../SectionTabs.jsx";
import LiveStream from "./LiveStream.jsx";

const liveTabs = [
  { id: "cpc1", label: "CPC 2", isLive: true },
  { id: "cpc2", label: "CPC 03", isLive: true },
  { id: "fg1", label: "FG1", isLive: false },
  { id: "fg2", label: "FG2", isLive: false },
  { id: "cpc4", label: "CPC 04", isLive: false },
];

const tabs = [
  { id: "cpc1", label: "CPC 2"},
  { id: "cpc2", label: "CPC 03" },
  { id: "fg1", label: "FG1"},
  { id: "fg2", label: "FG2"},
  { id: "cpc4", label: "CPC 04"},
];

function Channels({isLive}) {
  const [activeTab, setActiveTab] = useState("cpc1");

  const onTabChange = (tabId) => {
    setActiveTab(tabId);
  };


  return (
    <>
      <div className="">
        <SectionTabs tabs={isLive ? liveTabs : tabs} 
        activeTab={activeTab} onChange={onTabChange} isIcons={false}/>
      </div>
    </>
  );
}

export default Channels;
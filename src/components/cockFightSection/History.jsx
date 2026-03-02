import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import HistoryCard from "./HistoryCard.jsx";
import HLSStream from "../HLSStream.jsx";
import { ArrowRightIcon } from "../../assets/icons/arrowRight.jsx";

const streamData = [
  {
    id: 1,
    label: "CPC 1",
    url: "https://live3.krikyabd.me/hls/stream.m3u8",
    isLive: false,
  },
  {
    id: 2,
    label: "CPC 2",
    url: "https://live6.krikyabd.me/hls/stream.m3u8",
    isLive: false,
  },
  {
    id: 3,
    label: "CPC 3",
    url: "https://live2.krikyabd.me/hls/stream.m3u8",
    isLive: false,
  },
  {
    id: 4,
    label: "CPC 4",
    url: "https://live4.krikyabd.me/hls/stream.m3u8",
    isLive: true,
  },
  {
    id: 5,
    label: "CPC 5",
    url: "https://live5.krikyabd.me/hls/stream.m3u8",
    isLive: true,
  },
  {
    id: 6,
    label: "FG 3",
    url: "https://live1.krikyabd.me/hls/stream.m3u8",
    isLive: true,
  },
];

const historyData = [
  {
    id: 1,
    label: "CPC 3",
    status: "result",
  },
  {
    id: 2,
    label: "FG 2",
    status: "result",
  },
  {
    id: 3,
    label: "CPC 1",
    status: "live",
  },
  {
    id: 4,
    label: "CPC 2",
    status: "live",
  },
  {
    id: 5,
    label: "FG 1",
    status: "coming",
    time: "6:30 PM",
  },
  {
    id: 6,
    label: "FG 1",
    status: "coming",
    time: "6:45 PM",
  },
  {
    id: 7,
    label: "CPC 1",
    status: "coming",
    time: "7:00 PM",
  },
  {
    id: 8,
    label: "CPC 2",
    status: "coming",
    time: "7:15 PM",
  },
];
const History = () => {
  const [activeStream, setActiveStream] = useState(streamData[0]);

  return (
    <>
      <div className="mb-4">
        <HLSStream
          url={activeStream.url}
          className="w-full rounded-lg overflow-hidden"
        />
      </div>

      <div className="bg-lightGray rounded-[17px] py-[13px] mb-[51px]">
        <div className="px-3 pb-3 mb-2">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-[46px] h-[46px] pt-[6px] pr-3 pb-[6px] pl-3 rounded-[36px] border bg-emphasis"
              style={{
                borderColor: "rgba(237, 249, 255, 0.82)",
              }}
            >
              <ReactCountryFlag countryCode="KH" svg />
            </div>
            <span className="label-m !text-neutral-95">Cambodia</span>
          </div>
        </div>

        <div className="px-3 mb-3 grid grid-cols-3 gap-2">
          {streamData.map((stream) => (
            <button
              key={stream.id}
              onClick={() => setActiveStream(stream)}
              className={`bg-normal rounded-lg p-2 border transition-colors ${
                activeStream.id === stream.id
                  ? "border-primary-40"
                  : "border-neutral-30 hover:border-primary-40"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {stream.isLive && (
                  <div className="w-2 h-2 bg-red-40 rounded-full"></div>
                )}
                <span className="label-m !text-neutral-95">{stream.label}</span>
              </div>
            </button>
          ))}
        </div>

        {historyData.map((item) => (
          <HistoryCard
            key={item.id}
            status={item.status}
            label={item.label}
            time={item.time}
          />
        ))}
        <div className="mt-3">
          <button className="w-full flex items-center justify-center bg-strong-45deg rounded-lg py-2 px-3 pl-4 border border-neutral-30">
            <span className="label-m !text-neutral-70 mr-[10px]">view all</span>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </>
  );
};
export default History;

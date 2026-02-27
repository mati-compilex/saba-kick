import React from "react";
import HistoryCard from "./HistoryCard.jsx";
import { ArrowRightIcon } from "../../assets/icons/arrowRight.jsx";

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
  return (
    <div className="bg-lightGray rounded-[17px] p-[13px] mb-[51px]">
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
  );
};
export default History;

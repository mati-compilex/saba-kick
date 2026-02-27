import { LiveBadge } from "../LiveBadge";

function HistoryCard({ status, label, time }) {
  return (
    <div className="flex items-center bg-normal rounded-lg border-r border-b border-l border-nv-45deg p-3 mb-1">
      <div className="min-w-[80px] flex items-center">
        {status === "result" ? (
          <div className="label-m !text-neutral-60">Ended</div>
        ) : status === "live" ? (
          <div>{LiveBadge}</div>
        ) : (
          <div className="label-m !text-neutral-95">{time}</div>
        )}
      </div>
      <div className="border-r border-neutral-30 h-6 mx-2"></div>
      <div className="title-l !text-neutral-95">{label}</div>
    </div>
  );
}

export default HistoryCard;

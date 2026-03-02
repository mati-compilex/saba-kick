import { LiveBadge } from "../LiveBadge";

function HistoryCard({ status, label, time }) {
  return (
    <div className="relative rounded-lg mb-1" style={{
      background: 'linear-gradient(108.69deg, rgba(126, 132, 151, 0.82) 0.46%, rgba(83, 91, 117, 0) 50.27%, rgba(80, 86, 98, 0.42) 100.08%)',
      padding: '1px',
      paddingTop: '0px'
    }}>
      <div className="flex items-center bg-normal rounded-lg p-3">
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
    </div>
  );
}

export default HistoryCard;

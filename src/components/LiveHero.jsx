import { useState } from "react";
import Badge from "./ui/Badge.jsx";
import Card from "./ui/Card.jsx";
import MediaPlaceholder from "./MediaPlaceholder.jsx";

function LiveHero({ match, showScreen = false }) {
  const [isScreenVisible, setIsScreenVisible] = useState(showScreen);
  const oddsHome = match.oddsHome ?? "1.22";
  const oddsAway = match.oddsAway ?? "4.3";

  return (
    <Card className="p-4 relative !bg-lightGray mt-2">
      {/* <div className="flex items-center justify-between text-[10px] text-gray-500">
        <span className="font-semibold uppercase tracking-wide">Advanced</span>
        <Badge tone="live">{match.status ?? 'Live'}</Badge>
      </div> */}
      <div className="absolute -top-3 left-[0.5rem]">
        <span className="rounded-md bg-dark px-2 py-1 text-xs font-semibold text-white shadow-md">
          Hottest Match of the day
        </span>
      </div>
      <div
        onClick={() => setIsScreenVisible(!isScreenVisible)}
        className="cursor-pointer"
      >
        <div className="mt-2 text-center text-[11px] text-gray-500">
          {match.league}
        </div>
        <div className="mt-1 text-center text-sm font-semibold text-gray-900">
          {match.home} - {match.away}
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
          <div className="flex flex-col items-center gap-2">
            <MediaPlaceholder
              className="h-12 w-12"
              text="Player"
              textClassName="text-[11px]"
            />
          </div>
          <div className="text-lg font-bold text-gray-800 flex flex-col justify-center"><span className="text-lg font-normal text-gray-800 leading-none text-[12px]">Today </span>
            <span className="  !text-[13px]">
              3:30 PM
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MediaPlaceholder
              className="h-12 w-12"
              text="Player"
              textClassName="text-[11px]"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 ">
          <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-xs font-semibold text-gray-800">
            <span className="text-gray-500">W1</span>
            <span>{oddsHome}</span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-white  px-4 py-3 text-xs font-semibold text-gray-800">
            <span className="text-gray-500">W2</span>
            <span>{oddsAway}</span>
          </div>
        </div>
      </div>
      <MediaPlaceholder
        className={`h-48 bg-white transition-all duration-500 ${isScreenVisible ? "opacity-100 mt-6" : "!h-0 opacity-0"}`}
        text="LIVE SCREEN"
        textClassName="text-[20px] font-semibold"
      />
    </Card>
  );
}

export default LiveHero;

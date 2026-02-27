import { useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import MediaPlaceholder from "./MediaPlaceholder.jsx";
import { ReplayIcon } from "../assets/icons/replay.jsx";
import { ReportIcon } from "../assets/icons/report.jsx";
import { ShareIcon } from "../assets/icons/share.jsx";
import { ThumbUpIcon } from "../assets/icons/thumbUp.jsx";
import { ThumbUpFillIcon } from "../assets/icons/thumbUpFill.jsx";
import { ThumbDownIcon } from "../assets/icons/thumbDown.jsx";

function LiveHero({ match, showScreen = true, videoUrl = "" }) {
  const videoRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1102);
  const [isScreenVisible, setIsScreenVisible] = useState(showScreen);
  const oddsHome = match.oddsHome ?? "1.22";
  const oddsAway = match.oddsAway ?? "4.3";
  const isLive = (match.status ?? "").toLowerCase() === "live";
  const scoreText =
    typeof match.score === "string"
      ? match.score
      : `${match.scoreHome ?? ""} : ${match.scoreAway ?? ""}`;
  const videoSrc = match.videoUrl ?? match.video ?? videoUrl ?? "";
  const posterSrc = match.poster ?? match.image ?? match.screenImage ?? "";
  return (
    <div className="bg-heroSection relative">
      <div
        className="pt-6 pb-4 px-6"
        onClick={() => setIsScreenVisible((v) => !v)}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col items-center w-[84px]">
            {match.homeLogo ? (
              <img
                src={match.homeLogo}
                alt={match.home}
                className="w-[64px] h-[64px] mb-2 rounded-xl object-contain"
              />
            ) : (
              <MediaPlaceholder
                className="w-[64px] h-[64px] mb-2 rounded-xl"
                text="Logo"
                textClassName="text-[8px] font-semibold text-white/80"
              />
            )}
            <div className="label-sm text-center ">{match.home}</div>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-neutral-60 font-normal text-[13px] leading-3">
                W1
              </span>
              <span className="text-primary-60 font-normal text-[13px] leading-3">
                {oddsHome}
              </span>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-[26px] font-medium text-neutral-95">
              {isLive ? scoreText : (match.time ?? "")}
            </div>
            <div className="mt-1 flex items-center gap-1 label-country">
              {match.countryCode ? (
                <ReactCountryFlag
                  countryCode={match.countryCode}
                  svg
                  style={{ width: "20px", height: "14px", borderRadius: "4px" }}
                />
              ) : null}
              <span>{match.league}</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-[84px]">
            {match.awayLogo ? (
              <img
                src={match.awayLogo}
                alt={match.away}
                className="w-[64px] h-[64px] mb-2 rounded-xl object-contain"
              />
            ) : (
              <MediaPlaceholder
                className="w-[64px] h-[64px] mb-2 rounded-xl"
                text="Logo"
                textClassName="text-[8px] font-semibold text-white/80"
              />
            )}
            <div className="label-sm text-center ">{match.away}</div>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-neutral-60 font-normal text-[13px] leading-3">
                W2
              </span>
              <span className="text-primary-60 font-normal text-[13px] leading-3">
                {oddsAway}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" pb-3">
        {videoSrc && isScreenVisible && (
          <div className="relative overflow-hidden bg-black">
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-[220px] object-cover"
              poster={posterSrc}
            />
            {isLive && (
              <div className="absolute top-2 right-2">
                <span className="relative inline-flex items-center gap-1 px-2 py-1 rounded-[20px] bg-red-30 label-live before:content-[''] before:block before:w-1 before:h-1 before:bg-red-90 before:rounded-full">
                  LIVE
                </span>
              </div>
            )}
          </div>
        )}
      </div>
      {videoSrc && isScreenVisible && (
        <div className="bg-strong-45deg -mt-3 py-4">
          <div className="flex items-center justify-between px-3">
            <div className="bg-nv-45deg p-[1px] rounded-[20px]">
              <div className="bg-emphasis rounded-[inherit] flex gap-2 items-center p-2">
                <ReportIcon height={16} width={16} color="#B4B7BC" />
                <span className="text-neutral-70 font-medium text-[11px] leading-3">
                  Error report
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-nv-45deg p-[1px] rounded-[20px]">
                <div className="bg-emphasis rounded-[inherit] flex gap-2 items-center p-2">
                  <button
                    className="flex items-center gap-1 pr-3 border-r-2 border-neutral_variant-20"
                    onClick={() => {
                      if (liked) {
                        setLikes((v) => v - 1);
                        setLiked(false);
                      } else {
                        setLikes((v) => v + 1);
                        setLiked(true);
                      }
                    }}
                  >
                    {liked ? (
                      <ThumbUpFillIcon height={18} width={18} color="#F3F3F4" />
                    ) : (
                      <ThumbUpIcon height={18} width={18} color="#F3F3F4" />
                    )}
                    <span className="text-neutral-95 font-medium text-[11px] leading-3">
                      {likes}
                    </span>
                  </button>

                  <button className="flex items-center gap-1">
                    <ThumbDownIcon height={18} width={18} color="#F3F3F4" />
                  </button>
                </div>
              </div>
              <div className="bg-nv-45deg p-[1px] rounded-[20px]">
                <div className="bg-emphasis rounded-[inherit] flex gap-2 items-center p-2">
                  <ShareIcon height={18} width={18} color="#B4B7BC" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveHero;

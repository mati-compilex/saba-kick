import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import MediaPlaceholder from "./MediaPlaceholder.jsx";

function HotMatches({ matches = [] }) {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggle = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div className="p-4  pt-4 pb-2 px-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {matches.slice(0, 3).map((m, idx) => {
          const id = m.id ?? `${m.home}-${m.away}-${idx}`;
          const isExpanded = expandedIds.includes(id);
          const isLive = (m.status ?? "").toLowerCase() === "live";
          const scoreText =
            typeof m.score === "string"
              ? m.score
              : `${m.scoreHome ?? ""} : ${m.scoreAway ?? ""}`;

          return (
            <div className="bg-nv-45deg p-[1px] rounded-[20px] flex flex-col">
              <div className="bg-emphasis rounded-[inherit] relative pt-6 pb-5 px-2 flex-1">
                <div onClick={() => toggle(id)} className="cursor-pointer">
                  {isLive && (
                    <div className="absolute left-1/2 -top-3 -translate-x-1/2">
                      <span className="relative inline-flex items-center gap-1 px-2 py-1 rounded-[20px] bg-red-30 label-live before:content-[''] before:block before:w-1 before:h-1 before:bg-red-90 before:rounded-full">
                        LIVE
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col items-center w-[84px]">
                      {m.homeLogo ? (
                        <img
                          src={m.homeLogo}
                          alt={m.home}
                          className="w-[64px] h-[64px] mb-2 rounded-xl object-contain"
                        />
                      ) : (
                        <MediaPlaceholder
                          className="w-[64px] h-[64px] mb-2 rounded-xl"
                          text="Logo"
                          textClassName="text-[8px] font-semibold text-white/80"
                        />
                      )}
                      <div className="label-sm text-center ">{m.home}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div
                        className={`${isLive ? "text-[26px]" : "text-[20px]"} font-medium text-neutral-95`}
                      >
                        {isLive ? scoreText : m.time}
                      </div>
                      {!isLive && (
                        <div className="text-[13px] font-medium text-neutral-60">
                          {m.dateText}
                        </div>
                      )}
                      <div className="mt-1 flex items-center gap-1 label-country">
                        {m.countryCode ? (
                          <ReactCountryFlag
                            countryCode={m.countryCode}
                            svg
                            style={{
                              width: "20px",
                              height: "14px",
                              borderRadius: "4px",
                            }}
                          />
                        ) : m.flagSrc ? (
                          <img
                            src={m.flagSrc}
                            alt="flag"
                            className="w-5 h-4 rounded object-cover"
                          />
                        ) : m.flagEmoji ? (
                          <span className="text-[14px] leading-none">
                            {m.flagEmoji}
                          </span>
                        ) : null}
                        <span>{m.league}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-[84px]">
                      {m.awayLogo ? (
                        <img
                          src={m.awayLogo}
                          alt={m.away}
                          className="w-[64px] h-[64px] mb-2 rounded-xl object-contain"
                        />
                      ) : (
                        <MediaPlaceholder
                          className="w-[64px] h-[64px] mb-2 rounded-xl"
                          text="Logo"
                          textClassName="text-[8px] font-semibold text-white/80"
                        />
                      )}
                      <div className="label-sm text-center ">{m.away}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HotMatches;

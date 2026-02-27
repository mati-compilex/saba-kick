import MediaPlaceholder from "./MediaPlaceholder.jsx";
import { CountryFlagIcon } from "../assets/icons/countryFlag.jsx";
import { ReplayIcon } from "../assets/icons/replay.jsx";
import { LiveBadge } from "./LiveBadge.jsx";

function MatchAccordionItem({ comp, isExpanded, onToggle, isLastItem }) {
  return (
    <div
      className={` ${comp.status === "result" ? "cursor-pointer" : ""}`}
      onClick={onToggle}
    >
      {isExpanded ? (
        <div className="border  bg-white p-4 relative pt-8">
          <div
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="cursor-pointer"
          >
            <div className="absolute top-2 left-4">
              <MediaPlaceholder
                className="w-10 h-7"
                text="Country Flag"
                textClassName="text-[6px] font-semibold"
              />
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="bg-grayMedium text-dark px-6 py-1 rounded-b-xl font-bold text-sm shadow-sm">
                Ended
              </div>
            </div>

            <div className="flex justify-center mb-6 mt-2">
              <div className="bg-grayLight px-3 py-1.5 rounded-full text-[9px] font-medium text-dark">
                {comp.league}
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex flex-col items-center gap-2">
                <MediaPlaceholder
                  className="w-16 h-16"
                  text="LEAGUE LOGO"
                  textClassName="text-[8px] font-bold"
                />
                <div className="text-xs font-medium text-gray-900">
                  {comp.home}
                </div>
              </div>
              <div className="rounded-full bg-gray-900 px-4 py-2 text-sm font-bold text-white -mt-4">
                {comp.homeScore} : {comp.awayScore}
              </div>
              <div className="flex flex-col items-center gap-2">
                <MediaPlaceholder
                  className="w-16 h-16"
                  text="LEAGUE LOGO"
                  textClassName="text-[8px] font-bold"
                />
                <div className="text-xs font-medium text-gray-900">
                  {comp.away}
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-[400px] opacity-100 mt-4">
            <MediaPlaceholder
              className="h-96 w-full"
              text="WATCH AGAIN"
              textClassName="text-xl font-bold text-dark"
            />
          </div>
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden ">
          <div
            className="bg-neutral_variant-10 px-3 py-2  flex items-center justify-between gap-2"
            style={{ borderBottomWidth: "0px" }}
          >
            <div className="flex items-center gap-2">
              {CountryFlagIcon}
              <span className="label-m !text-white">{comp.league}</span>
            </div>
            {comp.status === "coming" ? (
              <div className="bg-green-5 !text-green-50 label-m px-2 py-0.5 rounded-[20px] min-w-[112px] text-center">
                Coming soon
              </div>
            ) : comp.status === "live" ? (
              LiveBadge
            ) : (
              <div className="!text-neutral-95 label-m flex items-center gap-1">
                Replay
                <svg
                  className="w-[13.33px] h-[13.33px]"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C7.43946 20 5.10153 19.036 3.33301 17.4531C2.92168 17.0848 2.88662 16.4525 3.25488 16.041C3.62321 15.6297 4.25554 15.5947 4.66699 15.9629C6.08301 17.2303 7.95041 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C7.04022 2 4.45508 3.6083 3.07129 6H5.5C6.05228 6 6.5 6.44772 6.5 7C6.5 7.55228 6.05228 8 5.5 8H1C0.44772 8 0 7.55228 0 7V2.5C0 1.94772 0.44772 1.5 1 1.5C1.55228 1.5 2 1.94772 2 2.5V4C3.82393 1.57176 6.72762 0 10 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="bg-normal p-3 flex items-center justify-between gap-3">
            {comp.status === "coming" ? (
              <>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <MediaPlaceholder
                      className="w-6 h-6"
                      text="Logo"
                      textClassName="text-[6px]"
                    />
                    <span className="label-m !text-neutral-95">
                      {comp.home}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MediaPlaceholder
                      className="w-6 h-6"
                      text="Logo"
                      textClassName="text-[6px]"
                    />
                    <span className="label-m !text-neutral-95">
                      {comp.away}
                    </span>
                  </div>
                </div>
                <div className="grid gap-3 text-right">
                  <div className="label-m !text-neutral-60">
                    {comp.date || "FRI, 02/03"}
                  </div>
                  <div className="label-m !text-neutral-95">
                    {comp.time || "6:30 PM"}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <MediaPlaceholder
                      className="w-6 h-6"
                      text="Logo"
                      textClassName="text-[6px]"
                    />
                    <span className="label-m !text-neutral-95">
                      {comp.home}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MediaPlaceholder
                      className="w-6 h-6"
                      text="Logo"
                      textClassName="text-[6px]"
                    />
                    <span className="label-m !text-neutral-95">
                      {comp.away}
                    </span>
                  </div>
                </div>
                <div className="bg-normal min-w-[5rem] h-8 px-3 py-1 rounded-[20px] border border-neutral_variant-20 flex items-center justify-center headline-s !text-neutral-95">
                  {comp.homeScore} : {comp.awayScore}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MatchAccordionItem;

import MediaPlaceholder from "./MediaPlaceholder.jsx";

function MatchAccordionItem({ comp, isExpanded, onToggle, isLastItem }) {
  return (
    <div
      className={`${!isLastItem ? "border-b border-[#797979] pb-3" : ""} ${
        comp.status === "result" ? "cursor-pointer hover:bg-gray-50" : ""
      }`}
      onClick={onToggle}
    >
      {isExpanded ? (
        <div className="border border-[#797979] bg-white p-4 relative pt-8">
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
              <div className="bg-[#aaaaaa] text-dark px-6 py-1 rounded-b-xl font-bold text-sm shadow-sm">
                Ended
              </div>
            </div>

            <div className="flex justify-center mb-6 mt-2">
              <div className="bg-[#d7d7d7] px-3 py-1.5 rounded-full text-[9px] font-medium text-dark">
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
              textClassName="text-xl font-bold text-[#333333]"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="text-sm font-medium text-gray-700 mb-2">
            {comp.league}
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <MediaPlaceholder
                  className="w-5 h-4"
                  text="Flag"
                  textClassName="text-[4px]"
                />
                <span className="text-sm text-gray-600">{comp.home}</span>
              </div>
              <div className="flex items-center gap-2">
                <MediaPlaceholder
                  className="w-5 h-4"
                  text="Flag"
                  textClassName="text-[4px]"
                />
                <span className="text-sm text-gray-600">{comp.away}</span>
              </div>
            </div>

            {comp.status === "coming" ? (
              <div className="text-right">
                <div className="text-[10px] text-[#63a103] font-medium mb-1">
                  Coming Shortly
                </div>
                <div className="bg-lightGray text-dark text-[10px] px-3 py-1 rounded-full">
                  {comp.time}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  Result
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="bg-lightGray rounded-lg px-2 py-1 flex flex-col items-center justify-center text-xs text-dark min-w-[24px]">
                  <div>{comp.homeScore}</div>
                  <div>{comp.awayScore}</div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MatchAccordionItem;

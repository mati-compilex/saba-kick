import { useState } from "react";
import Button from "./ui/Button.jsx";
import MatchCard from "./MatchCard.jsx";
import MediaPlaceholder from "./MediaPlaceholder.jsx";

function UpcomingSection({ matches, mode = "placeholder" }) {
  const [showScreen, setShowScreen] = useState(false);
  const [showMoreCompetitions, setShowMoreCompetitions] = useState(false);
  const [expandedMatchId, setExpandedMatchId] = useState(null);
  const [isUpcomingOpen, setIsUpcomingOpen] = useState(true);
  const [isEndedOpen, setIsEndedOpen] = useState(true);
  const hasMatches = matches.length > 0;
  const showPlaceholder = mode === "placeholder";
  const showList = mode === "list";

  const handleMatchClick = (match) => {
    if (match.status === "result") {
      setExpandedMatchId(expandedMatchId === match.id ? null : match.id);
    }
  };

  const moreCompetitionsData = [
    {
      id: 1,
      league: "Santoish English Football League",
      home: "Viktoria Pizen",
      away: "Porto",
      status: "coming",
      time: "13:00 PM 29th Jan",
    },
    {
      id: 2,
      league: "VN Football League",
      home: "Viktoria Pizen",
      away: "Porto",
      status: "coming",
      time: "13:00 PM 29th Jan",
    },
    {
      id: 3,
      league: "PHP Championship",
      home: "Viktoria Pizen",
      away: "Porto",
      status: "coming",
      time: "13:00 PM 29th Jan",
    },
    {
      id: 4,
      league: "Santoish English Football League",
      home: "Viktoria Pizen",
      away: "Porto",
      status: "coming",
      time: "13:00 PM 29th Jan",
    },
    {
      id: 5,
      league: "Santoish English Football League",
      home: "Viktoria Pizen",
      away: "Porto",
      status: "result",
      homeScore: 2,
      awayScore: 1,
    },
    {
      id: 6,
      league: "PHP Championship",
      home: "Viktoria Pizen",
      away: "Porto",
      status: "result",
      homeScore: 2,
      awayScore: 1,
    },
    {
      id: 7,
      league: "VN Football League",
      home: "Viktoria Pizen",
      away: "Porto",
      status: "result",
      homeScore: 2,
      awayScore: 1,
    },
    {
      id: 8,
      league: "New Castle Football League",
      home: "Viktoria Pizen",
      away: "Porto",
      status: "result",
      homeScore: 2,
      awayScore: 1,
    },
    {
      id: 9,
      league: "Serie A",
      home: "Juventus",
      away: "Milan",
      status: "coming",
      time: "15:00 PM 30th Jan",
    },
    {
      id: 10,
      league: "La Liga",
      home: "Barcelona",
      away: "Real Madrid",
      status: "coming",
      time: "20:00 PM 30th Jan",
    },
    {
      id: 11,
      league: "Bundesliga",
      home: "Bayern",
      away: "Dortmund",
      status: "result",
      homeScore: 3,
      awayScore: 3,
    },
    {
      id: 12,
      league: "Ligue 1",
      home: "PSG",
      away: "Lyon",
      status: "result",
      homeScore: 1,
      awayScore: 0,
    },
  ];

  const upcomingMatches = moreCompetitionsData.filter(m => m.status === "coming");
  const endedMatches = moreCompetitionsData.filter(m => m.status === "result");

  const renderMatchList = (list) => (
    <div className="space-y-4">
      {list.map((comp, index) => (
        <div
          key={comp.id}
          className={`${index !== list.length - 1 ? "border-b border-[#797979] pb-3" : ""} ${comp.status === "result" ? "cursor-pointer hover:bg-gray-50" : ""}`}
          onClick={() => handleMatchClick(comp)}
        >
          {expandedMatchId === comp.id ? (
            <div className="border border-[#797979] bg-white p-4 relative pt-8">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedMatchId(null);
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
                    <span className="text-sm text-gray-600">
                      {comp.home}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MediaPlaceholder
                      className="w-5 h-4"
                      text="Flag"
                      textClassName="text-[4px]"
                    />
                    <span className="text-sm text-gray-600">
                      {comp.away}
                    </span>
                  </div>
                </div>

                {comp.status === "coming" ? (
                  <div className="text-right">
                    <div className="text-[10px] text-[#63a103] font-medium mb-1">
                      Coming Shortly
                    </div>
                    <div className="bg-[#f2f2f2] text-dark text-[10px] px-3 py-1 rounded-full">
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
                    <div className="bg-[#f2f2f2] rounded-lg px-2 py-1 flex flex-col items-center justify-center text-xs text-dark min-w-[24px]">
                      <div>{comp.homeScore}</div>
                      <div>{comp.awayScore}</div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold text-gray-900">
        Upcoming & Ended
      </div>
      {showPlaceholder ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div
            onClick={() => setShowScreen(!showScreen)}
            className="cursor-pointer"
          >
            <div className="relative flex items-center justify-between mb-3">
              <MediaPlaceholder
                className="w-10 h-7"
                text="Country Flag"
                textClassName="text-[6px] font-semibold"
              />

              <div className="absolute left-1/2 -top-4 -translate-x-1/2">
                <div className="bg-[#aaaaaa] text-[#cc0017] px-6 py-0.5 rounded-b-xl font-bold text-sm shadow-sm">
                  LIVE
                </div>
              </div>

              <div className="rounded-full bg-[#e5e5e5] px-3 py-1 text-xs text-dark font-medium">
                13:00 ~ 20:00
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex flex-col items-center">
                <MediaPlaceholder
                  className="w-[52px] h-12 mb-2"
                  text="League Logo"
                  textClassName="text-[8px] font-semibold"
                />
                <div className="text-xs text-gray-900">League Name</div>
              </div>
              <div className="rounded-full bg-gray-900 px-4 py-2 text-sm font-bold text-white -mt-4">
                3 : 2
              </div>
              <div className="flex flex-col items-center">
                <MediaPlaceholder
                  className="w-[52px] h-12 mb-2"
                  text="League Logo"
                  textClassName="text-[8px] font-semibold"
                />
                <div className="text-xs text-gray-900">League Name</div>
              </div>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${showScreen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
          >
            <MediaPlaceholder
              className="h-96"
              text="正在LIVE的內容"
              textClassName="text-lg"
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${!showScreen ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
          >
            <div className="rounded bg-[#f2f2f2] p-3 text-sm font-medium text-dark">
              Europa League
            </div>
          </div>
        </div>
      ) : null}

      {showMoreCompetitions ? (
        <div  className="rounded-2xl bg-[#f2f2f2] p-3">
        <div className="rounded-2xl bg-white p-4 space-y-4">
          {moreCompetitionsData.map((comp, index) => (
            <div
              key={comp.id}
              className={`${index !== moreCompetitionsData.length - 1 ? "border-b border-[#797979] pb-3" : ""} ${comp.status === "result" ? "cursor-pointer hover:bg-gray-50" : ""}`}
              onClick={() => handleMatchClick(comp)}
            >
              {expandedMatchId === comp.id ? (
                <div className="border border-[#797979] bg-white p-4 relative pt-8">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedMatchId(null);
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
                      className="h-64 w-full"
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
                        <span className="text-sm text-gray-600">
                          {comp.home}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MediaPlaceholder
                          className="w-5 h-4"
                          text="Flag"
                          textClassName="text-[4px]"
                        />
                        <span className="text-sm text-gray-600">
                          {comp.away}
                        </span>
                      </div>
                    </div>

                    {comp.status === "coming" ? (
                      <div className="text-right">
                        <div className="text-[10px] text-[#63a103] font-medium mb-1">
                          Coming Shortly
                        </div>
                        <div className="bg-[#f2f2f2] text-dark text-[10px] px-3 py-1 rounded-full">
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
                        <div className="bg-[#f2f2f2] rounded-lg px-2 py-1 flex flex-col items-center justify-center text-xs text-dark min-w-[24px]">
                          <div>{comp.homeScore}</div>
                          <div>{comp.awayScore}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        </div>
      ) : (
        <>
          {showList && hasMatches ? (
            <div className="space-y-3">
              {matches.map((match, index) => (
                <MatchCard key={`${match.home}-${index}`} match={match} />
              ))}
            </div>
          ) : null}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              className="h-[46px] p-0.5 px-12 !rounded-[10px] border border-[#797979] bg-white text-dark font-montserrat"
              onClick={() => setShowMoreCompetitions(true)}
            >
              SEE MORE COMING &gt;&gt;
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default UpcomingSection;

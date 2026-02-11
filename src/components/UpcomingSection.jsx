import { useState } from "react";
import Button from "./ui/Button.jsx";
import MatchCard from "./MatchCard.jsx";
import MatchAccordionItem from "./MatchAccordionItem.jsx";
import MediaPlaceholder from "./MediaPlaceholder.jsx";
import fireIcon from "../assets/fireIcon.png";
import footballIcon from "../assets/footballIcon.png";
import cockfightingIcon from "../assets/cockfightingIcon.png";

function UpcomingSection({
  matches,
  mode = "placeholder",
  activeTab = "football",
}) {
  const [expandedLiveIds, setExpandedLiveIds] = useState([]);
  const [showMoreCompetitions, setShowMoreCompetitions] = useState(false);

  const tabInfo = {
    football: { label: "Football", icon: footballIcon },
    basketball: { label: "Basketball", icon: cockfightingIcon },
    hot: { label: "Hot Matches", icon: fireIcon },
  };

  const currentTab = tabInfo[activeTab] || tabInfo.football;

  const liveMatchesData = [
    {
      id: "live-1",
      league: "Europa League",
      home: "Manchester United",
      away: "Barcelona",
      score: "3 : 2",
      time: "13:00 ~ 20:00",
    },
    {
      id: "live-2",
      league: "Champions League",
      home: "Real Madrid",
      away: "Liverpool",
      score: "1 : 1",
      time: "14:00 ~ 21:00",
    },
    {
      id: "live-3",
      league: "Premier League",
      home: "Arsenal",
      away: "Chelsea",
      score: "2 : 0",
      time: "12:00 ~ 19:00",
    },
  ];
  const [expandedMatchIds, setExpandedMatchIds] = useState([]);
  const [isUpcomingOpen, setIsUpcomingOpen] = useState(true);
  const hasMatches = matches.length > 0;
  const showPlaceholder = mode === "placeholder";
  const showList = mode === "list";

  const handleMatchClick = (match) => {
    if (match.status === "result") {
      setExpandedMatchIds((prev) =>
        prev.includes(match.id)
          ? prev.filter((id) => id !== match.id)
          : [...prev, match.id],
      );
    }
  };

  const handleLiveMatchClick = (matchId) => {
    setExpandedLiveIds((prev) =>
      prev.includes(matchId)
        ? prev.filter((id) => id !== matchId)
        : [...prev, matchId],
    );
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

  return (
    <>
      <div className="p-4 bg-lightGray pt-4 pb-2 px-3 rounded-2xl">
        <div
          className="flex items-center justify-between text-sm font-semibold text-gray-900 cursor-pointer select-none"
          onClick={() => setIsUpcomingOpen(!isUpcomingOpen)}
        >
          <div className="flex items-center gap-2">
            <img
              src={currentTab.icon}
              alt={currentTab.label}
              className="w-5 h-5"
            />
            {currentTab.label} &gt;&gt; {liveMatchesData.length} matches
          </div>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isUpcomingOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="#d7d7d7"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out mt-2 overflow-hidden ${isUpcomingOpen ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {showPlaceholder ? (
              <>
                {liveMatchesData.map((match) => {
                  const isExpanded = expandedLiveIds.includes(match.id);
                  return (
                    <div
                      key={match.id}
                      className="rounded-2xl border border-gray-200 bg-white p-4"
                    >
                      <div
                        onClick={() => handleLiveMatchClick(match.id)}
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
                            {match.time}
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-4">
                          <div className="flex flex-col items-center">
                            <MediaPlaceholder
                              className="w-[52px] h-12 mb-2"
                              text="League Logo"
                              textClassName="text-[8px] font-semibold"
                            />
                            <div className="text-xs text-gray-900">
                              {match.home}
                            </div>
                          </div>
                          <div className="rounded-full bg-gray-900 px-4 py-2 text-sm font-bold text-white -mt-4">
                            {match.score}
                          </div>
                          <div className="flex flex-col items-center">
                            <MediaPlaceholder
                              className="w-[52px] h-12 mb-2"
                              text="League Logo"
                              textClassName="text-[8px] font-semibold"
                            />
                            <div className="text-xs text-gray-900">
                              {match.away}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded
                            ? "max-h-[400px] opacity-100 mt-4"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <MediaPlaceholder
                          className="h-96"
                          text="LIVE SCREEN"
                          textClassName="text-lg"
                        />
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          !isExpanded
                            ? "max-h-20 opacity-100 mt-4"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <div className="rounded bg-lightGray p-3 text-sm font-medium text-dark">
                          {match.league}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </div>
      {!showMoreCompetitions && showList && hasMatches && (
        <div className="rounded-2xl bg-lightGray p-4 mb-4">
          <div className="space-y-3">
            {matches.map((match, index) => (
              <MatchCard key={`${match.home}-${index}`} match={match} />
            ))}
          </div>
        </div>
      )}

      {showMoreCompetitions && (
        <div className="rounded-2xl bg-lightGray p-4">
          <div className="rounded-2xl bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {moreCompetitionsData.map((comp, index) => (
              <MatchAccordionItem
                key={comp.id}
                comp={comp}
                isExpanded={expandedMatchIds.includes(comp.id)}
                onToggle={() => handleMatchClick(comp)}
                // isLastItem={index === moreCompetitionsData.length - 1}
              />
            ))}
          </div>
        </div>
      )}
      {!showMoreCompetitions && (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="h-[46px] p-0.5 px-12 !rounded-[10px] border border-[#797979] bg-white text-dark font-montserrat"
            onClick={() => setShowMoreCompetitions(true)}
          >
            SEE MORE COMING &gt;&gt;
          </Button>
        </div>
      )}
    </>
  );
}

export default UpcomingSection;

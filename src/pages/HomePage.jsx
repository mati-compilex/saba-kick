import { useMemo, useState } from "react";
import FilterChips from "../components/FilterChips.jsx";
import LeagueList from "../components/LeagueList.jsx";
import LiveHero from "../components/LiveHero.jsx";
import SectionTabs from "../components/SectionTabs.jsx";
import SponsorRow from "../components/SponsorRow.jsx";
import UpcomingSection from "../components/UpcomingSection.jsx";
import WatchAgain from "../components/WatchAgain.jsx";
import {
  dateFilters,
  leagueGroups,
  liveMatches,
  sponsors,
  tabOptions,
  upcomingMatches,
} from "../data/homeData.js";
import MediaPlaceholder from "../components/MediaPlaceholder.jsx";
import Button from "../components/ui/Button.jsx";

function HomePage({ activeTab, activeDate, onTabChange, onDateChange }) {
  const isHot = activeTab === "hot";
  const [showMoreCompetitions, setShowMoreCompetitions] = useState(false);

  const filteredMatches = useMemo(() => {
    return upcomingMatches.filter((match) => {
      const matchesTab = activeTab === "hot" ? true : match.sport === activeTab;
      const matchesDate = activeDate ? match.dateId === activeDate : true;
      return matchesTab && matchesDate;
    });
  }, [activeTab, activeDate]);

  const activeLiveMatch =
    liveMatches.find((match) => {
      const matchesTab = activeTab === "hot" ? true : match.sport === activeTab;
      const matchesDate = activeDate ? match.dateId === activeDate : true;
      return matchesTab && matchesDate;
    }) ?? liveMatches[0];

  return (
    <>
      <SponsorRow sponsors={sponsors} />
      <div>
        <h1 className="text-[19px] font-semibold text-gray-900 w-[350px] h-[51px] font-monserrat bg-transparent box-border font-semibold text-[#333333] text-left leading-normal">
          Live Stream, Results and Upcoming Matches
        </h1>
      </div>
      <SectionTabs
        tabs={tabOptions}
        activeTab={activeTab}
        onChange={onTabChange}
      />
      <FilterChips
        filters={dateFilters}
        activeFilter={activeDate}
        onChange={onDateChange}
      />

      <LiveHero match={activeLiveMatch} />
      {isHot ? (
        <>
          <MediaPlaceholder
            className={`h-[544px] mt-6 bg-lightGray transition-all duration-500`}
            text="正在LIVE的內容"
            textClassName="text-[23px]"
          />
          {!showMoreCompetitions && (
            <div className="flex justify-center">
              <Button variant="ghost" className="h-[46px] p-0.5 px-12 !rounded-[10px] border border-[#797979] bg-white text-dark font-montserrat" onClick={() => setShowMoreCompetitions(true)}>
               SEE MORE COMING &gt;&gt;
              </Button>
            </div>
          )}
          {showMoreCompetitions && (
           <MediaPlaceholder
            className={`h-[544px] mt-6 bg-lightGray transition-all duration-500`}
            text="Upcoming & Ended"
            textClassName="text-[23px]"
          />
          )}
        </>
      ) : (
        <UpcomingSection
          matches={filteredMatches}
          activeTab={activeTab}
          // mode={isHot ? 'placeholder' : 'list'}
        />
      )}
    </>
  );
}

export function HomeAside({ activeTab, activeDate }) {
  const isHot = activeTab === "hot";
  const activeLiveMatch =
    liveMatches.find((match) => {
      const matchesTab = activeTab === "hot" ? true : match.sport === activeTab;
      const matchesDate = activeDate ? match.dateId === activeDate : true;
      return matchesTab && matchesDate;
    }) ?? liveMatches[0];

  return (
    <>
      <LiveHero match={activeLiveMatch} showScreen />
      {!isHot ? <WatchAgain /> : null}
      <LeagueList groups={leagueGroups} />
    </>
  );
}

export default HomePage;

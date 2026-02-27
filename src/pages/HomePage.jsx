import { useMemo } from "react";
import FilterChips from "../components/FilterChips.jsx";
import LeagueList from "../components/LeagueList.jsx";
import LiveHero from "../components/LiveHero.jsx";
import SectionTabs from "../components/SectionTabs.jsx";
import SponsorRow from "../components/SponsorRow.jsx";
import UpcomingSection from "../components/UpcomingSection.jsx";
import HotMatches from "../components/HotMatches.jsx";
import WatchAgain from "../components/WatchAgain.jsx";
import CockFightSection from "../components/cockFightSection/CockFightSection.jsx";
import brisbaneRoarLogo from "../assets/images/BrisbaneRoarFC.png";
import aucklandLogo from "../assets/images/AFC.png";
import brentfordLogo from "../assets/images/BrentfordFC.png";
import chelseaLogo from "../assets/images/chelsea.png";
import borneoLogo from "../assets/images/BorneoFC.png";
import baliLogo from "../assets/images/BaliFC.png";
import brvtLogo from "../assets/images/BRVT.png";
import bacNinhLogo from "../assets/images/BacNinh.png";
import {
  dateFilters,
  leagueGroups,
  liveMatches,
  sponsors,
  tabOptions,
  upcomingMatches,
} from "../data/homeData.js";

function HomePage({ activeTab, activeDate, onTabChange, onDateChange }) {
  const isHot = activeTab === "hot";
  const football = activeTab === "football";
  const cockfighting = activeTab === "cockfighting";

  const filteredMatches = useMemo(() => {
    return upcomingMatches.filter((match) => {
      const matchesTab = activeTab === "hot" ? true : match.sport === activeTab;
      const matchesDate = activeDate ? match.dateId === activeDate : true;
      return matchesTab && matchesDate;
    });
  }, [activeTab, activeDate]);

  const homeLiveMatch = useMemo(() => ({
    id: "live-hero-brisbane-auckland",
    league: "Premier League",
    home: "Chelsea FC",
    away: "Brentford FC",
    scoreHome: 3,
    scoreAway: 4,
    status: "Live",
    oddsHome: "1.22",
    oddsAway: "4.3",
    homeLogo: chelseaLogo,
    awayLogo: brentfordLogo,
    countryCode: "GB-ENG",
    time: "63:12",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    // poster: brentfordLogo,
  }), []);

  const hotMatches = useMemo(() => {
    return [
      {
        id: "brisbane-auckland-live",
        league: "W-League",
        home: "Brisbane Roar",
        away: "Auckland FC",
        scoreHome: 2,
        scoreAway: 0,
        status: "Live",
        homeLogo: brisbaneRoarLogo,
        awayLogo: aucklandLogo,
        countryCode: "AU",
      },
      {
        id: "borneo-bali-live",
        league: "Super League",
        home: "Borneo FC",
        away: "Bali United",
        scoreHome: 1,
        scoreAway: 1,
        status: "Live",
        homeLogo: borneoLogo,
        awayLogo: baliLogo,
        countryCode: "ID",
      },
      {
        id: "brvt-bacninh-upcoming",
        league: "V.League 2",
        home: "BRVT FC",
        away: "BACNINH FC",
        time: "6:30 PM",
        dateText: "FRI. 02/01",
        status: "Upcoming",
        homeLogo: brvtLogo,
        awayLogo: bacNinhLogo,
        countryCode: "VN",
      },
    ];
  }, []);

  // active live match is resolved in HomeAside

  return (
    <div className="grid gap-3 lg:grid-cols-1">
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center gap-2">
        <SponsorRow sponsors={sponsors} />
        <div>
          <h1 className="text-[19px] lg:w-full font-monserrat bg-transparent box-border font-semibold text-dark text-left leading-normal px-[12px]">
            Live Stream, Results and Upcoming Matches
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-2">
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
      </div>
      {!cockfighting && <LiveHero match={homeLiveMatch} />}
      {isHot && <HotMatches matches={hotMatches} />}
      {football  && (
        <UpcomingSection
          matches={filteredMatches}
          activeTab={activeTab}
          mode="list"
        />
      )}
      {cockfighting && (
        <CockFightSection
          matches={filteredMatches}
          activeTab={activeTab}
        />
      )}
    </div>
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

import { useMemo } from 'react'
import FilterChips from '../components/FilterChips.jsx'
import LeagueList from '../components/LeagueList.jsx'
import LiveHero from '../components/LiveHero.jsx'
import SectionTabs from '../components/SectionTabs.jsx'
import SponsorRow from '../components/SponsorRow.jsx'
import UpcomingSection from '../components/UpcomingSection.jsx'
import WatchAgain from '../components/WatchAgain.jsx'
import {
  dateFilters,
  leagueGroups,
  liveMatches,
  sponsors,
  tabOptions,
  upcomingMatches,
} from '../data/homeData.js'

function HomePage({ activeTab, activeDate, onTabChange, onDateChange }) {
  const filteredMatches = useMemo(() => {
    return upcomingMatches.filter((match) => {
      const matchesTab =
        activeTab === 'hot' ? true : match.sport === activeTab
      const matchesDate = activeDate ? match.dateId === activeDate : true
      return matchesTab && matchesDate
    })
  }, [activeTab, activeDate])

  const activeLiveMatch =
    liveMatches.find((match) => {
      const matchesTab =
        activeTab === 'hot' ? true : match.sport === activeTab
      const matchesDate = activeDate ? match.dateId === activeDate : true
      return matchesTab && matchesDate
    }) ?? liveMatches[0]

  return (
    <>
      <SponsorRow sponsors={sponsors} />
      <div>
        <h1 className="text-sm font-semibold text-gray-900">
          Live Stream, Results and Upcoming Matches
        </h1>
        <p className="text-[11px] text-gray-500">
          All matches, live scores, and highlights in one place.
        </p>
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
      <LiveHero match={activeLiveMatch}  />
      <UpcomingSection
        matches={filteredMatches}
        // mode={isHot ? 'placeholder' : 'list'}
      />
    </>
  )
}

export function HomeAside({ activeTab, activeDate }) {
  const isHot = activeTab === 'hot'
  const activeLiveMatch =
    liveMatches.find((match) => {
      const matchesTab =
        activeTab === 'hot' ? true : match.sport === activeTab
      const matchesDate = activeDate ? match.dateId === activeDate : true
      return matchesTab && matchesDate
    }) ?? liveMatches[0]

  return (
    <>
      <LiveHero match={activeLiveMatch} showScreen />
      {!isHot ? <WatchAgain /> : null}
      <LeagueList groups={leagueGroups} />
    </>
  )
}

export default HomePage

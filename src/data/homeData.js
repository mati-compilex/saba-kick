import logo1xbet from '../assets/1xbet.png'
import logoDafabet from '../assets/dafabet.png'
import logoBetway from '../assets/betways.png'

export const sponsors = [
  { name: '1XBET', logo: logo1xbet },
  { name: 'dafabet', logo: logoDafabet },
  { name: 'betway', logo: logoBetway }
]


export const tabOptions = [
  { id: 'hot', label: 'Hot Matches' },
  { id: 'football', label: 'Football' },
  { id: 'basketball', label: 'Basketball' },
]

const baseDate = new Date()
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const addDays = (date, offset) => {
  const next = new Date(date)
  next.setDate(date.getDate() + offset)
  return next
}
const formatLabel = (date) =>
  `${weekdays[date.getDay()]} ${date.getDate()}`

export const dateFilters = [
  { id: 'd0', label: 'Today' },
  { id: 'd1', label: formatLabel(addDays(baseDate, 1)) },
  { id: 'd2', label: formatLabel(addDays(baseDate, 2)) },
  { id: 'd3', label: formatLabel(addDays(baseDate, 3)) },
]

export const liveMatches = [
  {
    league: 'Advanced - Tainan Canon Media',
    home: 'Sakura FC',
    away: 'Seoul Nova',
    time: '63:12',
    scoreHome: 2,
    scoreAway: 1,
    status: 'Live',
    sport: 'football',
    dateId: 'd0',
  },
  {
    league: 'East Coast Pro Series',
    home: 'Skylight',
    away: 'Thunder',
    time: '38:41',
    scoreHome: 74,
    scoreAway: 71,
    status: 'Live',
    sport: 'basketball',
    dateId: 'd0',
  },
]

export const upcomingMatches = [
  {
    league: "Mexico Women's National Football Championship",
    home: 'Meztli',
    away: 'Laguna Norte',
    time: '19:30',
    scoreHome: 0,
    scoreAway: 0,
    status: 'Live',
    sport: 'football',
    dateId: 'd0',
  },
  {
    league: "Mexico Women's National Football Championship",
    home: 'Mavera',
    away: 'Laguna Norte',
    time: '20:00',
    scoreHome: 0,
    scoreAway: 0,
    status: 'Live',
    sport: 'football',
    dateId: 'd1',
  },
  {
    league: 'Europe League',
    home: 'Lyon',
    away: 'Real Albion',
    time: '21:45',
    scoreHome: 1,
    scoreAway: 1,
    status: 'Live',
    sport: 'football',
    dateId: 'd2',
  },
  {
    league: 'Europe League',
    home: 'Lazio',
    away: 'Rangers',
    time: '22:10',
    scoreHome: 0,
    scoreAway: 0,
    status: 'Upcoming',
    sport: 'football',
    dateId: 'd2',
  },
  {
    league: 'South Andean First Division',
    home: 'Quito',
    away: 'Santa Cruz',
    time: '18:50',
    scoreHome: 2,
    scoreAway: 2,
    status: 'Live',
    sport: 'football',
    dateId: 'd0',
  },
  {
    league: 'Nerzetliya Championship',
    home: 'Turan',
    away: 'Valencia',
    time: '20:15',
    scoreHome: 1,
    scoreAway: 0,
    status: 'Live',
    sport: 'football',
    dateId: 'd1',
  },
  {
    league: 'Pacific Rim Open',
    home: 'Kusaba',
    away: 'Northline',
    time: '13:10',
    scoreHome: 2,
    scoreAway: 2,
    status: 'Live',
    sport: 'tennis',
    dateId: 'd0',
  },
  {
    league: 'National Playoffs',
    home: 'Artemis',
    away: 'Horizon',
    time: '18:00',
    scoreHome: 0,
    scoreAway: 0,
    status: 'Upcoming',
    sport: 'basketball',
    dateId: 'd3',
  },
  {
    league: 'Elite Circuit',
    home: 'Vertex',
    away: 'Nova',
    time: '20:20',
    scoreHome: 0,
    scoreAway: 0,
    status: 'Upcoming',
    sport: 'esports',
    dateId: 'd4',
  },
]

export const leagueGroups = [
  {
    title: 'Scotland English Premier League',
    items: [
      { name: 'Scottish Premier', count: 12 },
      { name: 'Division One', count: 8 },
      { name: 'Championship', count: 10 },
    ],
  },
  {
    title: 'VI Premier League',
    items: [
      { name: 'National League', count: 6 },
      { name: 'Championship', count: 9 },
      { name: 'Division One', count: 7 },
    ],
  },
]

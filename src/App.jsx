import { useState } from 'react'
import Layout from './layouts/Layout.jsx'
import HomePage, { HomeAside } from './pages/HomePage.jsx'
import { dateFilters, tabOptions } from './data/homeData.js'

function App() {
  const [activeTab, setActiveTab] = useState(tabOptions[0]?.id ?? '')
  const [activeDate, setActiveDate] = useState(dateFilters[0]?.id ?? '')

  return (
    <Layout aside={<HomeAside activeTab={activeTab} activeDate={activeDate} />}>
      <HomePage
        activeTab={activeTab}
        activeDate={activeDate}
        onTabChange={setActiveTab}
        onDateChange={setActiveDate}
      />
    </Layout>
  )
}

export default App

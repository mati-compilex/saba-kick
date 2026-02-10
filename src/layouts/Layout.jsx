import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

function Layout({ children, aside }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-5">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <main className="space-y-4">
            <Header />
            {children}
            <Footer />
          </main>
          <aside className="hidden lg:block">
            <div className="space-y-6">{aside}</div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Layout

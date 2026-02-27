import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

function Layout({ children, aside }) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-[1200px] px-2 py-2">
        <div className="grid gap-6 lg:grid-cols-1">
          <main className="space-y-[10px]">
            <Header />
            {children}
            <Footer />
          </main>
          {/* <aside className="hidden lg:block">
            <div className="space-y-6">{aside}</div>
          </aside> */}
        </div>
      </div>
    </div>
  )
}

export default Layout

import { useRef, useState } from 'react'

function FilterChips({ filters, activeFilter, onChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const calendarRef = useRef(null)

  const getDates = (centerDate) => {
    const dates = []
    for (let i = -2; i <= 3; i++) {
      const date = new Date(centerDate)
      date.setDate(centerDate.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  const dates = getDates(selectedDate)
  const weekdays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

  const handleCalendarClick = () => {
    calendarRef.current?.showPicker()
  }

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value)
    setSelectedDate(newDate)
  }

  const handlePrev = () => {
    const newDate = new Date(selectedDate)
    newDate.setDate(selectedDate.getDate() - 1)
    setSelectedDate(newDate)
  }

  const handleNext = () => {
    const newDate = new Date(selectedDate)
    newDate.setDate(selectedDate.getDate() + 1)
    setSelectedDate(newDate)
  }

  const isToday = (date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date) => {
    return date.toDateString() === selectedDate.toDateString()
  }

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={handleCalendarClick}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300"
      >
        📅
      </button>
      <input 
        ref={calendarRef}
        type="date" 
        onChange={handleDateChange}
        className="hidden"
      />
      <button 
        onClick={handlePrev}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-500 ring-1 ring-gray-200 hover:ring-gray-300"
      >
        ‹
      </button>
      <div className="flex gap-2">
        {dates.map((date, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(date)}
            className={`flex flex-col items-center justify-center rounded-lg px-3 py-1 text-xs font-semibold transition ${
              isSelected(date)
                ? 'bg-yellow-300 text-gray-900'
                : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300'
            }`}
          >
            <div>{date.getDate()}</div>
            <div className="text-[10px] font-normal text-gray-500">
              {weekdays[date.getDay()]}
            </div>
          </button>
        ))}
      </div>
      <button 
        onClick={handleNext}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-500 ring-1 ring-gray-200 hover:ring-gray-300"
      >
        ›
      </button>
    </div>
  )
}

export default FilterChips

import { useRef, useState } from 'react'
import calendar from '../assets/calendar.svg'
import leftIcon from '../assets/leftIcon.png'
import rightIcon from '../assets/rightIcon.png'
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
    <div className="flex items-center lg:justify-center gap-2 relative">
      <button 
        onClick={handleCalendarClick}
        className="flex h-10 w-10 items-center p-1 justify-center rounded-full bg-lightGray text-gray-700 "
      >
        <img src={calendar} alt="Calendar" className="h-4 w-4" />
      </button>
      <input 
        ref={calendarRef}
        type="date" 
        onChange={handleDateChange}
        className="hidden"
      />
      <button 
        onClick={handlePrev}
        className="flex h-9 w-9 items-center justify-center bg-transparent text-gray-500"
      >
        <img src={rightIcon} alt="Previous" className="h-8 w-8" />
      </button>
      <div className="flex">
        {dates.map((date, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(date)}
            className={`flex flex-col items-center justify-center rounded-full h-10 w-10 text-[13px] font-semibold transition ${
              isSelected(date)
                ? 'bg-[rgba(202,249,130,0.24)] text-[#63a103]'
                : 'bg-transparent text-gray-700'
            }`}
          >
            <div>{date.getDate()}</div>
            <div className={`text-[8px] font-normal text-gray-500
              ${isSelected(date)
                ? 'text-[#63a103]'
                : 'bg-transparent text-gray-500'
            }`}>
              {weekdays[date.getDay()]}
            </div>
          </button>
        ))}
      </div>
      <button 
        onClick={handleNext}
        className="flex h-9 w-9 items-center justify-center bg-transparent text-gray-500"
      >
        <img src={leftIcon} alt="Next" className="h-8 w-8" />
      </button>
    </div>
  )
}

export default FilterChips

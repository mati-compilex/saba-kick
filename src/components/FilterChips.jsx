import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './FilterChips.css'
import calendar from '../assets/calendar.svg'
import leftIcon from '../assets/leftIcon.png'
import rightIcon from '../assets/rightIcon.png'

function FilterChips({ filters, activeFilter, onChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showCalendar, setShowCalendar] = useState(false)

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

  const handleDateChange = (date) => {
    setSelectedDate(date)
    setShowCalendar(false)
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

  const isSelected = (date) => {
    return date.toDateString() === selectedDate.toDateString()
  }

  return (
    <div className="flex items-center lg:justify-center lg:gap-2 relative">
      <div className="relative">
        <button 
          onClick={() => setShowCalendar(!showCalendar)}
          className="flex h-10 w-10 items-center p-1 justify-center rounded-full bg-lightGray text-gray-700"
        >
          <img src={calendar} alt="Calendar" className="h-4 w-4" />
        </button>
        
        {showCalendar && (
          <div className="absolute top-12 left-0 z-50">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              calendarClassName="custom-datepicker"
            />
          </div>
        )}
      </div>
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
                ? 'bg-[rgba(202,249,130,0.24)] text-success'
                : 'bg-transparent text-gray-700'
            }`}
          >
            <div>{date.getDate()}</div>
            <div className={`text-[8px] font-normal ${
              isSelected(date) ? 'text-success' : 'text-gray-500'
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

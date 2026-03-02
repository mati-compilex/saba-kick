import { useState } from "react";
import "./FilterChips.css";
import { LiveDotIcon } from "../assets/icons/LiveDot";

function FilterChips({ showLive = false, onLiveClick }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get Sunday of current week
  const getStartOfWeek = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDay(); // 0 = Sunday
    newDate.setDate(newDate.getDate() - day);
    return newDate;
  };

  // Generate Sunday → Saturday
  const getWeekDates = (date) => {
    const startOfWeek = getStartOfWeek(date);
    const week = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }

    return week;
  };

  const dates = getWeekDates(selectedDate);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const isSelected = (date) =>
    date.toDateString() === selectedDate.toDateString();

  return (
    <div className="flex items-center justify-center gap-2 relative">
      <div className="flex gap-0.5">
        {showLive && (
          <div className="p-[1px] rounded-[12px] bg-outline-nv-45deg">
            <button
              onClick={onLiveClick}
              className="flex items-center flex-col gap-1 font-bold text-[11px] justify-center h-[44px] w-[44px] rounded-[12px] transition bg-strong-45deg text-neutral-95"
              type="button"
              aria-label="Live"
            >
              <LiveDotIcon />
              <span className="text-[12px] font-semibold leading-none">
                Live
              </span>
            </button>
          </div>
        )}
        {dates.map((date, index) => (
          <div
            key={index}
            className={`p-[1px] rounded-[12px] ${
              isSelected(date) ? "bg-white-45deg" : "bg-outline-nv-45deg"
            }`}
          >
            <button
              onClick={() => setSelectedDate(date)}
              className={`flex flex-col items-center font-medium text-sm justify-center h-[44px] w-[44px] rounded-[12px] py-2 gap-[2px] transition ${
                isSelected(date)
                  ? "bg-primary-45deg text-black"
                  : "bg-strong-45deg text-neutral-95"
              }`}
              type="button"
            >
              <div className="text-[11px] font-medium leading-none">
                {weekdays[date.getDay()]}
              </div>
              <div className="text-[14px] font-semibold leading-none">
                {date.getDate()}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterChips;

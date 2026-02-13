import React from 'react'
const historyData = [
  {
    id: 1,
    label: "CPC 2",
    date: "2024-06-01",
    result: "CPC 2 won",
  },
  {
    id: 2,
    label: "CPC 03",
    date: "2024-06-02",
    result: "CPC 03 won",
  },
  {
    id: 3,
    label: "CPC 04",
    date: "2024-06-03",
    result: "CPC 04 won",
  },
   {
    id: 4,
    label: "CPC 2",
    date: "2024-06-01",
    result: "CPC 2 won",
  },
  {
    id: 5,
    label: "CPC 03",
    date: "2024-06-02",
    result: "CPC 03 won",
  },
  {
    id: 6,
    label: "CPC 04",
    date: "2024-06-03",
    result: "CPC 04 won",
  },
];
const History = () => {
  return (
    <div className='bg-lightGray rounded-[17px] p-[13px]'>
      <div className='bg-white rounded-[13px]'>
        {historyData.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b border-gray-200 px-4 py-2 last:border-0">
            <div>
              <div className="text-sm font-semibold text-gray-800">{item.label}</div>
              <div className="text-xs text-gray-500">{item.date}</div>
            </div>
            <div className="text-sm font-semibold text-green-600">{item.result}</div>
          </div>
  ))}
      </div>
    </div>
  )
}
export default History

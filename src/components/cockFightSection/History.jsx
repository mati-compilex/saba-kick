import React from 'react'
const historyData = [
  {
    id: 1,
    label: "CPC 2",
    date: "2024-06-01",
  },
  {
    id: 2,
    label: "CPC 03",
    date: "2024-06-02",
  },
  {
    id: 3,
    label: "CPC 04",
    date: "2024-06-03",
  },
  {
    id: 4,
    label: "CPC 2",
    date: "2024-06-01",
  },
  {
    id: 5,
    label: "CPC 03",
    date: "2024-06-02",
  },
  {
    id: 6,
    label: "CPC 04",
    date: "2024-06-03",
  },
];

const game = [
  "Wala",
  "Draw",
  "Meran"
]
const History = () => {
  return (
    <div className='bg-lightGray rounded-[17px] p-[13px] mb-[51px]'>
      <div className='bg-white rounded-[13px] py-3 px-5'>
        {historyData.map((item, index) => (
          <>
            <div key={item.id} className="flex justify-between items-center  pt-1">
              <div>
                <div className="text-sm text-gray-800">{item.label}</div>
              </div>
            </div>
            <div className={`flex justify-between  items-end ${index !== historyData.length - 1 ? 'border-b border-[#797979]' : ''}`}>
              <div className='bg-lightGray rounded-full items-center mb-2'>
                <div>
                  {game.map((g, gIndex) => (
                    <span
                      key={gIndex}
                      className={`text-xs px-2 py-[2px] m-1 items-center ${gIndex === 0 ? 'bg-white rounded-full' : ''}`}
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
              <div className='gap-1 mb-2'>
                <div className='text-[#c00017] text-[10px] px-2'>Ended</div>
                <div className='text-[#333333] text-[10px] bg-lightGray px-2 rounded-full'>13:00 PM 29th Jan</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
export default History

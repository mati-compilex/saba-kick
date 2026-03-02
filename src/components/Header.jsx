import { useState, useEffect, useRef } from 'react'
import Badge from './ui/Badge.jsx'
import IconButton from './ui/IconButton.jsx'
import logo from '../assets/logo.png'
import headerIcon from '../assets/headerIcon.svg'
import { Link } from 'react-router-dom'
import  {MenuFill}  from '../assets/icons/menu_fill.jsx'
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="flex items-center justify-between bg-lightGray rounded-[16px] pt-[10px] bg-black">
      <div className="flex items-center gap-2 pl-[15px]">
        <Link to="/">
          <img src={logo} alt="Logo" className=" w-[54px]" />
        </Link>
      </div>
      <div className="relative flex items-center gap-5 px-[15px]" ref={dropdownRef}>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <MenuFill />
        </div>
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-neutral_variant-5 text-neutral-95 rounded-lg shadow-lg py-2 min-w-[150px] z-50 rounded-[12px]">
            <button className="w-full text-sm text-left px-4 py-2 hover:bg-gray-900">
              Profile
            </button>
            <button className="w-full text-sm text-left px-4 py-2 hover:bg-gray-900">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header

import Badge from './ui/Badge.jsx'
import IconButton from './ui/IconButton.jsx'
import logo from '../assets/logo.png'
import headerIcon from '../assets/headerIcon.svg'
function Header() {
  return (
    <div className="flex items-center justify-between bg-[#f2f2f2] rounded-[16px] px-[15px] py-[10px]">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-[62px] w-[118px]" />
      </div>
      <div className="flex items-center gap-5 px-[15px]">
        <div id="live" className="relative w-[39px] h-[24px] bg-transparent box-border font-extrabold text-[#555555] text-left leading-normal">
          LIVE
          <div id="2" className="absolute top-[-5px] right-[-5px] w-[12px] h-[13px] rounded-[3px] bg-[#d9001b] font-bold text-white text-[10px] flex items-center justify-center">
            2
          </div>
        </div>

        <img src={headerIcon} alt="" />
      </div>
    </div>
  )
}

export default Header

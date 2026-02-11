import Badge from './ui/Badge.jsx'
import IconButton from './ui/IconButton.jsx'
import logo from '../assets/logo.png'
import headerIcon from '../assets/headerIcon.svg'
function Header() {
  return (
    <div className="flex items-center justify-between bg-[#f2f2f2] rounded-[16px] p-[2px]">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-[42px] w-[92px]" />
      </div>
      <div className="flex items-center gap-2  pe-4">
        <div id="live" className="relative w-[39px] h-[24px] bg-transparent box-border font-extrabold text-[#555555] text-left leading-normal">
          LIVE
          <div id="2" className="absolute top-[-9px] text-[7px] right-[-5px] w-[12px] h-[13px] p-[2px] rounded-[3px] border border-transparent bg-[#d9001b] box-border font-bold text-white text-center">
            2  
          </div>
        </div>

        <img src={headerIcon} alt="" />
      </div>
    </div>
  )
}

export default Header

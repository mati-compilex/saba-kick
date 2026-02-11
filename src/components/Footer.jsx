import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/insta.svg'
import youtubeIcon from '../assets/youtube.svg'
import arrowRight from '../assets/arrowRight.png'
import arrowDown from '../assets/arrowDown.png'
const Footer = () => {

  return (
    <div className="space-y-4 bg-white p-4 text-[13px] text-[#333333]">
      <div className='lg:flex lg:justify-between '>
        <p className='lg:max-w-[300px] mb-10 lg:mb-0'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
        </p>
        <div className="flex justify-between text-[13px] lg:w-full">
          <div className='lg:flex lg:justify-around lg:w-full'>
            <details className="mb-4" open>
              <summary className="flex items-center gap-2 text-[#333333] font-medium cursor-pointer list-none">
                <img src={arrowDown} alt="Arrow Down" className="h-2 w-2" />
                Contact
              </summary>
              <ul className="mt-2 ml-4 space-y-1 text-gray-600">
                <li><a href="#" className="hover:underline">Mobile</a></li>
                <li><a href="#" className="hover:underline">Email</a></li>
                <li><a href="#" className="hover:underline">Address</a></li>
              </ul>
            </details>

            <details className="mb-4" open>
              <summary className="flex items-center gap-2 text-[#333333] font-medium cursor-pointer list-none">
                <img src={arrowDown} alt="Arrow Down" className="h-2 w-2" />
                Quick Link
              </summary>
              <ul className="mt-2 ml-4 space-y-1 text-gray-600">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
              </ul>
            </details>

            <details open>
              <summary className="flex items-center gap-2 text-[#333333] font-medium cursor-pointer list-none">
                <img src={arrowDown} alt="Arrow Down" className="h-2 w-2" />
                Legal
              </summary>
              <ul className="mt-2 ml-4 space-y-1 text-gray-600">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
              </ul>
            </details>
          </div>
          <div className="flex items-end gap-2">
            <span className="inline-flex items-center justify-center">
              <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
            </span>
            <span className="inline-flex items-center justify-center">
              <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
            </span>
            <span className="inline-flex items-center justify-center">
              <img src={youtubeIcon} alt="YouTube" className="h-8 w-8" />
            </span>
          </div>
        </div>
      </div>
      <div className="text-[13px] text-[#333333]">
        © 2026 SABA. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer

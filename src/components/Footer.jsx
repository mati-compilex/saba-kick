import { useState } from 'react'
import facebookIcon from '../assets/facebook.png'
import instagramIcon from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import telegram from '../assets/telegram.png'
import arrowDown from '../assets/arrowDown.png'
import logo from '../assets/logo-white.png'
const Footer = () => {
  const [openSections, setOpenSections] = useState({
    Contact: true,
    'Quick Link': true,
    Legal: true
  })

  const toggleSection = (title) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const sections = [
    {
      title: 'Quick Link',
      links: [
        { label: 'FAQ', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Support', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms', href: '#' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { label: 'Mobile', href: '#' },
        { label: 'Email', href: '#' },
        { label: 'Address', href: '#' },
      ]
    },
  ]

  return (
    <div className='m-3'>
      <div className="space-y-4 bg-normal px-4 text-[13px] text-dark py-[28px] px-[12px] rounded-t-[20px]">
        <div className='lg:flex lg:justify-between '>
          <img src={logo} alt="Logo" className="w-[54px] mb-[8px]" />
          <div className='title-l !text-neutral-60 mb-[12px]'>Bet with Confidence. Play with Trust.</div>
          <div className="border-b border-neutral-20 lg:hidden mb-[24px]"></div>
          <p className='lg:max-w-[300px] lg:mb-0 body-m !text-neutral-60'>
            This website is operated by Westward Way Tech N.V. (registration No. 158203), with address at Abraham de Veerstraat 9, Curaçao. This website is operated under license number: OGL/2020A/569/0357 issued by Gaming Service Provider, Authorised and Regulated by the Government of Curaçao. Apollo MKT Limited, Reg. No. HE 418346, having its registered office at AGIOU FOTIOU 12, NICOSIA, 1077, CYPRUS, which provides management, payment and support services related to the operation of the website. Gambling can be addictive. Play responsibly.
          </p>
          <div className="flex justify-between text-[13px] lg:w-full pt-[10px]">
            <div className='grid grid-cols-2 w-full'>
              {sections.map((section) => (
                <div key={section.title} className="py-[14px] title-s !text-neutral-95">
                  <div
                    className="flex items-center gap-2 text-[13px] text-dark font-medium cursor-pointer select-none"
                  // onClick={() => toggleSection(section.title)}
                  >
                    {/* <img
                    src={arrowDown}
                    alt="Arrow"
                    className={`h-2 w-2 transition-transform duration-300 ${openSections[section.title] ? 'rotate-0' : '-rotate-90'}`}
                  /> */}
                    {section.title}
                  </div>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out  ${openSections[section.title] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-4 space-y-3 label-l !text-neutral-60">
                        {section.links.map((link) => (
                          <li key={link.label}>
                            <a href={link.href} className="hover:underline">{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="flex items-end gap-2 pt-[14px]">
            <span className="inline-flex items-center justify-center">
              <img src={facebookIcon} alt="Facebook" className="h-[44px] w-[44px]" />
            </span>
            <span className="inline-flex items-center justify-center">
              <img src={instagramIcon} alt="Instagram" className="h-[44px] w-[44px]" />
            </span>
            <span className="inline-flex items-center justify-center">
              <img src={telegram} alt="YouTube" className="h-[44px] w-[44px]" />
            </span>
            <span className="inline-flex items-center justify-center">
              <img src={whatsapp} alt="WhatsApp" className="h-[44px] w-[44px]" />
            </span>
          </div>
        </div>
      </div>
      <div className="!mt-0 py-4 px-2 rounded-b-[20px] !text-neutral-95 body-m bg-neutral_variant-10">
        © 2026 SABA. All Rights Reserved.
      </div>
    </>
  )
}

export default Footer

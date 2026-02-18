import { useState } from 'react'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/insta.svg'
import youtubeIcon from '../assets/youtube.svg'
import arrowDown from '../assets/arrowDown.png'

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
      title: 'Contact',
      links: [
        { label: 'Mobile', href: '#' },
        { label: 'Email', href: '#' },
        { label: 'Address', href: '#' },
      ]
    },
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
    }
  ]

  return (
    <div className="space-y-4 bg-white px-4 text-[13px] text-dark">
      <div className='lg:flex lg:justify-between '>
        <div className="border-b border-dimGray lg:hidden mb-4"></div>
        <p className='lg:max-w-[300px] mb-10 lg:mb-0 px-1'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
        </p>
        <div className="flex justify-between text-[13px] lg:w-full px-2">
          <div className='lg:flex lg:justify-around lg:w-full'>
            {sections.map((section) => (
              <div key={section.title} className="mb-4">
                <div 
                  className="flex items-center gap-2 text-dark font-medium cursor-pointer select-none"
                  onClick={() => toggleSection(section.title)}
                >
                  <img 
                    src={arrowDown} 
                    alt="Arrow" 
                    className={`h-2 w-2 transition-transform duration-300 ${openSections[section.title] ? 'rotate-0' : '-rotate-90'}`} 
                  />
                  {section.title}
                </div>
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openSections[section.title] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="mt-2 ml-4 space-y-1 text-gray-600">
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
      <div className="text-[13px] text-dark">
        © 2026 SABA. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer

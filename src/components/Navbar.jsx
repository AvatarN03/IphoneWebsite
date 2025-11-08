import React, { useState } from 'react'
import { appleImg } from "../utils"
import { navLists } from '../constants'
import { Link } from 'react-router-dom'
import { Menu, X, Search, ShoppingBag } from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className='w-full max-w-[1200px] mx-auto py-5 sm:px-10 px-5 flex justify-between items-center relative bg-black overflow-hidden'>
        <nav className='flex w-full screen-max-width items-center justify-between'>
          {/* Apple Logo */}
          <Link to={"/"} className="flex-shrink-0">
            <img src={appleImg} alt="apple" width={14} height={18} />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((item, index) => (
              <Link 
                to={`/${item.toLowerCase()}`} 
                key={index} 
                className='px-5 text-sm cursor-pointer text-gray-400 hover:text-white transition-all'
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="flex items-center gap-7 max-sm:hidden">
            <Search size={18} className="text-white cursor-pointer hover:opacity-80 transition-opacity" />
            <ShoppingBag size={18} className="text-white cursor-pointer hover:opacity-80 transition-opacity" />
          </div>

          {/* Mobile Icons and Menu Button */}
          <div className="hidden max-sm:flex items-center gap-5">
            <Search size={18} className="text-white cursor-pointer" />
            <ShoppingBag size={18} className="text-white cursor-pointer" />
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none hover:opacity-80 transition-opacity"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed w-screen h-screen z-60 inset-0 bg-black z-50 sm:hidden">
          {/* Close Button */}
          <div className="absolute top-5 right-5 z-60">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
            {navLists.map((item, index) => (
              <Link 
                to={`/${item.toLowerCase()}`} 
                key={index}
                onClick={toggleMobileMenu}
                className='text-3xl text-white hover:text-gray-300 transition-all font-medium text-center w-full py-3'
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-10 left-0 right-0 text-center px-4">
            <p className="text-gray-400 text-sm">Apple Store Online</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-wide">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="text-2xl font-serif text-charcoal">
            Crude Capital Merchants
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#expertise" className="text-sm tracking-wide hover:text-accent-blue transition-colors">
              EXPERTISE
            </a>
            <a href="/services" className="text-sm tracking-wide hover:text-accent-blue transition-colors">
              SERVICES
            </a>
            <a href="#contact" className="text-sm tracking-wide hover:text-accent-blue transition-colors">
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-6 h-6 flex flex-col justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-full h-0.5 bg-charcoal transition-all ${isOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-charcoal mt-1 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-charcoal mt-1 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a 
                href="#expertise" 
                className="text-sm tracking-wide hover:text-accent-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                EXPERTISE
              </a>
              <a 
                href="/services" 
                className="text-sm tracking-wide hover:text-accent-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </a>
              <a 
                href="#contact" 
                className="text-sm tracking-wide hover:text-accent-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
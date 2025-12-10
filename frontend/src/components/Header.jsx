import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'work', 'other'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'other', label: 'Other' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0e27]/90 backdrop-blur-lg shadow-lg shadow-[#FF1744]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-[#FF1744] cursor-pointer hover:scale-105 transition-transform"
            onClick={() => scrollToSection('home')}
          >
            <span className="font-russo">PORTFOLIO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-orbitron ${
                  activeSection === item.id
                    ? 'text-[#FF1744] bg-[#FF1744]/10 shadow-lg shadow-[#FF1744]/20'
                    : 'text-gray-300 hover:text-[#FF1744] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#FF1744] text-white hover:bg-[#D50000] transition-all duration-200 shadow-lg shadow-[#FF1744]/50 hover:shadow-[#FF1744]/70 hover:scale-105"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:text-[#FF1744] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e27]/95 backdrop-blur-lg border-t border-[#FF1744]/20">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-[#FF1744] bg-[#FF1744]/10'
                    : 'text-gray-300 hover:text-[#FF1744] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-2 bg-[#FF1744] text-white hover:bg-[#D50000]"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

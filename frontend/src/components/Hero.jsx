import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '../mock';
import { Button } from './ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentTitle = personalInfo.titles[titleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
          setTypingSpeed(100);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1709141425206-f5cdeab3e718?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMG5lYnVsYXxlbnwwfHx8YmxhY2t8MTc2NTMzNzU1NHww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Animated Stars */}
      <div className="absolute inset-0 z-10">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-left space-y-6">
            <div className="space-y-2">
              <p className="text-[#FF1744] text-lg font-medium tracking-wider uppercase animate-fade-in-up">
                Welcome to my universe
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white font-russo animate-fade-in-up animation-delay-200">
                {personalInfo.name}
              </h1>
            </div>

            {/* Typing Animation */}
            <div className="h-20 animate-fade-in-up animation-delay-400">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron">
                <span className="text-[#FF1744]">{displayText}</span>
                <span className="animate-pulse text-[#FF1744]">|</span>
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-600">
              {personalInfo.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in-up animation-delay-800">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 hover:bg-[#FF1744]/20 text-white hover:text-[#FF1744] transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 hover:border-[#FF1744]/50"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 hover:bg-[#FF1744]/20 text-white hover:text-[#FF1744] transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 hover:border-[#FF1744]/50"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 hover:bg-[#FF1744]/20 text-white hover:text-[#FF1744] transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 hover:border-[#FF1744]/50"
              >
                <Twitter size={24} />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-3 rounded-lg bg-white/5 hover:bg-[#FF1744]/20 text-white hover:text-[#FF1744] transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 hover:border-[#FF1744]/50"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up animation-delay-1000">
              <Button
                onClick={scrollToAbout}
                className="bg-[#FF1744] text-white hover:bg-[#D50000] px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FF1744]/50 hover:shadow-[#FF1744]/70"
              >
                Explore My Universe
              </Button>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-2 border-[#FF1744] text-[#FF1744] hover:bg-[#FF1744]/10 px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right: 3D Rocket with Astronaut */}
          <div className="relative animate-fade-in-up animation-delay-400">
            <div className="relative animate-float-slow">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#FF1744] rounded-full filter blur-3xl opacity-20 animate-pulse" />
              
              {/* Rocket SVG Illustration */}
              <div className="relative z-10">
                <svg viewBox="0 0 400 600" className="w-full h-auto drop-shadow-2xl">
                  {/* Rocket Body */}
                  <defs>
                    <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#FF1744', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#D50000', stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="windowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#4DD0E1', stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: '#0097A7', stopOpacity: 0.9 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Rocket Nose Cone */}
                  <path d="M 200 50 L 250 150 L 150 150 Z" fill="url(#rocketGradient)" stroke="#fff" strokeWidth="2" />
                  
                  {/* Main Rocket Body */}
                  <rect x="150" y="150" width="100" height="250" fill="url(#rocketGradient)" stroke="#fff" strokeWidth="2" rx="10" />
                  
                  {/* Window (Astronaut visible) */}
                  <circle cx="200" cy="220" r="40" fill="url(#windowGradient)" stroke="#fff" strokeWidth="3" />
                  
                  {/* Astronaut Helmet Inside */}
                  <circle cx="200" cy="220" r="25" fill="#fff" opacity="0.9" />
                  <circle cx="195" cy="215" r="3" fill="#333" />
                  <circle cx="205" cy="215" r="3" fill="#333" />
                  <path d="M 195 225 Q 200 230 205 225" stroke="#333" strokeWidth="2" fill="none" />
                  
                  {/* Rocket Details */}
                  <rect x="160" y="280" width="80" height="15" fill="#fff" opacity="0.3" rx="3" />
                  <rect x="160" y="310" width="80" height="15" fill="#fff" opacity="0.3" rx="3" />
                  
                  {/* Rocket Fins */}
                  <path d="M 150 350 L 120 420 L 150 400 Z" fill="#D50000" stroke="#fff" strokeWidth="2" />
                  <path d="M 250 350 L 280 420 L 250 400 Z" fill="#D50000" stroke="#fff" strokeWidth="2" />
                  
                  {/* Rocket Base */}
                  <rect x="150" y="400" width="100" height="30" fill="#B71C1C" stroke="#fff" strokeWidth="2" rx="5" />
                  
                  {/* Flames */}
                  <g className="animate-flicker">
                    <ellipse cx="170" cy="440" rx="15" ry="40" fill="#FFD600" opacity="0.8" />
                    <ellipse cx="170" cy="450" rx="10" ry="30" fill="#FF6D00" opacity="0.9" />
                    
                    <ellipse cx="200" cy="450" rx="18" ry="50" fill="#FFD600" opacity="0.8" />
                    <ellipse cx="200" cy="465" rx="12" ry="35" fill="#FF6D00" opacity="0.9" />
                    
                    <ellipse cx="230" cy="440" rx="15" ry="40" fill="#FFD600" opacity="0.8" />
                    <ellipse cx="230" cy="450" rx="10" ry="30" fill="#FF6D00" opacity="0.9" />
                  </g>
                  
                  {/* Stars around rocket */}
                  <circle cx="80" cy="100" r="2" fill="#fff" className="animate-pulse" />
                  <circle cx="320" cy="150" r="2" fill="#fff" className="animate-pulse" />
                  <circle cx="100" cy="300" r="2" fill="#fff" className="animate-pulse" />
                  <circle cx="310" cy="320" r="2" fill="#fff" className="animate-pulse" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#FF1744]" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

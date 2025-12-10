import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '../mock';
import { Button } from './ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Animated Stars */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => (
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
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Astronaut Emoji Alternative - Using Text */}
        <div className="mb-8 animate-float">
          <div className="inline-block text-8xl font-bold text-[#00d9ff] drop-shadow-[0_0_30px_rgba(0,217,255,0.5)]">
            🚀
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-orbitron">
          <span className="inline-block animate-fade-in-up">{personalInfo.name}</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#00d9ff] mb-6 font-exo animate-fade-in-up animation-delay-200">
          {personalInfo.title}
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          {personalInfo.tagline}
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 text-white hover:text-[#00d9ff] transition-all duration-200 hover:scale-110 backdrop-blur-sm"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 text-white hover:text-[#00d9ff] transition-all duration-200 hover:scale-110 backdrop-blur-sm"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={personalInfo.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 text-white hover:text-[#00d9ff] transition-all duration-200 hover:scale-110 backdrop-blur-sm"
          >
            <Twitter size={24} />
          </a>
          <a
            href={personalInfo.social.email}
            className="p-3 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 text-white hover:text-[#00d9ff] transition-all duration-200 hover:scale-110 backdrop-blur-sm"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-800">
          <Button
            onClick={scrollToAbout}
            className="bg-[#00d9ff] text-black hover:bg-[#00b8d4] px-8 py-6 text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Explore My Work
          </Button>
          <Button
            onClick={() => window.open(personalInfo.social.github, '_blank')}
            variant="outline"
            className="border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff]/10 px-8 py-6 text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            View GitHub
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#00d9ff]" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect, useRef, useState } from 'react';
import { Code, Rocket, Users, Award } from 'lucide-react';
import { personalInfo, skills, timeline } from '../mock';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { icon: Code, label: 'Experience', value: personalInfo.experience },
    { icon: Rocket, label: 'Projects', value: personalInfo.projects },
    { icon: Users, label: 'Clients', value: personalInfo.clients },
    { icon: Award, label: 'Awards', value: '10+' }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-[#050816] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF1744] rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF1744] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-russo">
            About <span className="text-[#FF1744]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF1744] mx-auto" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`p-6 bg-white/5 backdrop-blur-sm border-[#FF1744]/20 text-center hover:bg-[#FF1744]/10 hover:border-[#FF1744]/50 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-[#FF1744] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1 font-orbitron">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Astronaut on Moon with Bouncing Animation */}
          <div
            className={`space-y-6 ${
              isVisible ? 'animate-fade-in-left' : 'opacity-0'
            }`}
          >
            {/* Moon Surface with Bouncing Astronaut */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              {/* Moon Surface Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 rounded-lg">
                {/* Craters */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-gray-900 rounded-full opacity-30" />
                <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gray-900 rounded-full opacity-20" />
                <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-gray-900 rounded-full opacity-25" />
                
                {/* Moon ground */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gray-600 rounded-b-lg" />
              </div>

              {/* Rocket on Moon */}
              <div className="absolute bottom-24 left-1/4 transform -translate-x-1/2">
                <svg viewBox="0 0 80 140" className="w-20 h-auto">
                  {/* Rocket Body */}
                  <defs>
                    <linearGradient id="moonRocketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#FF1744', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#D50000', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Rocket */}
                  <path d="M 40 10 L 50 30 L 30 30 Z" fill="url(#moonRocketGradient)" stroke="#fff" strokeWidth="1" />
                  <rect x="30" y="30" width="20" height="60" fill="url(#moonRocketGradient)" stroke="#fff" strokeWidth="1" rx="3" />
                  
                  {/* Open Window/Door */}
                  <rect x="32" y="45" width="16" height="25" fill="#0097A7" stroke="#fff" strokeWidth="1" rx="2" />
                  
                  {/* Fins */}
                  <path d="M 30 75 L 22 95 L 30 90 Z" fill="#D50000" stroke="#fff" strokeWidth="1" />
                  <path d="M 50 75 L 58 95 L 50 90 Z" fill="#D50000" stroke="#fff" strokeWidth="1" />
                  
                  {/* Base */}
                  <rect x="30" y="90" width="20" height="8" fill="#B71C1C" stroke="#fff" strokeWidth="1" rx="2" />
                </svg>
              </div>

              {/* Bouncing Astronaut Coming Out of Rocket */}
              <div className="absolute bottom-24 left-1/4 transform -translate-x-1/2 animate-moon-bounce">
                <svg viewBox="0 0 100 120" className="w-24 h-auto">
                  {/* Astronaut */}
                  <defs>
                    <linearGradient id="suitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#f5f5f5', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#e0e0e0', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Body */}
                  <ellipse cx="50" cy="80" rx="25" ry="30" fill="url(#suitGradient)" stroke="#bdbdbd" strokeWidth="2" />
                  
                  {/* Arms */}
                  <ellipse cx="28" cy="75" rx="8" ry="18" fill="url(#suitGradient)" stroke="#bdbdbd" strokeWidth="1.5" transform="rotate(-20 28 75)" />
                  <ellipse cx="72" cy="75" rx="8" ry="18" fill="url(#suitGradient)" stroke="#bdbdbd" strokeWidth="1.5" transform="rotate(20 72 75)" />
                  
                  {/* Legs */}
                  <rect x="38" y="105" width="10" height="15" fill="url(#suitGradient)" stroke="#bdbdbd" strokeWidth="1.5" rx="3" />
                  <rect x="52" y="105" width="10" height="15" fill="url(#suitGradient)" stroke="#bdbdbd" strokeWidth="1.5" rx="3" />
                  
                  {/* Helmet */}
                  <circle cx="50" cy="45" r="22" fill="#4DD0E1" opacity="0.4" stroke="#fff" strokeWidth="2" />
                  <circle cx="50" cy="45" r="18" fill="#fff" opacity="0.9" />
                  
                  {/* Face */}
                  <circle cx="45" cy="43" r="2" fill="#333" />
                  <circle cx="55" cy="43" r="2" fill="#333" />
                  <path d="M 45 50 Q 50 53 55 50" stroke="#333" strokeWidth="1.5" fill="none" />
                  
                  {/* Helmet Rim */}
                  <ellipse cx="50" cy="65" rx="24" ry="5" fill="#bdbdbd" />
                  
                  {/* Backpack */}
                  <rect x="48" y="70" width="15" height="20" fill="#FF1744" stroke="#D50000" strokeWidth="1.5" rx="2" transform="translate(-8, 0)" />
                </svg>
              </div>

              {/* Stars in space background */}
              <div className="absolute top-0 left-0 right-0 h-1/2">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                      top: `${Math.random() * 50}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-russo">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">{personalInfo.bio}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF1744] rounded-full animate-pulse" />
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div
            className={`space-y-6 ${
              isVisible ? 'animate-fade-in-right' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-white font-russo mb-6">
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-[#FF1744] font-bold font-orbitron">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF1744] to-[#D50000] rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-white font-russo mb-8 text-center">
            Journey Timeline
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#FF1744]/30" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#FF1744] rounded-full transform -translate-x-1/2 z-10 ring-4 ring-[#050816] animate-pulse" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <Card className="p-6 bg-white/5 backdrop-blur-sm border-[#FF1744]/20 hover:bg-[#FF1744]/10 hover:border-[#FF1744]/50 transition-all duration-300 hover:scale-105">
                      <div className="text-[#FF1744] font-bold mb-2 font-orbitron">{item.year}</div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <div className="text-gray-400 text-sm mb-2">{item.company}</div>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00d9ff] rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d9ff] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-orbitron">
            About <span className="text-[#00d9ff]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`p-6 bg-white/5 backdrop-blur-sm border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-[#00d9ff] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Image and Bio */}
          <div
            className={`space-y-6 ${
              isVisible ? 'animate-fade-in-left' : 'opacity-0'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00d9ff] to-[#00b8d4] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <img
                src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxhc3Ryb25hdXR8ZW58MHx8fHwxNzY1MzM3NjAyfDA&ixlib=rb-4.1.0&q=85"
                alt="About"
                className="relative rounded-lg w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-orbitron">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">{personalInfo.bio}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse" />
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
            <h3 className="text-2xl font-bold text-white font-orbitron mb-6">
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-[#00d9ff]">{skill.level}%</span>
                  </div>
                  <Progress
                    value={isVisible ? skill.level : 0}
                    className="h-2 bg-white/10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white font-orbitron mb-8 text-center">
            Journey Timeline
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#00d9ff]/30" />

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
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#00d9ff] rounded-full transform -translate-x-1/2 z-10 ring-4 ring-[#050816]" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="text-[#00d9ff] font-bold mb-2">{item.year}</div>
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

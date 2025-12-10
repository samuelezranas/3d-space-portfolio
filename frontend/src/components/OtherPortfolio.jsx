import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Palette, Figma, Camera, Video } from 'lucide-react';
import { otherPortfolio } from '../mock';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const OtherPortfolio = () => {
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

  const getIcon = (iconName) => {
    const icons = {
      'Palette': Palette,
      'Figma': Figma,
      'Camera': Camera,
      'Video': Video
    };
    return icons[iconName] || Palette;
  };

  return (
    <section
      id="other"
      ref={sectionRef}
      className="py-20 bg-[#050816] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF1744] rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF1744] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-russo">
            Other <span className="text-[#FF1744]">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF1744] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond development, I explore various creative domains to bring comprehensive digital solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherPortfolio.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Card
                key={item.id}
                className={`group p-8 bg-white/5 backdrop-blur-sm border-[#FF1744]/20 hover:bg-[#FF1744]/10 hover:border-[#FF1744]/50 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => window.open(item.link, '_blank')}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-[#FF1744]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF1744]/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="text-[#FF1744]" size={32} />
                </div>

                {/* Type Badge */}
                <Badge
                  variant="outline"
                  className="mb-4 border-[#FF1744]/30 text-[#FF1744] bg-[#FF1744]/5 font-orbitron"
                >
                  {item.type}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF1744] transition-colors font-russo">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Link */}
                <div className="flex items-center text-[#FF1744] text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ExternalLink
                    size={16}
                    className="ml-1 transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherPortfolio;

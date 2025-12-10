import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Code, Pen, Package, Trophy, Palette, Mic } from 'lucide-react';
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

  const getIcon = (type) => {
    const icons = {
      'Open Source': Code,
      'Writing': Pen,
      'Package': Package,
      'Competitive': Trophy,
      'Creative': Palette,
      'Speaking': Mic
    };
    return icons[type] || Code;
  };

  return (
    <section
      id="other"
      ref={sectionRef}
      className="py-20 bg-[#050816] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d9ff] rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-orbitron">
            Other <span className="text-[#00d9ff]">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond client projects, I actively contribute to the developer community through various
            initiatives.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPortfolio.map((item, index) => {
            const Icon = getIcon(item.type);
            return (
              <Card
                key={item.id}
                className={`group p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#00d9ff]/50 cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => window.open(item.link, '_blank')}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#00d9ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#00d9ff]/20 transition-colors">
                  <Icon className="text-[#00d9ff]" size={24} />
                </div>

                {/* Type Badge */}
                <Badge
                  variant="outline"
                  className="mb-3 border-[#00d9ff]/30 text-[#00d9ff] bg-[#00d9ff]/5"
                >
                  {item.type}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d9ff] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Link */}
                <div className="flex items-center text-[#00d9ff] text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Learn More</span>
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

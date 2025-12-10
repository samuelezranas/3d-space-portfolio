import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050816] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-[#00d9ff] font-orbitron">COSMOS</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the future, one line of code at a time. Exploring the infinite possibilities
              of web development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['Home', 'About', 'Work', 'Other', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors text-left text-sm"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 text-gray-400 hover:text-[#00d9ff] transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 text-gray-400 hover:text-[#00d9ff] transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 text-gray-400 hover:text-[#00d9ff] transition-all duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-2 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 text-gray-400 hover:text-[#00d9ff] transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} {personalInfo.name}. Made with
              <Heart size={14} className="text-[#00d9ff] fill-[#00d9ff]" />
              and lots of coffee
            </p>
            <p className="text-gray-500 text-xs">Powered by creativity & caffeine</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

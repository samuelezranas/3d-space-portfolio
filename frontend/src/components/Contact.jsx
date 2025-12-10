import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../mock';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0e27] relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255, 23, 68, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-russo">
            Get In <span className="text-[#FF1744]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF1744] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate and create something extraordinary together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-russo mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always excited to discuss new projects, creative ideas, or opportunities to bring your visions to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="p-4 bg-white/5 backdrop-blur-sm border-[#FF1744]/20 hover:bg-[#FF1744]/10 hover:border-[#FF1744]/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FF1744]/10 flex items-center justify-center">
                    <Mail className="text-[#FF1744]" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-[#FF1744] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-white/5 backdrop-blur-sm border-[#FF1744]/20 hover:bg-[#FF1744]/10 hover:border-[#FF1744]/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FF1744]/10 flex items-center justify-center">
                    <MapPin className="text-[#FF1744]" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white">{personalInfo.location}</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Decorative Image */}
            <div className="hidden md:block mt-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF1744] to-[#D50000] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
                <img
                  src="https://images.unsplash.com/photo-1541873676-a18131494184?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXR8ZW58MHx8fHwxNzY1MzM3NjAyfDA&ixlib=rb-4.1.0&q=85"
                  alt="Contact"
                  className="relative rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-white/5 backdrop-blur-sm border-[#FF1744]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-white/5 border-[#FF1744]/20 text-white placeholder:text-gray-500 focus:border-[#FF1744] focus:ring-[#FF1744]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-white/5 border-[#FF1744]/20 text-white placeholder:text-gray-500 focus:border-[#FF1744] focus:ring-[#FF1744]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-white/5 border-[#FF1744]/20 text-white placeholder:text-gray-500 focus:border-[#FF1744] focus:ring-[#FF1744] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF1744] text-white hover:bg-[#D50000] font-medium py-6 transition-all duration-200 hover:scale-105 shadow-lg shadow-[#FF1744]/50 hover:shadow-[#FF1744]/70"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

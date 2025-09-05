'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Video, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    "Features",
    "Pricing",
    "API",
    "Integrations",
    "Changelog"
  ];

  const resourceLinks = [
    "Blog",
    "Help Center",
    "Video Tutorials",
    "Case Studies",
    "Community"
  ];

  const companyLinks = [
    "About",
    "Careers",
    "Contact",
    "Privacy Policy",
    "Terms of Service"
  ];

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center">
                <Video className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
                VideoAI
              </span>
            </div>
            <p className="text-gray-400">
              Transform any Reel, TikTok, or Short into fresh marketing ideas with AI-powered analysis.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700">
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 VideoAI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with ❤️ for creators</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
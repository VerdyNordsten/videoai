'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Users, Settings, Shield, Activity, Menu, Video, Upload, Lightbulb, FileText, Cog } from 'lucide-react';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { href: '/dashboard', icon: Video, label: 'Home' },
    { href: '/dashboard/upload', icon: Upload, label: 'Upload Video' },
    { href: '/dashboard/ideas', icon: Lightbulb, label: 'My Ideas' },
    { href: '/dashboard/templates', icon: FileText, label: 'Templates' },
    { href: '/dashboard/general', icon: Settings, label: 'General' },
    { href: '/dashboard/activity', icon: Activity, label: 'Activity' }
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`w-64 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 text-white shadow-2xl ${isSidebarOpen ? 'block' : 'hidden'} lg:block absolute lg:relative inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out`}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <Video className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">VideoAI</span>
          </div>
          
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link key={item.href} href={item.href} passHref>
                  <div 
                    className={`flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/40 backdrop-blur-sm border-r-4 border-white' 
                        : 'hover:bg-white/20'
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
        
        {/* User Profile in Sidebar */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" 
                className="w-10 h-10 rounded-full border-2 border-white" 
                alt="User"
              />
              <div>
                <p className="font-semibold text-sm">Sarah Chen</p>
                <p className="text-xs text-white/70">Pro Plan</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between bg-white border-b border-gray-200 p-4">
          <div className="flex items-center">
            <span className="font-medium">Dashboard</span>
          </div>
          <Button
            className="-mr-3"
            variant="ghost"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
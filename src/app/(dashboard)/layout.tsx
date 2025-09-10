'use client';

import { Inter, Poppins } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins' 
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Load Font Awesome
    const faScript = document.createElement('script');
    faScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
    faScript.crossOrigin = 'anonymous';
    faScript.referrerPolicy = 'no-referrer';
    document.head.appendChild(faScript);

    // Load Highcharts
    const highchartsScript = document.createElement('script');
    highchartsScript.src = 'https://code.highcharts.com/highcharts.js';
    document.head.appendChild(highchartsScript);

    // Cleanup scripts on unmount
    return () => {
      if (faScript.parentNode) {
        faScript.parentNode.removeChild(faScript);
      }
      if (highchartsScript.parentNode) {
        highchartsScript.parentNode.removeChild(highchartsScript);
      }
    };
  }, []);

  return (
    <div className={`${inter.variable} ${poppins.variable} bg-background font-sans`}>
      {children}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      <style>{`
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .gradient-sidebar { background: linear-gradient(135deg, #6366F1 0%, #06B6D4 100%); }
        .gradient-progress { background: linear-gradient(90deg, #6366F1 0%, #06B6D4 100%); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
        .btn-hover { transition: all 0.2s ease; }
        .btn-hover:hover { transform: scale(1.02); }
        
        :root {
          --background: #F9FAFB;
          --surface: #FFFFFF;
          --primary: #6366F1;
          --secondary: #06B6D4;
          --accent1: #F59E0B;
          --accent2: #10B981;
          --danger: #EF4444;
          --muted: #9CA3AF;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        /* Preserve Font Awesome icons */
        .fa, .fas, .far, .fal, .fab {
          font-family: "Font Awesome 6 Free", "Font Awesome 6 Brands" !important;
        }
      `}</style>
    </div>
  );
}
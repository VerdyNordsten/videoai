"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaSnapchat } from "react-icons/fa";

const iconConfigs = [
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaTiktok, color: "#000000" },
  { Icon: FaYoutube, color: "#FF0000" },
  { Icon: FaFacebook, color: "#1877F2" },
  { Icon: FaSnapchat, color: "#FFFC00" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaTiktok, color: "#000000" },
  { Icon: FaYoutube, color: "#FF0000" },
  { Icon: FaFacebook, color: "#1877F2" },
  { Icon: FaSnapchat, color: "#FFFC00" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaTiktok, color: "#000000" },
  { Icon: FaYoutube, color: "#FF0000" },
  { Icon: FaFacebook, color: "#1877F2" },
  { Icon: FaSnapchat, color: "#FFFC00" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaTiktok, color: "#000000" },
  { Icon: FaYoutube, color: "#FF0000" },
  { Icon: FaFacebook, color: "#1877F2" },
  { Icon: FaSnapchat, color: "#FFFC00" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaTiktok, color: "#000000" },
  { Icon: FaYoutube, color: "#FF0000" },
  { Icon: FaFacebook, color: "#1877F2" },
];

// Pre-calculated positions to avoid hydration mismatches
const getIconPositions = (count: number) => {
  const positions = [];
  const angleStep = (2 * Math.PI) / count;
  
  for (let i = 0; i < count; i++) {
    const angle = i * angleStep;
    const x = 50 + 50 * Math.cos(angle);
    const y = 50 + 50 * Math.sin(angle);
    
    // Round to fixed precision to avoid floating point differences
    positions.push({
      x: parseFloat(x.toFixed(10)),
      y: parseFloat(y.toFixed(10))
    });
  }
  
  return positions;
};

// Pre-calculate positions for each orbit (24 icons total, 8 per orbit)
const orbit1Positions = getIconPositions(8);
const orbit2Positions = getIconPositions(8);
const orbit3Positions = getIconPositions(8);

export default function SocialPlatformsSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits

  return (
    <section className="relative max-w-6xl mx-auto my-32 pl-10 flex items-center justify-between h-[30rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-black overflow-hidden rounded-3xl">
      {/* Left side: Heading and Text */}
      <div className="w-1/2 z-10">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Transform Your Content
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mb-6 max-w-lg">
          Upload any short video and get AI-powered hooks, scripts, and captions that convert across all major social platforms.
        </p>
        <div className="flex items-center gap-3">
          <Button variant="default">
            <Link href="/register"> Get Started</Link>
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-1/2 h-full flex items-center justify-start overflow-hidden">
        <div className="relative w-[50rem] h-[50rem] translate-x-[50%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg flex items-center justify-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-8 h-8 rounded-lg"></div>
            </div>
          </div>

          {/* Generate Orbits */}
          <div
            className="absolute rounded-full border-2 border-dotted border-gray-300 dark:border-gray-600"
            style={{
              width: "20rem",
              height: "20rem",
              animation: `spin 12s linear infinite`,
            }}
          >
            {iconConfigs.slice(0, 8).map((cfg, iconIdx) => {
              const pos = orbit1Positions[iconIdx];
              return (
                <div
                  key={iconIdx}
                  className="absolute bg-white dark:bg-gray-800 rounded-full p-1 shadow-md"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
                </div>
              );
            })}
          </div>
          
          <div
            className="absolute rounded-full border-2 border-dotted border-gray-300 dark:border-gray-600"
            style={{
              width: "28rem",
              height: "28rem",
              animation: `spin 18s linear infinite`,
            }}
          >
            {iconConfigs.slice(8, 16).map((cfg, iconIdx) => {
              const pos = orbit2Positions[iconIdx];
              return (
                <div
                  key={iconIdx}
                  className="absolute bg-white dark:bg-gray-800 rounded-full p-1 shadow-md"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
                </div>
              );
            })}
          </div>
          
          <div
            className="absolute rounded-full border-2 border-dotted border-gray-300 dark:border-gray-600"
            style={{
              width: "36rem",
              height: "36rem",
              animation: `spin 24s linear infinite`,
            }}
          >
            {iconConfigs.slice(16, 24).map((cfg, iconIdx) => {
              const pos = orbit3Positions[iconIdx];
              return (
                <div
                  key={iconIdx}
                  className="absolute bg-white dark:bg-gray-800 rounded-full p-1 shadow-md"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
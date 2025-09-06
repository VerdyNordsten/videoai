'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Integrations = () => {
  const integrations = [
    {
      name: "Notion",
      logo: "https://storage.googleapis.com/uxpilot-auth.appspot.com/62708f1b17-ebc70ee59635fac2ea92.png"
    },
    {
      name: "Google Docs",
      logo: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8a8dcefeaa-5aa77966af56198faac9.png"
    },
    {
      name: "Slack",
      logo: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e88b603365-ae49d08885457244a4d0.png"
    },
    {
      name: "Zapier",
      logo: "https://storage.googleapis.com/uxpilot-auth.appspot.com/28e3b7e382-5a4f1ac51dffa1315226.png"
    },
    {
      name: "Airtable",
      logo: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5b6322a9e1-9ea26b1a737366935318.png"
    },
    {
      name: "Trello",
      logo: "https://storage.googleapis.com/uxpilot-auth.appspot.com/444116b5a1-d6e545cf6d3e2fac7441.png"
    },
    {
      name: "Canva",
      logo: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7d8e9f0a2b-canva-logo.png"
    },
    {
      name: "Figma",
      logo: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3c4d5e6f7g-figma-logo.png"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            Seamless Integrations
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your favorite tools and platforms to streamline your content workflow
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {integrations.map((integration, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center justify-center">
                <img className="w-12 h-12 object-contain" src={integration.logo} alt={`${integration.name} logo`} />
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Don't see your tool? We're constantly adding new integrations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border border-gray-300 text-gray-700 hover:bg-gray-100">
              Request Integration
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
              View All Integrations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
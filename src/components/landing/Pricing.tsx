'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: "0",
      period: "month",
      features: [
        "3 video analyses per month",
        "Basic hook suggestions",
        "Hashtag recommendations",
        "Email support"
      ]
    },
    {
      name: "Pro",
      description: "For serious content creators",
      price: "29",
      period: "month",
      popular: true,
      features: [
        "Unlimited video analyses",
        "Advanced AI insights",
        "Brand style matching",
        "Export to all platforms",
        "Priority support",
        "Engagement prediction",
        "Team collaboration"
      ]
    },
    {
      name: "Agency",
      description: "For teams and agencies",
      price: "99",
      period: "month",
      features: [
        "Everything in Pro",
        "Batch processing",
        "API access",
        "Team collaboration",
        "Custom integrations",
        "Dedicated account manager",
        "White-label reports"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your content creation needs. All plans include our core AI analysis features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`border border-gray-200 dark:border-gray-700 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700' : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                  {plan.name === 'Free' ? 'Get Started Free' : plan.name === 'Pro' ? 'Start Pro Trial' : 'Contact Sales'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="text-green-500 mr-2">🔒</span>
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="text-blue-500 mr-2">🔄</span>
              <span className="text-sm">Cancel Anytime</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="text-pink-500 mr-2">💸</span>
              <span className="text-sm">30-Day Refund</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
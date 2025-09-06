'use client';

import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from '@/components/landing/testimonials-column';

const testimonials = [
  {
    text: "This tool literally 10x'd my content ideas! I went from struggling with hooks to having a library of viral-ready concepts. My engagement went up 300% in just 2 months!",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    name: "Sarah Chen",
    role: "Food Content Creator",
  },
  {
    text: "The AI predictions are scary accurate! It told me exactly which of my videos would go viral before I even posted them. Now I create content with confidence.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    name: "Marcus Rodriguez",
    role: "Fitness Influencer",
  },
  {
    text: "As a busy entrepreneur, I don't have time to analyze trends manually. This AI does it all for me and suggests content that actually converts to sales!",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    name: "Emma Thompson",
    role: "Beauty & Lifestyle",
  },
  {
    text: "The hook generator alone is worth the subscription. I've never had so many creative angles for the same topic. My content feels fresh and engaging again!",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    name: "David Kim",
    role: "Tech Reviewer",
  },
  {
    text: "Game changer for my travel content! The AI understands different niches and gives me location-specific hooks that resonate with my audience perfectly.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    name: "Lisa Park",
    role: "Travel Creator",
  },
  {
    text: "We use this for all our clients' content strategies. The batch processing feature saves us 20+ hours per week, and the results speak for themselves!",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    name: "Alex Johnson",
    role: "Marketing Agency",
  },
  {
    text: "The analytics dashboard helped us identify our best-performing content patterns. Now we create more of what works and less of what doesn't.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
    name: "Jennifer Wu",
    role: "Content Strategist",
  },
  {
    text: "I was skeptical about AI-generated content, but this tool exceeded my expectations. It's like having a team of experienced marketers at my fingertips.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
    name: "Michael Torres",
    role: "E-commerce Brand Owner",
  },
  {
    text: "The trend prediction feature is gold! I'm always ahead of the curve now, creating content that's relevant before my competitors even know the trend exists.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg",
    name: "Amanda Foster",
    role: "Social Media Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-900 my-20 relative py-20">

      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700">Testimonials</div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mt-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600 dark:text-gray-400">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
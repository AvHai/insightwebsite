import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, ArrowRight, Palette, ArrowLeft } from 'lucide-react';
import techBg from '/track/tech-bg.jpg';
import artBg from '/track/art-bg.jpg';

const TrackSection: React.FC = () => {
  return (
    <div className="w-full">
      {/* Tech Track */}
      <div className="relative h-full w-full overflow-hidden tech-grid tech-particles">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${techBg})` }}
        />
        <div className="relative h-full flex flex-col justify-center items-center z-10 text-center p-16 sm:p-8 lg:p-16">
          <div className="mb-6 p-3 rounded-full bg-tech-primary/20 backdrop-blur-sm">
            <Eye className="w-10 h-10 text-tech-accent hidden sm:inline" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-orbitron font-bold mb-6 text-tech-glow">
            Track 1
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-semibold mb-6 text-foreground">
            Computer Vision Hackathon
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-xs sm:max-w-lg mb-8 leading-relaxed">
            Dive into the world of computer vision! Solve real-world challenges in healthcare, security, environment, and more using cutting-edge AI algorithms.
          </p>
          <div className="space-y-4 text-base sm:text-lg lg:text-xl">
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-4 h-4 text-tech-accent" />
              <span>Medical Imaging & Diagnostics</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-4 h-4 text-tech-accent" />
              <span>Security & Surveillance Systems</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-4 h-4 text-tech-accent" />
              <span>Agriculture and Food Production</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-4 h-4 text-tech-accent" />
              <span>And Many More</span>
            </div>
          </div>
        </div>
      </div>
      {/* Art Track */}
      <div className="relative h-full w-full overflow-hidden art-grid art-particles">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${artBg})` }}
        />
        <div className="relative h-full flex flex-col justify-center items-center z-10 text-center p-16 sm:p-8 lg:p-16">
          <div className="mb-6 p-3 rounded-full bg-art-primary/20 backdrop-blur-sm">
            <Palette className="w-10 h-10 text-art-accent hidden sm:inline" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-orbitron font-bold mb-6 text-art-glow">
            Track 2
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-semibold mb-6 text-foreground">
            AI Poster Making Competition
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-xs sm:max-w-lg mb-8 leading-relaxed">
            Showcase your creativity and AI knowledge through visually stunning posters. Combine artistic design with artificial intelligence concepts.
          </p>
          <div className="space-y-4 text-base sm:text-lg lg:text-xl">
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-4 h-4 text-art-accent" />
              <span>Theme: AI for Social Good</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-4 h-4 text-art-accent" />
              <span>Theme: Future of Technology</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-4 h-4 text-art-accent" />
              <span>Theme: Creative AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackSection;
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import HeroCarousel from '@/components/HeroCarousel';
import TrackSection from '@/components/TrackSection';
import LogoRibbon from '@/components/LogoRibbon';
import { Calendar, Trophy, Users, Mail, Zap, Star, Award, Speech } from 'lucide-react';
import { useEffect, useState } from "react";


const Index = () => {
  const images = [
    "/herobg/hackathon-hero-1.jpg",
    "/herobg/hackathon-hero-2.jpg",
    "/herobg/hackathon-hero-3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="min-h-screen bg-background">
      {/* Logo Ribbon */}
      <LogoRibbon />
     <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div> 
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-2 py-2">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <Badge variant="outline" className="w-fit border-primary text-primary glow-primary">
              🚀 Registration Open Now
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-futuristic font-semibold text-gradient-primary">
              INSIGHT 2.0
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground/90 ">
              Frontier Application on Computer Vision to Ameliorate Mankind
            </p>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Join the ultimate hackathon experience where cutting-edge technology meets creative innovation. 
              Push the boundaries of AI and computer vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="hero" className="animate-glow-pulse"
          onClick={() => window.open('https://forms.gle/k2tVrDXQzDhHfji67', '_blank')}>
                Register Now
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span>19th September,2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-accent" />
                <span>Free Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-secondary" />
                <span>Cash Prizes</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up flex justify-center items-center">
            <div className="w-full max-w-2xl">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-5 pb-60 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold text-gradient-primary mb-8">
            About Insight 2.0
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
             Insight 2.0 is more than just a hackathon — its a convergence of brilliant minds, cutting-edge technology, and limitless creativity. Our mission is to foster innovation in artificial intelligence and computer vision, empowering the next generation of tech leaders.This year, Insight 2.0 comes as a 7-day hackathon with computer vision as the central theme. Participants can showcase their skills across two exciting tracks: the computer vision hackathon and a creative poster-making competition.
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="p-6 rounded-2xl bg-card border-glow hover:glow-primary transition-all duration-300">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-muted-foreground">
                  Push the boundaries of what's possible with AI and computer vision technologies.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border-glow hover:glow-secondary transition-all duration-300">
                <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Learn & Grow</h3>
                <p className="text-muted-foreground">
                  Explore new technologies and gain hands-on experience in AI and computer vision.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border-glow hover:glow-accent transition-all duration-300">
                <Speech className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Gain Knowledge</h3>
                <p className="text-muted-foreground">
                  Talks from Industry Experts in the Field of Computer Vision.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border-glow hover:glow-accent transition-all duration-300">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Win Big</h3>
                <p className="text-muted-foreground">
                  Compete for exciting cash prizes and recognition in the tech community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <TrackSection />

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-background via-card to-background">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold text-gradient-primary">
            Ready to Shape the Future?
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl text-muted-foreground">
              Join hundreds of innovators, developers, and creators in the most exciting hackathon of the year.
            </p>
            
            <Button variant="hero" size="hero" className="animate-glow-pulse" onClick={() => window.open('https://forms.gle/k2tVrDXQzDhHfji67', '_blank')}>
              Register for Free
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border-glow">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">September 19th, 2025</h3>
                <p className="text-muted-foreground">Final date of Presentation</p>
              </div>
              
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border-glow">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Free Registration</h3>
                <p className="text-muted-foreground">No barriers to innovation</p>
              </div>
              
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border-glow">
                <Trophy className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Exciting Cash Prizes!</h3>
                <p className="text-muted-foreground"> Win BIG </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CEDS*/}
      <section className="py-20 px-6 bg-gradient-to-r from-background via-card to-background">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
            About Centre of Excellence for Data Science
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-6">
            <p className="text-xl text-muted-foreground">
              The Centre of Excellence in Data Science was established with the goal of exploring cutting edge technologies such as Artificial Intelligence, Machine Learning, Computer Vision, Natural Language Processing, Computational Biology and so on. The centre aims to setup a high-performance computing laboratory to produce top quality publications and patents along with promotion of industry – academia relations and inter-disciplinary collaborations with reputed national and international organizations.
            </p>
            
            <Button variant="hero" size="hero" className="glow-pulse " onClick={() => window.open('https://iemceds.wixsite.com/home/vision', '_blank')}>
              Visit Website
            </Button>
            
          </div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold text-gradient-primary text-center mb-12">
            Rules & Regulations
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">General Rules</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Teams can have 2 to 5 members maximum

                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    All team members must be registered participants
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Projects must be started during the hackathon period
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Use of external APIs and libraries is allowed
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Final submission must include source code and demo for the hackathon track.
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary mb-4">Competition Guidelines</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Projects will be judged on innovation, technical merit, and presentation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Plagiarism will result in immediate disqualification
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    All intellectual property belongs to the creators
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Final presentations are limited to 15 minutes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers & Sponsors */}
      <section className="py-20 px-6 bg-gradient-to-r from-card/50 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold text-gradient-primary mb-12">
            Organizers & Sponsors
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Organized by</h3>
              <div className="p-8 rounded-2xl bg-card border-glow">
                <h4 className="text-3xl font-futuristic font-bold text-gradient-accent mb-4">
                  Department of CSE(AIML) and CSBS <br/> in association with IEM Centre of Excellence for Data Science
                </h4>
                {/* <p className="text-lg text-muted-foreground">
                  Leading innovation in technology education and fostering the next generation of AI pioneers.
                </p> */}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technically Sponsored by</h3>
              <div className="p-8 rounded-2xl bg-card border-glow">
                <h4 className="text-3xl font-futuristic font-bold text-gradient-primary mb-4">
                  Technically co-sponsored by <br/> ISTE Kolkata & Internet Society Kolkata Chapter
                </h4>
                {/* <p className="text-lg text-muted-foreground">
                  Powering innovation through cutting-edge technology solutions and industry expertise.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Organizing Committee */}
      <section className="py-20 px-6">
  <div className="container mx-auto">
    <h2 className="text-4xl md:text-5xl font-futuristic font-bold text-gradient-primary text-center mb-12">
      Organizing Committee
    </h2>

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
      {/* Left Column: Senior Members */}
      <div className="space-y-10">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">Patron</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Prof. Banani Chakrabarti, Chancellor of IEM-UEM Group, India.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">Honorary Chair</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Prof. (Dr.) Satyajit Chakrabarti, Director of IEM-UEM Group, India.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">General Chair</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Prof. (Dr.) Amartya Mukherjee, HoD, CSE (AIML), CSBS, IEM, Kolkata.</li>
            <li>Prof. (Dr.) Ayan Kumar Panja, Assistant HoD, CSE (AIML), CSBS, IEM, Kolkata.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">Program In-Charge</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Prof. (Dr.) Swarnendu Ghosh, CSE (AIML), IEM, Kolkata.</li>
            <li>Prof. (Dr.) Piyali Datta, CSBS, IEM, Kolkata.</li>
          </ul>
        </div>

        
      </div>

      {/* Right Column: Student Coordinators */}
      <div className="space-y-10">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">Coordinator</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Prof. Subhadip Chandra, Assistant Professor, CSE (AIML), CSBS, IEM, Kolkata.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-accent mb-4">Student Coordinators</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Avhishek Nandi, 4th Year CSE (AIML), IEM, Kolkata.</li>
            <li>Barnali Paul, 4th Year CSE (AIML), IEM, Kolkata.</li>
            <li>Durjoy Chatterjee, 4th Year CSE (AIML), IEM, Kolkata.</li>
            <li>Riyanka Das, 4th Year CSE (AIML), IEM, Kolkata.</li>
            <li>Anamitra Sarkar, 3rd Year CSE (AIML), IEM, Kolkata.</li>
            <li>Mekhla Sen, 3rd Year CSBS, IEM, Kolkata.</li>
            <li>Ariyan Saha, 2nd Year CSE (AIML), IEM, Kolkata.</li>
            <li>Rahi Chakraborty, 2nd Year CSBS, IEM, Kolkata.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      </section>
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <h3 className="text-2xl font-futuristic font-bold text-gradient-primary mb-2">
                Insight 2.0
              </h3>
              <p className="text-muted-foreground">
                © 2025 Insight Hackathon. All rights reserved.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-2">
                For inquiries, contact us at:
              </p>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:insighthackathon2024@gmail.com" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  insighthackathon2024@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
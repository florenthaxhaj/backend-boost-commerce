
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80)',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            New Collection
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Redefine Your <span className="text-gradient">Style</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-lg">
            Discover our carefully curated products designed for the modern lifestyle. Quality that speaks for itself.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full hover:translate-y-[-2px] transition-all">
              <Link to="/products">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-primary/20">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-float">
        <div className="h-14 w-8 rounded-full border-2 border-primary/30 flex justify-center p-1">
          <div className="h-2 w-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

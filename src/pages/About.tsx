
import React from 'react';
import Layout from '../components/layout/Layout';
import { Separator } from '@/components/ui/separator';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Elegance</h1>
          <Separator className="mb-8" />
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-foreground/80 leading-relaxed">
                Founded in 2020, Elegance was born from a passion for beautiful design and quality craftsmanship. 
                What started as a small boutique has grown into a global brand, but our core values remain the same: 
                creating products that blend timeless elegance with modern innovation.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                At Elegance, we believe that everyone deserves access to thoughtfully designed products that enhance 
                their daily lives. We're committed to creating items that are not only beautiful but functional, 
                sustainable, and accessible.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Quality</h3>
                  <p className="text-foreground/80">We never compromise on materials or craftsmanship, ensuring our products stand the test of time.</p>
                </div>
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                  <p className="text-foreground/80">We're committed to reducing our environmental impact through responsible sourcing and production practices.</p>
                </div>
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Innovation</h3>
                  <p className="text-foreground/80">We constantly explore new technologies and designs to bring fresh perspectives to everyday items.</p>
                </div>
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Community</h3>
                  <p className="text-foreground/80">We believe in giving back and supporting the communities where we operate.</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Elegance is powered by a diverse team of designers, engineers, craftspeople, and 
                customer service experts who share a passion for creating exceptional products and experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-32 h-32 bg-secondary/40 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-medium">Jane Doe</h3>
                  <p className="text-sm text-foreground/70">Founder & CEO</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-secondary/40 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-medium">John Smith</h3>
                  <p className="text-sm text-foreground/70">Head of Design</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-secondary/40 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-foreground/70">Director of Operations</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

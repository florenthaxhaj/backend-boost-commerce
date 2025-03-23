
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewsletterSubscribe from './NewsletterSubscribe';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter */}
        <div className="mb-16 max-w-md mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-foreground/70 mb-6">
            Stay updated with our latest products, offers, and insights.
          </p>
          <NewsletterSubscribe />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=Electronics" className="text-foreground/70 hover:text-foreground transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-foreground/70 hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=Home" className="text-foreground/70 hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-foreground/70 hover:text-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/70">
                <MapPin className="h-4 w-4" />
                <span>123 Design Street, NY 10001</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="h-4 w-4" />
                <span>hello@elegance.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <Button size="icon" variant="ghost" className="rounded-full h-10 w-10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-10 w-10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-10 w-10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="text-center pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Elegance. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

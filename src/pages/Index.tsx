
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Truck, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  // Categories with images
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/products?category=Electronics"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1563170423-18f482d82cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/products?category=Accessories"
    },
    {
      name: "Home",
      image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/products?category=Home"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Browse our collections and find the perfect match for your lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to={category.link}
                className="group relative overflow-hidden rounded-lg aspect-square hover-lift"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all z-10" />
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                    <h3 className="text-lg font-medium">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Promotional Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Summer Collection <span className="text-gradient">2023</span>
              </h2>
              <p className="text-foreground/70">
                Discover our specially curated summer collection designed for comfort, style, and versatility. Perfect for your summer adventures.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/products">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Summer Collection"
                className="rounded-lg shadow-xl hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">Up to</p>
                <p className="text-3xl font-bold text-primary">30% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/30">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Secure Checkout</h3>
              <p className="text-foreground/70">
                Safe and secure payment methods to ensure your information is protected.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/30">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Fast Shipping</h3>
              <p className="text-foreground/70">
                Quick and reliable delivery to your doorstep, with tracking updates.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/30">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Quality Guarantee</h3>
              <p className="text-foreground/70">
                We stand behind the quality of our products with a satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

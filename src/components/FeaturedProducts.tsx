
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '@/utils/productData';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-foreground/70">
            Discover our handpicked selection of premium products that exemplify 
            quality, design, and functionality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="default" className="rounded-full">
            <Link to="/products" className="inline-flex items-center">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import { products } from '@/utils/productData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, SlidersHorizontal, X } from 'lucide-react';

const Products: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [sortOption, setSortOption] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'priceLow') {
      return a.price - b.price;
    } else if (sortOption === 'priceHigh') {
      return b.price - a.price;
    } else if (sortOption === 'nameAZ') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'nameZA') {
      return b.name.localeCompare(a.name);
    }
    // Default: 'featured' - just return original order
    return 0;
  });

  // Reset search when category changes
  useEffect(() => {
    setSearchTerm('');
  }, [selectedCategory]);

  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <Layout>
      {/* Header */}
      <div className="bg-secondary/30 py-20 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {selectedCategory ? selectedCategory : 'All Products'}
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Discover our collection of premium products designed for the modern lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Mobile Filters Toggle Button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <Filter className="h-4 w-4" />
              {isMobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </Button>
            
            <div className="text-sm text-foreground/70">
              Showing {sortedProducts.length} products
            </div>
          </div>

          {/* Sidebar Filters - Desktop and Mobile (conditional) */}
          <div className={`lg:block ${isMobileFilterOpen ? 'block' : 'hidden'}`}>
            <div className="bg-secondary/20 p-6 rounded-lg sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden"
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Search</h3>
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  <Button
                    variant={!selectedCategory ? "default" : "outline"}
                    size="sm"
                    className="mr-2 mb-2"
                    onClick={() => setSelectedCategory(null)}
                  >
                    All
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      className="mr-2 mb-2"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price Range (Simplified for demo) */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="flex items-center gap-2">
                  <Input placeholder="Min" type="number" className="w-full" />
                  <span>-</span>
                  <Input placeholder="Max" type="number" className="w-full" />
                </div>
              </div>

              {/* Reset Filters */}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="text-sm text-foreground/70 hidden lg:block">
                Showing {sortedProducts.length} products
              </div>
              
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-foreground/70" />
                <span className="text-sm text-foreground/70">Sort by:</span>
                <Select
                  value={sortOption}
                  onValueChange={(value) => setSortOption(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="priceLow">Price: Low to High</SelectItem>
                    <SelectItem value="priceHigh">Price: High to Low</SelectItem>
                    <SelectItem value="nameAZ">Name: A to Z</SelectItem>
                    <SelectItem value="nameZA">Name: Z to A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-foreground/70 mb-4">
                  Try adjusting your search or filter criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;

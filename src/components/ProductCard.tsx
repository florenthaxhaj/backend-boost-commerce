
import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Eye } from 'lucide-react';
import { Product } from '@/utils/productData';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToCart } = useCart();
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg bg-background hover-lift",
        className
      )}
    >
      {/* Image Container */}
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
      </div>
      
      {/* Hover Actions */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <Button 
          size="icon" 
          variant="secondary"
          className="h-9 w-9 rounded-full glass-card"
          onClick={() => addToCart(product)}
          aria-label="Add to cart"
        >
          <Plus className="h-4 w-4" />
        </Button>
        
        <Button
          size="icon"
          variant="secondary"
          className="h-9 w-9 rounded-full glass-card"
          aria-label="Quick view"
          asChild
        >
          <Link to={`/product/${product.id}`}>
            <Eye className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      {/* Product Info */}
      <div className="p-4 space-y-2">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-foreground truncate">{product.name}</h3>
        </Link>
        <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
        
        <div className="pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full rounded-md"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getProductById } from '@/utils/productData';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Check,
  Truck,
  RefreshCw,
  Shield
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/utils/productData';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = getProductById(Number(id));
  const similarProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 md:px-6 py-32 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-foreground/70 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 py-6 mt-16">
        <div className="text-sm text-foreground/60">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <Link 
            to={`/products?category=${product.category}`} 
            className="hover:text-foreground transition-colors"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground/90">{product.name}</span>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="container mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-secondary/10 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl font-bold text-primary mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
            
            <div className="border-t border-border pt-6">
              <p className="text-foreground/70 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Quantity Selector */}
            <div className="border-t border-border pt-6">
              <p className="font-medium mb-3">Quantity</p>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={increaseQuantity}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="flex-1"
                asChild
              >
                <Link to="/cart">Buy Now</Link>
              </Button>
            </div>
            
            {/* Product Features */}
            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex items-center text-sm">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span>In stock and ready to ship</span>
              </div>
              <div className="flex items-center text-sm">
                <Truck className="h-4 w-4 text-primary mr-2" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center text-sm">
                <RefreshCw className="h-4 w-4 text-primary mr-2" />
                <span>30-day returns policy</span>
              </div>
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 text-primary mr-2" />
                <span>1-year warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Products */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;

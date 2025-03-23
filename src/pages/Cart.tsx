
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Minus, 
  Plus, 
  Trash2, 
  ArrowLeft, 
  ShoppingCart,
  CreditCard
} from 'lucide-react';

const Cart: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    cartTotal
  } = useCart();
  
  const subtotal = cartTotal;
  const shipping = cartTotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-secondary/20 rounded-lg">
            <ShoppingCart className="h-12 w-12 mx-auto text-foreground/30 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-foreground/70 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild size="lg">
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-secondary/10 rounded-lg p-6">
                <div className="flow-root">
                  <ul className="divide-y divide-border">
                    {cartItems.map((item) => (
                      <li key={item.id} className="py-6 first:pt-0 last:pb-0">
                        <div className="flex flex-col sm:flex-row gap-6">
                          {/* Product Image */}
                          <div className="h-24 w-24 flex-shrink-0 rounded-md overflow-hidden bg-secondary/20">
                            <Link to={`/product/${item.id}`}>
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            </Link>
                          </div>

                          {/* Product Info */}
                          <div className="flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between">
                                <Link 
                                  to={`/product/${item.id}`}
                                  className="text-lg font-medium hover:underline"
                                >
                                  {item.name}
                                </Link>
                                <p className="ml-4 text-lg font-medium">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                              </div>
                              <p className="mt-1 text-sm text-foreground/60">
                                ${item.price.toFixed(2)} each
                              </p>
                            </div>
                            
                            <div className="flex flex-1 items-end justify-between pt-4">
                              {/* Quantity Controls */}
                              <div className="flex items-center border border-border rounded-md">
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-8 w-8 rounded-none"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-8 w-8 rounded-none"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>

                              {/* Remove Button */}
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-foreground/60 hover:text-destructive"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <Button 
                    variant="outline" 
                    asChild
                  >
                    <Link to="/products">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="destructive" 
                    onClick={clearCart}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/10 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-foreground/70">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <p>Shipping</p>
                    <p>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</p>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <p>Tax (7%)</p>
                    <p>${tax.toFixed(2)}</p>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between font-bold">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
                
                {/* Promo Code */}
                <div className="mt-6">
                  <p className="font-medium mb-2">Promo Code</p>
                  <div className="flex gap-2">
                    <Input placeholder="Enter code" className="flex-1" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>
                
                {/* Checkout Button */}
                <Button 
                  className="w-full mt-6" 
                  size="lg"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Proceed to Checkout
                </Button>
                
                {/* Additional Info */}
                <div className="mt-6 text-xs text-foreground/60">
                  <p className="mb-2">We accept:</p>
                  <div className="flex gap-2">
                    <div className="bg-background px-2 py-1 rounded">Visa</div>
                    <div className="bg-background px-2 py-1 rounded">Mastercard</div>
                    <div className="bg-background px-2 py-1 rounded">PayPal</div>
                    <div className="bg-background px-2 py-1 rounded">Apple Pay</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;

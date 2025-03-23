
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // FAQ categories and items
  const faqCategories = [
    {
      id: "shipping",
      label: "Shipping & Delivery",
      questions: [
        {
          id: "shipping-time",
          question: "How long will my order take to arrive?",
          answer: "Standard shipping typically takes 3-7 business days. Express shipping is available with delivery in 1-3 business days. International shipping may take 7-14 business days depending on the destination."
        },
        {
          id: "shipping-tracking",
          question: "How do I track my order?",
          answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or through the carrier's site."
        },
        {
          id: "shipping-countries",
          question: "Which countries do you ship to?",
          answer: "We currently ship to the United States, Canada, United Kingdom, Australia, and most European countries. We're constantly expanding our shipping capabilities."
        },
        {
          id: "shipping-free",
          question: "Do you offer free shipping?",
          answer: "Yes! We offer free standard shipping on all orders over $75 within the United States. International orders and orders below $75 will have shipping calculated at checkout."
        }
      ]
    },
    {
      id: "returns",
      label: "Returns & Exchanges",
      questions: [
        {
          id: "returns-policy",
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items in new, unused condition with original packaging. Custom orders and sale items may have different return eligibility."
        },
        {
          id: "returns-process",
          question: "How do I return an item?",
          answer: "To initiate a return, go to your account, select the order containing the item(s) you wish to return, and follow the return instructions. You can also contact customer service for assistance."
        },
        {
          id: "returns-refund",
          question: "When will I receive my refund?",
          answer: "Once we receive your return, it takes 3-5 business days to inspect and process. After approval, your refund will be issued to your original payment method and may take an additional 2-7 business days to appear in your account."
        },
        {
          id: "returns-exchange",
          question: "Can I exchange an item instead of returning it?",
          answer: "Yes, you can request an exchange for a different size, color, or item of equal value. Follow the return process and select 'exchange' instead of 'refund'."
        }
      ]
    },
    {
      id: "products",
      label: "Product Information",
      questions: [
        {
          id: "products-materials",
          question: "What materials do you use in your products?",
          answer: "We use high-quality, ethically sourced materials in all our products. Specific materials vary by item and are listed in each product's description."
        },
        {
          id: "products-care",
          question: "How should I care for my items?",
          answer: "Care instructions are specific to each product and can be found on the product page and included with your order. Generally, we recommend gentle handling and following the specific washing/cleaning instructions provided."
        },
        {
          id: "products-warranty",
          question: "Do your products come with a warranty?",
          answer: "Yes, our products come with a 1-year limited warranty against manufacturing defects. Some premium items may have extended warranty options."
        }
      ]
    },
    {
      id: "account",
      label: "Account & Orders",
      questions: [
        {
          id: "account-create",
          question: "How do I create an account?",
          answer: "You can create an account by clicking on the 'Sign Up' or 'Create Account' button at the top of our website. You'll need to provide your name, email address, and create a password."
        },
        {
          id: "account-order",
          question: "How can I check my order status?",
          answer: "Log into your account and navigate to 'Order History' to view all your orders and their current status. You can also click on a specific order for more detailed information."
        },
        {
          id: "account-payment",
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. Some regions may also offer additional payment options at checkout."
        }
      ]
    }
  ];

  const filteredFaqs = searchQuery ? 
    faqCategories.map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.questions.length > 0) : 
    faqCategories;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
          <Separator className="mb-8" />
          
          {/* Search section */}
          <div className="bg-secondary/10 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">How can we help you today?</h2>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
              <Input 
                placeholder="Search for answers..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Main content */}
          <Tabs defaultValue="faqs" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
            </TabsList>
            
            <TabsContent value="faqs" className="mt-6">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((category) => (
                  category.questions.length > 0 && (
                    <div key={category.id} className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">{category.label}</h3>
                      <Accordion type="single" collapsible className="bg-background border rounded-lg">
                        {category.questions.map((faq) => (
                          <AccordionItem key={faq.id} value={faq.id}>
                            <AccordionTrigger className="px-6 hover:bg-secondary/5 text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <p className="text-foreground/80">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl font-medium">No results found for "{searchQuery}"</p>
                  <p className="text-foreground/70 mt-2">Try a different search term or browse our categories</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6">
              <div className="bg-background border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                <p className="mb-4">We offer several shipping options to meet your needs:</p>
                
                <div className="space-y-4 mb-6">
                  <div className="border-b pb-4">
                    <h4 className="font-medium">Standard Shipping</h4>
                    <p className="text-foreground/70">3-7 business days - $5.99 (Free on orders over $75)</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-medium">Express Shipping</h4>
                    <p className="text-foreground/70">1-3 business days - $12.99</p>
                  </div>
                  <div>
                    <h4 className="font-medium">International Shipping</h4>
                    <p className="text-foreground/70">7-14 business days - Rates calculated at checkout</p>
                  </div>
                </div>
                
                <p className="mb-4">All orders are processed within 1-2 business days. Tracking information will be emailed once your order ships.</p>
                
                <Button variant="outline" asChild>
                  <a href="/help#shipping-policy">View Full Shipping Policy</a>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="contact" className="mt-6">
              <div className="bg-background border rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Still Need Help?</h3>
                <p className="mb-6">Our customer service team is available to assist you with any questions or concerns.</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                  <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Support
                  </Button>
                </div>
                
                <p className="mt-6 text-foreground/70">
                  Customer service hours: Monday-Friday, 9AM-6PM EST
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Quick links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary/10 p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Returns & Exchanges</h3>
              <p className="text-foreground/70 mb-4">Learn about our 30-day return policy</p>
              <Button variant="link" asChild>
                <a href="/returns">View Policy</a>
              </Button>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Size Guide</h3>
              <p className="text-foreground/70 mb-4">Find your perfect fit with our size charts</p>
              <Button variant="link" asChild>
                <a href="/size-guide">View Sizes</a>
              </Button>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Product Care</h3>
              <p className="text-foreground/70 mb-4">Tips to keep your products looking their best</p>
              <Button variant="link" asChild>
                <a href="/product-care">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpCenter;

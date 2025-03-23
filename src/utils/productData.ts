
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with our premium wireless headphones. Featuring noise cancellation and 30-hour battery life.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    featured: true
  },
  {
    id: 2,
    name: "Minimalist Watch",
    description: "A sleek minimalist timepiece that complements any style. Water-resistant and made with premium materials.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Accessories",
    featured: true
  },
  {
    id: 3,
    name: "Modern Desk Lamp",
    description: "Illuminate your workspace with this elegantly designed desk lamp. Features adjustable brightness and color temperature.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home",
    featured: true
  },
  {
    id: 4,
    name: "Leather Backpack",
    description: "Hand-crafted premium leather backpack, perfect for daily use or weekend adventures. Multiple compartments for organization.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Accessories",
    featured: true
  },
  {
    id: 5,
    name: "Smart Home Assistant",
    description: "Control your home with voice commands. Play music, check the weather, and control smart devices seamlessly.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics"
  },
  {
    id: 6,
    name: "Ceramic Coffee Mug Set",
    description: "Set of 4 handcrafted ceramic mugs. Elegant design with comfortable handle and perfect size for your morning coffee.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home"
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    description: "Take your music anywhere with this compact yet powerful Bluetooth speaker. Waterproof and with 12-hour battery life.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics"
  },
  {
    id: 8,
    name: "Wool Throw Blanket",
    description: "Cozy up with our 100% wool throw blanket. Perfect for cool evenings or as an elegant accent to your living space.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home"
  },
  {
    id: 9,
    name: "Professional Camera Kit",
    description: "Capture stunning photos and videos with this professional DSLR camera kit. Includes multiple lenses and accessories.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics"
  },
  {
    id: 10,
    name: "Ergonomic Office Chair",
    description: "Work in comfort with this premium ergonomic office chair. Adjustable height, lumbar support, and breathable mesh material.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home"
  },
  {
    id: 11,
    name: "Vintage Vinyl Record Player",
    description: "Experience the warm sound of vinyl with this vintage-inspired record player. Built-in speakers and Bluetooth connectivity.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1629755083381-93a9d8d5262c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics"
  },
  {
    id: 12,
    name: "Leather Wallet",
    description: "Handcrafted genuine leather wallet with RFID protection. Multiple card slots and sleek minimalist design.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Accessories"
  },
  {
    id: 13,
    name: "Stainless Steel Water Bottle",
    description: "Keep your drinks cold for 24 hours or hot for 12 hours with this vacuum-insulated stainless steel water bottle. Leak-proof and durable.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Accessories"
  },
  {
    id: 14,
    name: "Smart Fitness Tracker",
    description: "Monitor your health and fitness with this advanced tracker. Tracks steps, heart rate, sleep, and more with a 7-day battery life.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    featured: true
  },
  {
    id: 15,
    name: "Scented Candle Collection",
    description: "Set of 3 premium scented candles made with natural soy wax. Perfect for creating a cozy atmosphere in any room.",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1603006905393-c8bfd9263d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home"
  },
  {
    id: 16,
    name: "Bamboo Cutting Board Set",
    description: "Eco-friendly bamboo cutting board set with juice groove. Durable, antibacterial, and perfect for any kitchen.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home"
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};


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

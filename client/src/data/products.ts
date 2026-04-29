export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  pricePerMonth: number;
  pricePerYear: number;
  description: string;
  features: string[];
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  available: boolean;
  rating: number;
  reviews: number;
  location: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  itemCount: number;
  color: string;
}

export const categories: Category[] = [
  { id: "1", name: "Cars", slug: "cars", icon: "🚗", description: "Rent premium cars for your travels", itemCount: 45, color: "bg-primary/10" },
  { id: "2", name: "Bikes", slug: "bikes", icon: "🏍️", description: "Two-wheelers for city commute", itemCount: 32, color: "bg-accent/10" },
  { id: "3", name: "Homes", slug: "homes", icon: "🏠", description: "Apartments and houses for living", itemCount: 128, color: "bg-success/10" },
  { id: "4", name: "AC", slug: "ac", icon: "❄️", description: "Air conditioners for every room", itemCount: 67, color: "bg-primary/10" },
  { id: "5", name: "Refrigerator", slug: "refrigerator", icon: "🧊", description: "Keep your food fresh", itemCount: 43, color: "bg-accent/10" },
  { id: "6", name: "Cooler", slug: "cooler", icon: "🌀", description: "Affordable cooling solutions", itemCount: 28, color: "bg-success/10" },
  { id: "7", name: "Fans", slug: "fans", icon: "💨", description: "Ceiling and table fans", itemCount: 56, color: "bg-primary/10" },
  { id: "8", name: "Electronics", slug: "electronics", icon: "📱", description: "Gadgets and devices", itemCount: 89, color: "bg-accent/10" },
  { id: "9", name: "Furniture", slug: "furniture", icon: "🛋️", description: "Complete home furnishing", itemCount: 156, color: "bg-success/10" },
  { id: "10", name: "Tools", slug: "tools", icon: "🔧", description: "Equipment for every job", itemCount: 34, color: "bg-primary/10" },
  { id: "11", name: "Others", slug: "others", icon: "📦", description: "Miscellaneous items", itemCount: 78, color: "bg-accent/10" },
];

export const products: Product[] = [
  // Cars
  {
    id: "car-1",
    name: "Toyota Camry 2023",
    category: "Cars",
    categorySlug: "cars",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
    pricePerMonth: 25000,
    pricePerYear: 250000,
    description: "Experience luxury and comfort with the Toyota Camry 2023. Perfect for business trips and family outings with premium leather seats, advanced safety features, and excellent fuel efficiency.",
    features: ["Automatic Transmission", "GPS Navigation", "Bluetooth Connectivity", "Leather Seats", "Backup Camera"],
    ownerName: "Raj Motors",
    ownerPhone: "+91 9876543210",
    ownerEmail: "raj@rajmotors.com",
    available: true,
    rating: 4.8,
    reviews: 124,
    location: "Mumbai"
  },
  {
    id: "car-2",
    name: "Honda City ZX",
    category: "Cars",
    categorySlug: "cars",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800",
    pricePerMonth: 18000,
    pricePerYear: 180000,
    description: "The Honda City ZX offers the perfect blend of style and performance. Ideal for daily commute with excellent mileage and modern features.",
    features: ["Sunroof", "Touchscreen Display", "Alloy Wheels", "Push Button Start", "Climate Control"],
    ownerName: "City Rentals",
    ownerPhone: "+91 9876543211",
    ownerEmail: "info@cityrentals.com",
    available: true,
    rating: 4.6,
    reviews: 89,
    location: "Delhi"
  },
  {
    id: "car-3",
    name: "Hyundai Creta SUV",
    category: "Cars",
    categorySlug: "cars",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
    pricePerMonth: 22000,
    pricePerYear: 220000,
    description: "Adventure awaits with the Hyundai Creta SUV. Perfect for road trips and off-road adventures with robust build and powerful engine.",
    features: ["4WD", "Panoramic Sunroof", "Ventilated Seats", "ADAS", "Wireless Charging"],
    ownerName: "Adventure Wheels",
    ownerPhone: "+91 9876543212",
    ownerEmail: "book@adventurewheels.com",
    available: true,
    rating: 4.7,
    reviews: 156,
    location: "Bangalore"
  },
  // Bikes
  {
    id: "bike-1",
    name: "Royal Enfield Classic 350",
    category: "Bikes",
    categorySlug: "bikes",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
    pricePerMonth: 6000,
    pricePerYear: 60000,
    description: "The iconic Royal Enfield Classic 350 for those who love the thump. Perfect for highway cruising and city rides alike.",
    features: ["ABS", "Tubeless Tyres", "Digital-Analog Console", "Fuel Injection", "USB Charger"],
    ownerName: "Bullet Rentals",
    ownerPhone: "+91 9876543213",
    ownerEmail: "hello@bulletrentals.com",
    available: true,
    rating: 4.9,
    reviews: 234,
    location: "Chennai"
  },
  {
    id: "bike-2",
    name: "Honda Activa 6G",
    category: "Bikes",
    categorySlug: "bikes",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
    pricePerMonth: 3500,
    pricePerYear: 35000,
    description: "India's favorite scooter for daily commute. Fuel-efficient and easy to ride with ample storage space.",
    features: ["LED Headlight", "Start-Stop System", "External Fuel Lid", "Mobile Charging", "Side Stand Indicator"],
    ownerName: "Quick Rides",
    ownerPhone: "+91 9876543214",
    ownerEmail: "rent@quickrides.com",
    available: true,
    rating: 4.5,
    reviews: 312,
    location: "Pune"
  },
  // Homes
  {
    id: "home-1",
    name: "3BHK Premium Apartment",
    category: "Homes",
    categorySlug: "homes",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    pricePerMonth: 45000,
    pricePerYear: 480000,
    description: "Luxurious 3BHK apartment in prime location with modern amenities, spacious rooms, and beautiful city views. Fully furnished and ready to move in.",
    features: ["Fully Furnished", "Modular Kitchen", "24/7 Security", "Gym Access", "Swimming Pool", "Parking"],
    ownerName: "Premium Homes",
    ownerPhone: "+91 9876543215",
    ownerEmail: "lease@premiumhomes.com",
    available: true,
    rating: 4.8,
    reviews: 67,
    location: "Mumbai"
  },
  {
    id: "home-2",
    name: "Studio Apartment Downtown",
    category: "Homes",
    categorySlug: "homes",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    pricePerMonth: 20000,
    pricePerYear: 200000,
    description: "Cozy studio apartment perfect for singles or couples. Located in the heart of the city with easy access to metro and markets.",
    features: ["Furnished", "Wi-Fi Ready", "AC Installed", "Power Backup", "CCTV Security"],
    ownerName: "Urban Nest",
    ownerPhone: "+91 9876543216",
    ownerEmail: "stay@urbannest.com",
    available: true,
    rating: 4.4,
    reviews: 89,
    location: "Delhi"
  },
  // AC
  {
    id: "ac-1",
    name: "Voltas 1.5 Ton Split AC",
    category: "AC",
    categorySlug: "ac",
    image: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800",
    pricePerMonth: 1500,
    pricePerYear: 15000,
    description: "Energy-efficient 1.5 Ton Split AC perfect for medium-sized rooms. 5-star rated with fast cooling technology.",
    features: ["5 Star Rating", "Inverter Technology", "Anti-Dust Filter", "Sleep Mode", "Timer Function"],
    ownerName: "Cool Solutions",
    ownerPhone: "+91 9876543217",
    ownerEmail: "rent@coolsolutions.com",
    available: true,
    rating: 4.6,
    reviews: 145,
    location: "Hyderabad"
  },
  {
    id: "ac-2",
    name: "LG 2 Ton Window AC",
    category: "AC",
    categorySlug: "ac",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800",
    pricePerMonth: 1200,
    pricePerYear: 12000,
    description: "Powerful 2 Ton Window AC for larger rooms. Easy installation and low maintenance with excellent cooling capacity.",
    features: ["3 Star Rating", "Auto Clean", "Copper Condenser", "Turbo Mode", "Stabilizer Free"],
    ownerName: "Chill Rentals",
    ownerPhone: "+91 9876543218",
    ownerEmail: "hello@chillrentals.com",
    available: true,
    rating: 4.3,
    reviews: 98,
    location: "Kolkata"
  },
  // Refrigerator
  {
    id: "fridge-1",
    name: "Samsung 253L Double Door",
    category: "Refrigerator",
    categorySlug: "refrigerator",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800",
    pricePerMonth: 1000,
    pricePerYear: 10000,
    description: "Spacious 253L double door refrigerator with digital inverter technology. Perfect for small families with frost-free operation.",
    features: ["Frost Free", "Digital Inverter", "Convertible Modes", "Deodorizer", "Toughened Glass Shelves"],
    ownerName: "Appliance Hub",
    ownerPhone: "+91 9876543219",
    ownerEmail: "rent@appliancehub.com",
    available: true,
    rating: 4.7,
    reviews: 178,
    location: "Mumbai"
  },
  // Furniture
  {
    id: "furniture-1",
    name: "L-Shaped Sofa Set",
    category: "Furniture",
    categorySlug: "furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    pricePerMonth: 2500,
    pricePerYear: 25000,
    description: "Elegant L-shaped sofa set with premium fabric upholstery. Perfect for modern living rooms with comfortable seating for 6.",
    features: ["Premium Fabric", "High-Density Foam", "Sturdy Frame", "Easy to Clean", "6 Seater"],
    ownerName: "Comfort Living",
    ownerPhone: "+91 9876543220",
    ownerEmail: "hello@comfortliving.com",
    available: true,
    rating: 4.5,
    reviews: 89,
    location: "Bangalore"
  },
  {
    id: "furniture-2",
    name: "Queen Size Bed with Storage",
    category: "Furniture",
    categorySlug: "furniture",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800",
    pricePerMonth: 1800,
    pricePerYear: 18000,
    description: "Spacious queen size bed with under-bed storage. Includes mattress and comes with a modern headboard design.",
    features: ["With Mattress", "Under-bed Storage", "Engineered Wood", "Modern Design", "Easy Assembly"],
    ownerName: "Sleep Well Rentals",
    ownerPhone: "+91 9876543221",
    ownerEmail: "rent@sleepwell.com",
    available: true,
    rating: 4.6,
    reviews: 134,
    location: "Delhi"
  },
  // Electronics
  {
    id: "electronics-1",
    name: "MacBook Pro 14 inch",
    category: "Electronics",
    categorySlug: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    pricePerMonth: 8000,
    pricePerYear: 80000,
    description: "Latest MacBook Pro with M2 chip for professionals. Perfect for video editing, coding, and creative work.",
    features: ["M2 Pro Chip", "16GB RAM", "512GB SSD", "Retina Display", "MagSafe Charging"],
    ownerName: "Tech Rentals",
    ownerPhone: "+91 9876543222",
    ownerEmail: "rent@techrentals.com",
    available: true,
    rating: 4.9,
    reviews: 67,
    location: "Bangalore"
  },
  {
    id: "electronics-2",
    name: "Sony 55 inch 4K Smart TV",
    category: "Electronics",
    categorySlug: "electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
    pricePerMonth: 2500,
    pricePerYear: 25000,
    description: "Stunning 55 inch 4K Smart TV with Dolby Vision and Atmos. Transform your living room into a home theater.",
    features: ["4K HDR", "Dolby Vision", "Google TV", "Voice Control", "HDMI 2.1"],
    ownerName: "Screen Time",
    ownerPhone: "+91 9876543223",
    ownerEmail: "hello@screentime.com",
    available: true,
    rating: 4.7,
    reviews: 156,
    location: "Chennai"
  },
  // Cooler
  {
    id: "cooler-1",
    name: "Symphony Tower Cooler",
    category: "Cooler",
    categorySlug: "cooler",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800",
    pricePerMonth: 800,
    pricePerYear: 8000,
    description: "Powerful tower cooler with honeycomb pads for efficient cooling. Perfect for hot summers with 50L tank capacity.",
    features: ["50L Tank", "Honeycomb Pads", "Ice Chamber", "Remote Control", "4 Way Air Flow"],
    ownerName: "Cool Comfort",
    ownerPhone: "+91 9876543224",
    ownerEmail: "rent@coolcomfort.com",
    available: true,
    rating: 4.4,
    reviews: 89,
    location: "Jaipur"
  },
  // Fans
  {
    id: "fan-1",
    name: "Havells 1200mm Ceiling Fan",
    category: "Fans",
    categorySlug: "fans",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800",
    pricePerMonth: 300,
    pricePerYear: 3000,
    description: "High-speed ceiling fan with decorative finish. Energy-efficient motor with powerful air delivery.",
    features: ["1200mm Sweep", "High Speed", "Energy Efficient", "Double Ball Bearing", "2 Year Warranty"],
    ownerName: "Fan World",
    ownerPhone: "+91 9876543225",
    ownerEmail: "rent@fanworld.com",
    available: true,
    rating: 4.3,
    reviews: 234,
    location: "Ahmedabad"
  },
  // Tools
  {
    id: "tool-1",
    name: "Bosch Power Drill Kit",
    category: "Tools",
    categorySlug: "tools",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800",
    pricePerMonth: 500,
    pricePerYear: 5000,
    description: "Professional power drill kit with multiple bits and accessories. Perfect for home improvement and DIY projects.",
    features: ["Cordless", "20V Battery", "Variable Speed", "LED Light", "Carrying Case"],
    ownerName: "Tool Box",
    ownerPhone: "+91 9876543226",
    ownerEmail: "rent@toolbox.com",
    available: true,
    rating: 4.6,
    reviews: 67,
    location: "Pune"
  },
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(p => p.categorySlug === categorySlug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const getPopularProducts = (): Product[] => {
  return products.slice(0, 6);
};

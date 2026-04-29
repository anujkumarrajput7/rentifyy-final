import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight, Sparkles, Shield, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories, getPopularProducts } from '@/data/products';
import CategoryCard from '@/components/cards/CategoryCard';
import ProductCard from '@/components/cards/ProductCard';
import LocationModal from '@/components/modals/LocationModal';
import { useLocation } from '@/contexts/LocationContext';
import { useAuth } from '@/contexts/AuthContext';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const { isLocationSet, city } = useLocation();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const popularProducts = getPopularProducts();

  const features = [
    {
      icon: Shield,
      title: 'Verified Owners',
      description: 'All product owners are verified for your safety and trust.',
    },
    {
      icon: Clock,
      title: 'Flexible Duration',
      description: 'Rent for months or years - choose what works best for you.',
    },
    {
      icon: Sparkles,
      title: 'Quality Assured',
      description: 'Every item is inspected to ensure top-notch quality.',
    },
  ];

  const handleGetStarted = () => {
    if (!isLocationSet) {
      setIsLocationModalOpen(true);
    } else if (!isAuthenticated) {
      navigate('/auth');
    } else {
      navigate('/categories');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Rental items"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Rent anything, anytime</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Rent What You Need,{' '}
              <span className="text-primary">When You Need It</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              From cars to furniture, electronics to appliances - rent anything for months or years. 
              The smart way to access what you need.
            </p>

            {/* Location Status */}
            {isLocationSet ? (
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                <span>Delivering to {city}</span>
                <button
                  onClick={() => setIsLocationModalOpen(true)}
                  className="underline hover:no-underline ml-1"
                >
                  Change
                </button>
              </div>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="text-lg px-8 h-14 shadow-lg hover:shadow-xl transition-shadow"
              >
                {isLocationSet ? (
                  <>
                    Explore Rentals <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                ) : (
                  <>
                    <MapPin className="w-5 h-5 mr-2" />
                    Set Your City First
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/how-it-works')}
                className="text-lg px-8 h-14"
              >
                How It Works
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute right-10 top-1/3 hidden xl:block animate-float">
          <div className="bg-card shadow-elevated rounded-2xl p-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                🚗
              </div>
              <div>
                <p className="font-medium text-foreground">45+ Cars</p>
                <p className="text-sm text-muted-foreground">Available now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Browse Categories
              </h2>
              <p className="text-muted-foreground">Find exactly what you need from our wide range</p>
            </div>
            <Button variant="ghost" onClick={() => navigate('/categories')} className="mt-4 md:mt-0">
              View All Categories <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.slice(0, 8).map((category, index) => (
              <div key={category.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Popular Rentals
              </h2>
              <p className="text-muted-foreground">Most rented items by our customers</p>
            </div>
            <Button variant="ghost" onClick={() => navigate('/categories')} className="mt-4 md:mt-0">
              Browse All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden gradient-primary p-8 md:p-12 lg:p-16">
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Renting?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Join thousands of satisfied customers who rent smarter with Rentify. 
                Set your location and start exploring today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={handleGetStarted}
                  className="text-lg px-8"
                >
                  Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() => navigate('/contact')}
                  className="text-lg px-8 text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-foreground/10 rounded-full" />
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-foreground/5 rounded-full" />
          </div>
        </div>
      </section>

      <LocationModal open={isLocationModalOpen} onOpenChange={setIsLocationModalOpen} />
    </div>
  );
};

export default Index;

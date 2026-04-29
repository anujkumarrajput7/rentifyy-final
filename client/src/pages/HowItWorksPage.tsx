import { MapPin, Grid, ShoppingBag, Calendar, Shield, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HowItWorksPage = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: MapPin,
      number: '01',
      title: 'Set Your Location',
      description: 'Enter your city and complete address. We verify it to ensure smooth delivery of your rented items.',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Grid,
      number: '02',
      title: 'Choose a Category',
      description: 'Browse through our wide range of categories - cars, bikes, homes, appliances, electronics, and more.',
      color: 'bg-accent/10 text-accent-foreground',
    },
    {
      icon: ShoppingBag,
      number: '03',
      title: 'Select an Item',
      description: 'View detailed product information, photos, pricing, and reviews. Find the perfect item for your needs.',
      color: 'bg-success/10 text-success',
    },
    {
      icon: Calendar,
      number: '04',
      title: 'Choose Rental Duration',
      description: 'Select your preferred rental period - monthly or yearly. Longer durations often come with better rates.',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Shield,
      number: '05',
      title: 'ID & Address Verification',
      description: 'Complete a quick verification process with your ID proof. This ensures safety for both renters and owners.',
      color: 'bg-warning/10 text-warning',
    },
    {
      icon: CreditCard,
      number: '06',
      title: 'Rent & Pay',
      description: 'Make a secure payment and get your item delivered. Enjoy your rental with our full support throughout.',
      color: 'bg-success/10 text-success',
    },
  ];

  const benefits = [
    {
      title: 'No Long-term Commitment',
      description: 'Rent for as long as you need without the burden of ownership.',
    },
    {
      title: 'Cost-Effective',
      description: 'Save money by renting instead of buying expensive items.',
    },
    {
      title: 'Quality Guaranteed',
      description: 'All items are inspected and maintained for optimal performance.',
    },
    {
      title: 'Easy Returns',
      description: 'Return your rental hassle-free when you no longer need it.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How Rentify Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Renting has never been easier. Follow these simple steps to get what you need, when you need it.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
              >
                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[39px] top-20 w-0.5 h-[calc(100%-5rem)] bg-gradient-to-b from-primary/30 to-transparent" />
                )}
                
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-soft`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <span className="text-sm font-semibold text-primary mb-1 block">
                    Step {step.number}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Rent with Rentify?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of renting over buying
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border hover-lift"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join thousands of satisfied customers who rent smarter with Rentify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/categories')} className="text-lg px-8">
              Browse Categories
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/auth?mode=signup')} className="text-lg px-8">
              Create Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;

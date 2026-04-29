import { Users, Target, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '10K+', label: 'Items Listed' },
    { value: '100+', label: 'Cities Covered' },
    { value: '4.8', label: 'Average Rating' },
  ];

  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in building a trusted community of renters and owners who share resources responsibly.',
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Making quality products accessible to everyone, regardless of their financial situation.',
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Promoting a sharing economy that reduces waste and environmental impact.',
    },
    {
      icon: Sparkles,
      title: 'Quality Assurance',
      description: 'Every item on our platform is verified for quality and functionality.',
    },
  ];

  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200' },
    { name: 'Priya Sharma', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
    { name: 'Amit Patel', role: 'CTO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
    { name: 'Sneha Reddy', role: 'Head of Customer Success', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Rentify
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make renting as easy as shopping online. 
            Access what you need, when you need it, without the burden of ownership.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Rentify was born from a simple observation: people buy things they only use occasionally, 
                  leading to cluttered homes and wasted resources. We envisioned a world where access 
                  trumps ownership.
                </p>
                <p>
                  Founded in 2020, we started with a small team passionate about the sharing economy. 
                  Today, we've grown to serve thousands of customers across India, making everything 
                  from cars to furniture available for rent.
                </p>
                <p>
                  Our platform connects people who have items to share with those who need them, 
                  creating value for both parties while reducing environmental impact.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
                  alt="Rentify team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-primary rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Rentify
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Rentify
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden mb-4 shadow-soft">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join the Rentify Community
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Start renting today and experience the freedom of access over ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => navigate('/categories')}>
              Start Browsing
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/contact')}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

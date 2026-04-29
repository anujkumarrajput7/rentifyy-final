import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, Star, MapPin, Phone, Mail, User, 
  Check, Share2, Heart, Calendar, Shield, Truck,
  Facebook, Twitter, Linkedin, Copy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { getProductById, getCategoryBySlug } from '@/data/products';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from '@/contexts/LocationContext';
import { useState } from 'react';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  const { isLocationSet } = useLocation();
  const [rentalDuration, setRentalDuration] = useState<'month' | 'year'>('month');
  const [isShareOpen, setIsShareOpen] = useState(false);

  const product = id ? getProductById(id) : undefined;
  const category = product ? getCategoryBySlug(product.categorySlug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Product Not Found</h1>
          <p className="text-muted-foreground mb-4">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/categories">Browse Categories</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleRentNow = () => {
    if (!isLocationSet) {
      toast({
        title: 'Set Your Location',
        description: 'Please set your delivery location first.',
        variant: 'destructive',
      });
      navigate('/location');
      return;
    }

    if (!isAuthenticated) {
      toast({
        title: 'Login Required',
        description: 'Please login to rent this item.',
        variant: 'destructive',
      });
      navigate('/auth');
      return;
    }

    toast({
      title: 'Rental Request Sent!',
      description: 'The owner will contact you shortly to confirm.',
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = `Check out ${product.name} on Rentify!`;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast({ title: 'Link Copied!', description: 'Product link copied to clipboard.' });
        setIsShareOpen(false);
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
    setIsShareOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link to="/categories" className="hover:text-foreground transition-colors">Categories</Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link to={`/category/${product.categorySlug}`} className="hover:text-foreground transition-colors">
              {category?.name}
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="text-foreground truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.available ? (
                  <Badge className="absolute top-4 left-4 bg-success text-success-foreground">
                    Available
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="absolute top-4 left-4">
                    Unavailable
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{product.location}</span>
                </div>
                <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant={rentalDuration === 'month' ? 'default' : 'outline'}
                    onClick={() => setRentalDuration('month')}
                    className="flex-1"
                  >
                    Monthly
                  </Button>
                  <Button
                    variant={rentalDuration === 'year' ? 'default' : 'outline'}
                    onClick={() => setRentalDuration('year')}
                    className="flex-1"
                  >
                    Yearly
                  </Button>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Rental Price</p>
                    <p className="text-3xl font-bold text-primary">
                      {formatPrice(rentalDuration === 'month' ? product.pricePerMonth : product.pricePerYear)}
                      <span className="text-lg font-normal text-muted-foreground">
                        /{rentalDuration === 'month' ? 'month' : 'year'}
                      </span>
                    </p>
                  </div>
                  {rentalDuration === 'year' && (
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      Save {formatPrice((product.pricePerMonth * 12) - product.pricePerYear)}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="flex-1" onClick={handleRentNow}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Rent Now
                </Button>
                <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline">
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Share this product</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-4 gap-4 py-4">
                      <Button
                        variant="outline"
                        className="flex flex-col gap-2 h-auto py-4"
                        onClick={() => handleShare('facebook')}
                      >
                        <Facebook className="w-6 h-6" />
                        <span className="text-xs">Facebook</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex flex-col gap-2 h-auto py-4"
                        onClick={() => handleShare('twitter')}
                      >
                        <Twitter className="w-6 h-6" />
                        <span className="text-xs">Twitter</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex flex-col gap-2 h-auto py-4"
                        onClick={() => handleShare('linkedin')}
                      >
                        <Linkedin className="w-6 h-6" />
                        <span className="text-xs">LinkedIn</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex flex-col gap-2 h-auto py-4"
                        onClick={() => handleShare('copy')}
                      >
                        <Copy className="w-6 h-6" />
                        <span className="text-xs">Copy Link</span>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="sm:w-auto">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-success" />
                  <span>Verified Owner</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4 text-primary" />
                  <span>Free Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="owner">Owner Info</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="font-display font-semibold text-lg mb-4">About This Product</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="owner" className="mt-6">
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="font-display font-semibold text-lg mb-4">Owner Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{product.ownerName}</p>
                        <p className="text-sm text-muted-foreground">Verified Owner</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-muted-foreground" />
                      <a href={`tel:${product.ownerPhone}`} className="text-foreground hover:text-primary transition-colors">
                        {product.ownerPhone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <a href={`mailto:${product.ownerEmail}`} className="text-foreground hover:text-primary transition-colors">
                        {product.ownerEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-foreground">{product.rating}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-muted'}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{product.reviews} reviews</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-center py-8">
                    Reviews will appear here once connected to the backend.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;

import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border hover:border-primary/30 transition-all"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.available ? (
          <Badge className="absolute top-3 left-3 bg-success text-success-foreground">
            Available
          </Badge>
        ) : (
          <Badge variant="secondary" className="absolute top-3 left-3">
            Unavailable
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
          <MapPin className="w-3 h-3" />
          <span>{product.location}</span>
        </div>
        
        <h3 className="font-display font-semibold text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-xl font-bold text-primary">
              {formatPrice(product.pricePerMonth)}
              <span className="text-sm font-normal text-muted-foreground">/month</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">or</p>
            <p className="text-sm font-medium text-foreground">
              {formatPrice(product.pricePerYear)}/year
            </p>
          </div>
        </div>

        <Button className="w-full" size="sm">
          Rent Now
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;

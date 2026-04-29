import { useParams, Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getProductsByCategory, getCategoryBySlug } from '@/data/products';
import ProductCard from '@/components/cards/ProductCard';
import { useState } from 'react';

const CategoryListingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const category = slug ? getCategoryBySlug(slug) : undefined;
  const products = slug ? getProductsByCategory(slug) : [];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Category Not Found</h1>
          <p className="text-muted-foreground mb-4">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/categories">Browse Categories</Link>
          </Button>
        </div>
      </div>
    );
  }

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricePerMonth - b.pricePerMonth;
      case 'price-high':
        return b.pricePerMonth - a.pricePerMonth;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/categories" className="hover:text-foreground transition-colors">Categories</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{category.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center text-3xl`}>
                {category.icon}
              </div>
              <div>
                <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {category.name}
                </h1>
                <p className="text-muted-foreground">
                  {products.length} items available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                {products.length} Results
              </Badge>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'flex flex-col gap-4'
            }>
              {sortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 text-4xl">
                {category.icon}
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">No Items Available</h2>
              <p className="text-muted-foreground mb-6">
                We're working on adding more items to this category. Check back soon!
              </p>
              <Button asChild>
                <Link to="/categories">Browse Other Categories</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryListingPage;

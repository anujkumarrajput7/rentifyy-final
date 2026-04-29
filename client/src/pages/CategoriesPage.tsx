import { categories } from '@/data/products';
import CategoryCard from '@/components/cards/CategoryCard';

const CategoriesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 gradient-hero">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            All Categories
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse through our extensive collection of rental categories. From vehicles to home appliances, 
            we have everything you need.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;

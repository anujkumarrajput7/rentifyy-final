import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group block bg-card rounded-2xl p-6 shadow-soft hover-lift border border-border hover:border-primary/30 transition-all"
    >
      <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
        {category.icon}
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-1">
        {category.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
        {category.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          {category.itemCount} items
        </span>
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

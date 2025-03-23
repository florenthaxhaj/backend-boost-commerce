
import React from 'react';
import { Button } from '@/components/ui/button';

interface CategoryCardProps {
  category: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  count,
  isActive,
  onClick
}) => {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      className={`w-full justify-between mb-2 ${
        isActive ? 'bg-primary text-white' : 'hover:bg-primary/10'
      }`}
      onClick={onClick}
    >
      <span>{category}</span>
      <span className={`${isActive ? 'bg-white/20' : 'bg-secondary'} text-xs px-2 py-1 rounded-full`}>
        {count}
      </span>
    </Button>
  );
};

export default CategoryCard;

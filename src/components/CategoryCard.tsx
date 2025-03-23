
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  count,
  isActive,
  onClick,
  className
}) => {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      className={cn(
        "w-full justify-between mb-2",
        isActive ? 'bg-primary text-white' : 'hover:bg-primary/10',
        className
      )}
      onClick={onClick}
    >
      <span>{category}</span>
      <span className={cn(
        "text-xs px-2 py-1 rounded-full",
        isActive ? 'bg-white/20' : 'bg-secondary'
      )}>
        {count}
      </span>
    </Button>
  );
};

export default CategoryCard;

"use client";

import { Diamond } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Operator, ProductCategory } from "@/lib/types";

interface ProductFiltersProps {
  operators: Operator[];
  categories: ProductCategory[];
  selectedOperator: Operator | 'All';
  onSelectOperator: (operator: Operator | 'All') => void;
  selectedCategory: ProductCategory | 'All';
  onSelectCategory: (category: ProductCategory | 'All') => void;
}

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, isSelected, onClick }: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out",
      "ring-1 ring-inset ring-border",
      isSelected 
        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
        : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground hover:ring-primary/50"
    )}
  >
    {!isSelected && <Diamond className="w-3 h-3 text-muted-foreground/50" />}
    {label}
    {!isSelected && <Diamond className="w-3 h-3 text-muted-foreground/50" />}
  </button>
);

export default function ProductFilters({
  operators,
  categories,
  selectedOperator,
  onSelectOperator,
  selectedCategory,
  onSelectCategory,
}: ProductFiltersProps) {
  return (
    <div id="products" className="flex flex-col gap-8 mb-10 scroll-mt-20">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <FilterButton 
          label="All" 
          isSelected={selectedOperator === 'All'} 
          onClick={() => onSelectOperator('All')}
        />
        {operators.map(op => (
          <FilterButton 
            key={op} 
            label={op}
            isSelected={selectedOperator === op}
            onClick={() => onSelectOperator(op)}
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <FilterButton 
            label="All" 
            isSelected={selectedCategory === 'All'} 
            onClick={() => onSelectCategory('All')}
          />
        {categories.map(cat => (
          <FilterButton 
            key={cat} 
            label={cat}
            isSelected={selectedCategory === cat}
            onClick={() => onSelectCategory(cat)}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Operator, ProductCategory } from "@/lib/types";

interface ProductFiltersProps {
  operators: Operator[];
  categories: ProductCategory[];
  selectedOperator: Operator | 'All';
  onSelectOperator: (operator: Operator | 'All') => void;
  selectedCategory: ProductCategory | 'All';
  onSelectCategory: (category: ProductCategory | 'All') => void;
}

export default function ProductFilters({
  operators,
  categories,
  selectedOperator,
  onSelectOperator,
  selectedCategory,
  onSelectCategory,
}: ProductFiltersProps) {
  return (
    <div id="products" className="flex flex-col gap-6 mb-10 scroll-mt-20">
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-lg font-semibold text-muted-foreground">Filter by Operator</h3>
        <Tabs value={selectedOperator} onValueChange={(value) => onSelectOperator(value as Operator | 'All')}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            <TabsTrigger value="All">All</TabsTrigger>
            {operators.map(op => (
              <TabsTrigger key={op} value={op}>{op}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-lg font-semibold text-muted-foreground">Filter by Category</h3>
        <Tabs value={selectedCategory} onValueChange={(value) => onSelectCategory(value as ProductCategory | 'All')}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="All">All</TabsTrigger>
            {categories.map(cat => (
              <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from 'react';
import Hero from '@/components/hero';
import ProductFilters from '@/components/product-filters';
import ProductGrid from '@/components/product-grid';
import { products as allProducts, OPERATORS, PRODUCT_CATEGORIES } from '@/lib/products';
import type { Operator, ProductCategory } from '@/lib/types';

export default function Home() {
  const [selectedOperator, setSelectedOperator] = useState<Operator | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const operatorMatch = selectedOperator === 'All' || product.operator === selectedOperator;
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      return operatorMatch && categoryMatch;
    });
  }, [selectedOperator, selectedCategory]);

  return (
    <>
      {/* <Hero /> */}
      <div className="container px-4 md:px-6 py-8 md:py-12 lg:py-16">
        <ProductFilters
          operators={OPERATORS}
          categories={PRODUCT_CATEGORIES}
          selectedOperator={selectedOperator}
          onSelectOperator={setSelectedOperator}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </>
  );
}

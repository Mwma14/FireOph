import type { Product } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OperatorLogo from "./operator-logo";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}

export default function ProductCard({ product, isSelected, onSelect }: ProductCardProps) {
  return (
    <Card 
      onClick={onSelect}
      className={cn(
        "cursor-pointer relative h-full w-full flex flex-col justify-between bg-card hover:border-primary/20 transition-all duration-300 shadow-lg border border-border/50 rounded-2xl overflow-hidden",
        isSelected && "border-primary/20 bg-card/50 shadow-primary/20"
      )}
    >
      <div 
        className={cn(
          "absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/80 rounded-tl-2xl transition-all duration-300",
          isSelected ? "opacity-100 -top-0 -left-0" : "opacity-0 -top-2 -left-2"
        )}
      />
      <div 
        className={cn(
          "absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/80 rounded-br-2xl transition-all duration-300",
          isSelected ? "opacity-100 -bottom-0 -right-0" : "opacity-0 -bottom-2 -right-2"
        )}
      />

      <CardHeader>
        <div className="flex justify-between items-start">
          <OperatorLogo operator={product.operator} />
        </div>
        <CardTitle className="pt-4 text-2xl font-bold">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      
      <div>
        <Separator className="bg-border/50 mx-6" />
        <CardFooter className="flex justify-between items-center pt-6">
          <p className="text-xl font-bold text-primary">{product.price.toLocaleString()} <span className="text-sm font-normal">MMK</span></p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl">Purchase</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

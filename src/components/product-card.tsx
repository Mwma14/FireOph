import type { Product } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OperatorLogo from "./operator-logo";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full w-full flex flex-col justify-between bg-card hover:border-primary/20 transition-colors duration-300 shadow-lg border border-border/50 rounded-2xl">
      <CardHeader>
        <div className="flex justify-between items-start">
          <OperatorLogo operator={product.operator} />
        </div>
        <CardTitle className="pt-4 text-2xl font-bold">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      
      <CardFooter className="flex justify-between items-center">
        <p className="text-xl font-bold text-primary">{product.price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">MMK</span></p>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-xl">Purchase</Button>
      </CardFooter>
    </Card>
  );
}

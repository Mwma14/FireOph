import type { Product } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OperatorLogo from "./operator-logo";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="relative h-full w-full flex flex-col justify-between bg-card hover:border-primary/20 transition-colors duration-300 shadow-lg border border-border/50 rounded-2xl overflow-hidden">
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/80 rounded-tl-2xl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/80 rounded-br-2xl"></div>

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

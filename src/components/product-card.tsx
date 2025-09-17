import type { Product } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OperatorLogo from "./operator-logo";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Card className="h-full w-full flex flex-col justify-between bg-card hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <OperatorLogo operator={product.operator} />
                <div className="text-sm font-semibold text-primary">{product.category}</div>
              </div>
              <CardTitle className="pt-4 text-xl">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold font-headline text-primary">{product.price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">MMK</span></p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full text-muted-foreground">View Details</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Card className="h-full w-full flex flex-col justify-between bg-card border-primary/50">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription className="pt-2">{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
               <p className="text-3xl font-bold font-headline text-primary">{product.price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">MMK</span></p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

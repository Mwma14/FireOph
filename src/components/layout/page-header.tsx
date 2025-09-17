import { Signal, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PageHeader() {
  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60")}>
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Signal className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block font-headline">
              Operators Hub
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
                <Button asChild>
                    <Link href="#products">
                        Buy Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </nav>
        </div>
      </div>
    </header>
  );
}

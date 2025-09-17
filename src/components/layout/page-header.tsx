import { Menu, Search } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function PageHeader() {
  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60")}>
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold font-headline text-lg">
              OPERATORS HUB
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-8 max-md:hidden">
            <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-10" />
            </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search />
              <span className="sr-only">Search</span>
            </Button>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Join Now</Button>
            </div>
            <div className="md:hidden">
              <Button>Join Now</Button>
            </div>
        </div>
      </div>
    </header>
  );
}

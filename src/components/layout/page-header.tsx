import { Signal } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function PageHeader() {
  return (
    <header className={cn("sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60")}>
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center">
        <div className="flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block font-headline text-lg">
              OPERATORS HUB
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

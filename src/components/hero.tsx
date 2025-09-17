import { Button } from "@/components/ui/button";
import SimWaveAnimation from "@/components/sim-wave-animation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-zinc-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      
      {/* Neon Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[200px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[200px] animate-pulse-slow animation-delay-3000"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-lg h-64 lg:h-80">
          <SimWaveAnimation />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
            Discover Operator Products
          </h1>
          <div className="mt-6 max-w-[700px] bg-black/20 backdrop-blur-sm rounded-xl p-6">
            <p className="max-w-[600px] text-foreground/80 md:text-xl break-words mx-auto">
              All your favorite telecom products from MPT, Ooredoo, Atom, and MyTel in one place. Instantly top-up data, minutes, and more.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="#products">
                    Buy Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

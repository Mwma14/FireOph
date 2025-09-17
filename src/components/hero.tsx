import { Button } from "@/components/ui/button";
import SimWaveAnimation from "@/components/sim-wave-animation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-zinc-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-500">
              Discover Operator Products
            </h1>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl break-words">
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
          <div className="relative flex items-center justify-center w-full h-64 lg:h-80">
            <SimWaveAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}

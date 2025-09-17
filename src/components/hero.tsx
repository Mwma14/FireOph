import { Button } from "@/components/ui/button";
import SimWaveAnimation from "@/components/sim-wave-animation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-zinc-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      
      {/* Neon Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[200px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[200px] animate-pulse-slow animation-delay-3000"></div>

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center flex-1">
        <div className="flex-grow flex items-end pb-8">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white">
                Discover Operator Products
            </h1>
        </div>

        <div className="w-full max-w-2xl mx-auto">
            <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-lg h-64 lg:h-80">
                        <SimWaveAnimation />
                    </div>
                </div>
                <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center min-h-[16rem] lg:min-h-[20rem]">
                    <p className="max-w-xl text-foreground/80 md:text-xl break-words mx-auto">
                    All your favorite telecom products from MPT, Ooredoo, Atom, and MyTel in one place. Instantly top-up data, minutes, and more.
                    </p>
                </div>
            </div>
            
            <div className="flex justify-center">
                <Button size="lg" asChild>
                    <Link href="#products">
                        Buy Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
        <div className="flex-grow"></div>
      </div>
    </section>
  );
}

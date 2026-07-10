import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import GradientBlobs from "@/components/ui/GradientBlobs";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <GradientBlobs variant="subtle" />
      <div className="container-custom relative z-10 text-center">
        <span className="mx-auto block text-7xl font-semibold tracking-tight text-glow gradient-text sm:text-8xl md:text-9xl">
          404
        </span>
        <h1 className="mx-auto mt-4 max-w-md text-xl font-semibold text-text sm:text-2xl">
          This page seems to have wandered off
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AnimatedButton href="/" size="md" showArrow={false}>
            <Home className="h-4 w-4" />
            Back to Home
          </AnimatedButton>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent-light"
          >
            <ArrowLeft className="h-4 w-4" />
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
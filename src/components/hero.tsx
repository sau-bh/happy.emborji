import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
      <div className="space-y-5">
        <h1 className="text-balance font-serif text-3xl font-semibold tracking-tight md:text-5xl">
          Crochet & Embroidery that tell your story
        </h1>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Bouquet keepsakes, keychains, hoops, and custom gifts—crafted by hand with timeless textures and thoughtful
          details.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
            <Link to="/products">Shop All</Link>
          </Button>
          <Button asChild variant="secondary" className="hover:bg-accent">
            <Link to="/about">About Us</Link>
          </Button>
        </div>
      </div>
      <div className="aspect-square overflow-hidden rounded-xl border">
        <img
          src="/crochet-and-embroidery-flatlay.jpg"
          alt="Handcrafted crochet and embroidery flatlay"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}

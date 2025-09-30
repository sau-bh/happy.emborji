import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const categories = [
  { slug: "bouquet", name: "Bouquet", imageUrl: "/crochet-bouquet.jpg" },
  { slug: "keychains", name: "Keychains", imageUrl: "/crochet-keychains.jpg" },
  { slug: "hoop-art", name: "Hoop Art", imageUrl: "/embroidery-hoop-art.jpg" },
  { slug: "baby-sets", name: "Baby Sets", imageUrl: "/crochet-baby-set.jpg" },
  { slug: "bookmarks", name: "Bookmarks", imageUrl: "/crochet-bookmark.jpg" },
  { slug: "dolls", name: "Dolls", imageUrl: "/crochet-doll.jpg" },
  {
    slug: "name-frames",
    name: "Name Frames",
    imageUrl: "/embroidered-name-frame.jpg",
  },
  {
    slug: "phone-charms",
    name: "Phone Charms",
    imageUrl: "/crochet-phone-charm.jpg",
  },
  {
    slug: "hair-accessories",
    name: "Hair Accessories",
    imageUrl: "/embroidered-hair-accessory.jpg",
  },
  { slug: "coasters", name: "Coasters", imageUrl: "/crochet-coasters.jpg" },
];

export function CategoryCarousel() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-xl font-semibold">Shop by Category</h2>
        <Link
          to="/products"
          className="text-sm text-foreground/80 hover:text-foreground"
        >
          View all
        </Link>
      </div>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {categories.map((cat) => (
            <CarouselItem
              key={cat.slug}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6"
            >
              <Link
                to={{
                  pathname: "/products",
                  search: `?category=${cat.slug}`, 
                }}
                className="group flex flex-col items-center gap-3"
              >
                <div className="relative h-36 w-36 overflow-hidden rounded-full border transition group-hover:shadow">
                  <img
                    src={
                      cat.imageUrl ||
                      "/placeholder.svg?height=300&width=300&query=Category%20image"
                    }
                    alt={`${cat.name} category image`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm">{cat.name}</span>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

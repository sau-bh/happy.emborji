import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel"
import { DialogHeader, DialogFooter, DialogContent, Dialog, DialogTitle, DialogTrigger } from "./ui/dialog"
import type { Product } from "../data/products"

export function ProductCard({ product }: { product: Product }) {
  const whatsappHref = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi! I'm interested in ${product.name}. Could you share more details?`,
  )}`

  const images = product.images?.length ? product.images : [product.image]

  return (
    <Card className="overflow-hidden">
      <Dialog>
        <DialogTrigger asChild>
          <button className="aspect-square w-full">
            <img
              src={images[0] || "/placeholder.svg?height=600&width=600&query=Product%20image"}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </button>
        </DialogTrigger>

        <div className="space-y-1 p-4">
          <h3 className="line-clamp-1 text-sm font-medium">{product.name}</h3>
          <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <Button className="w-full bg-primary text-primary-foreground hover:opacity-90">Add to Wishlist</Button>

            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="w-full bg-transparent" aria-label="View details">
                View Details
              </Button>
            </DialogTrigger>
          </div>
        </div>

        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-balance">{product.name}</DialogTitle>
          </DialogHeader>

          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {images.map((src, i) => (
                <CarouselItem key={`${product.id}-${i}`} className="basis-full">
                  <div className="aspect-square w-full overflow-hidden rounded-md border">
                    <img
                      src={src || "/placeholder.svg?height=600&width=600&query=Product%20image"}
                      alt={`${product.name} - image ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
            <span className="text-sm text-muted-foreground capitalize">{product.category}</span>
          </div>

          {product.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span key={t} className="rounded-full border px-2 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          <DialogFooter className="gap-2 sm:justify-between">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 sm:w-auto"
              aria-label="Message on WhatsApp about this product"
            >
              <img src="/whatsapp-icon.jpg" alt="WhatsApp" className="mr-2 h-4 w-4" />
              Message on WhatsApp
            </a>
            <Button variant="secondary" className="w-full sm:w-auto">
              Add to Wishlist
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

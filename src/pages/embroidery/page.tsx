import { ProductGrid } from "../../components/product-grid";


export default function EmbroideryPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-8">
        <h1 className="font-serif text-2xl font-semibold">Embroidery</h1>
        <p className="text-muted-foreground">Hoops, name frames, and textured details.</p>
      </section>
      <ProductGrid initialTab="embroidery" />
    </>
  )
}

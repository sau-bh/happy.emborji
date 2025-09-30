import { ProductGrid } from "../../components/product-grid"


export default function ProductsPage(
  { searchParams }: { searchParams?: { category?: string } }
): React.ReactElement {
  const tag = searchParams?.category
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-8">
        <h1 className="font-serif text-2xl font-semibold">All Products</h1>
        <p className="text-muted-foreground">
          Filter between Crochet and Embroidery, or search.
        </p>
      </section>
      <ProductGrid initialTab="all" categoryTag={tag} />
    </>
  )
}

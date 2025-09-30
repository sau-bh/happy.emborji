import { ProductGrid } from "../../components/product-grid";


export default function CrochetPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-8">
        <h1 className="font-serif text-2xl font-semibold">Crochet</h1>
        <p className="text-muted-foreground">Handcrafted crochet pieces made to last.</p>
      </section>
      <ProductGrid initialTab="crochet" />
    </>
  )
}

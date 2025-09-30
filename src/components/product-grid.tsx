import { Link } from "lucide-react"
import { useState, useMemo } from "react"
import { ProductCard } from "./product-card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { products, type Product } from "../data/products"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

type Props = {
  initialTab?: "all" | "crochet" | "embroidery"
  limit?: number
  categoryTag?: string
  showViewAll?: boolean
}

export function ProductGrid({ initialTab = "all", limit, categoryTag, showViewAll }: Props) {
  const [tab, setTab] = useState<"all" | "crochet" | "embroidery">(initialTab)
  const [q, setQ] = useState("")

  const filtered = useMemo(() => {
    let list: Product[] = tab === "all" ? products : products.filter((p) => p.category === tab)
    if (categoryTag) list = list.filter((p) => p.tags?.includes(categoryTag))
    if (q.trim()) {
      const s = q.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(s) || p.tags?.some((t) => t.includes(s)))
    }
    if (typeof limit === "number") return list.slice(0, limit)
    return list
  }, [tab, q, limit, categoryTag])

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="font-serif text-xl font-semibold">Products</h2>
        <div className="flex w-full gap-3 md:w-auto">
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search keychain, bouquet, hoop..."
            className="w-full md:w-80"
            aria-label="Search products"
          />
        </div>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="crochet">Crochet</TabsTrigger>
          <TabsTrigger value="embroidery">Embroidery</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Grid products={filtered} />
        </TabsContent>
        <TabsContent value="crochet">
          <Grid products={filtered} />
        </TabsContent>
        <TabsContent value="embroidery">
          <Grid products={filtered} />
        </TabsContent>
      </Tabs>

      {showViewAll && (
        <div className="mt-6 text-center">
          <Button asChild variant="secondary">
            <Link href="/products">View all products</Link>
          </Button>
        </div>
      )}
    </section>
  )
}

function Grid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

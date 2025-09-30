export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-3 font-serif text-2xl font-semibold">About happy.embroji</h1>
      <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        We create crochet and embroidery pieces that feel personal and thoughtful—from bouquets to keychains and hoops.
        Everything is made by hand in small batches. Custom requests are always welcome!
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <img
          src="/studio-crochet-bouquet.jpg"
          alt="Crochet bouquet in the studio"
          className="aspect-square w-full rounded-md border object-cover"
        />
        <img
          src="/embroidery-hoop-art.jpg"
          alt="Embroidery hoop art close-up"
          className="aspect-square w-full rounded-md border object-cover"
        />
        <img
          src="/packaging-and-details.jpg"
          alt="Packaging and detail shots"
          className="hidden aspect-square w-full rounded-md border object-cover sm:block"
        />
      </div>
    </section>
  )
}

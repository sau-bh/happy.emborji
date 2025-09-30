import { ReviewsMarquee } from "../../components/reviews-marquee";


export default function ReviewsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-8">
        <h1 className="font-serif text-2xl font-semibold">Customer Reviews</h1>
        <p className="text-muted-foreground">
          WhatsApp and Instagram screenshots followed by text reviews. Hover to pause.
        </p>
      </section>
      <ReviewsMarquee />
    </>
  )
}

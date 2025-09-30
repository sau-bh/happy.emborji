type TextReview = {
  id: string
  name: string
  stars: number
  text: string
}

const screenshotItems = [
  { id: "w1", alt: "WhatsApp review 1" },
  { id: "i1", alt: "Instagram review 1" },
  { id: "w2", alt: "WhatsApp review 2" },
  { id: "i2", alt: "Instagram review 2" },
  { id: "w3", alt: "WhatsApp review 3" },
]

const textItems: TextReview[] = [
  { id: "t1", name: "Anika", stars: 5, text: "Beautiful bouquet! Quality is amazing." },
  { id: "t2", name: "Rahul", stars: 5, text: "Custom hoop turned out perfect." },
  { id: "t3", name: "Meera", stars: 4, text: "Loved the keychains—great gifts!" },
  { id: "t4", name: "Sana", stars: 5, text: "Fantastic detailing and super responsive." },
  { id: "t5", name: "Ishaan", stars: 5, text: "Exceeded expectations. Will order again." },
]

const WHATSAPP_SRC = "/whatsapp-review-screenshot.jpg"
const INSTAGRAM_SRC = "/instagram-dm-review-screenshot.jpg"

export function ReviewsMarquee() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-4 font-serif text-xl font-semibold">Reviews</h2>

      {/* Images marquee (WhatsApp/Instagram screenshots) */}
      <div className="marquee-container overflow-hidden rounded-xl border bg-card p-4">
        <div className="marquee gap-4">
          {[...screenshotItems, ...screenshotItems].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="relative h-80 w-[24rem] sm:h-96 sm:w-[30rem] shrink-0 overflow-hidden rounded-lg border"
            >
              <img
                src={String(item?.id ?? "").startsWith("w") ? WHATSAPP_SRC : INSTAGRAM_SRC}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text marquee in reverse direction */}
      <div className="marquee-container mt-6 overflow-hidden rounded-xl border bg-card p-4">
        <div className="marquee-reverse gap-4">
          {[...textItems, ...textItems].map((r, idx) => (
            <ReviewCard key={`${r.id}-${idx}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: { review: TextReview }) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col justify-between rounded-lg border p-4">
      <div className="mb-1 text-sm font-medium">{review.name}</div>
      <div className="mb-2 text-xs text-muted-foreground">
        {"★".repeat(review.stars)} <span className="text-muted-foreground/70">{"★".repeat(5 - review.stars)}</span>
      </div>
      <p className="text-sm leading-relaxed">{review.text}</p>
    </div>
  )
}

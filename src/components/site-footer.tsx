import type React from "react"
import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
        <div className="space-y-2">
          <div className="font-serif text-lg font-semibold">happy.embroji</div>
          <p className="text-sm text-muted-foreground">
            Handcrafted crochet and embroidery made with love. Custom orders welcome.
          </p>
        </div>

        <FooterCol title="Shop">
          <FooterLink href="/products">All Products</FooterLink>
          <FooterLink href="/crochet">Crochet</FooterLink>
          <FooterLink href="/embroidery">Embroidery</FooterLink>
        </FooterCol>

        <FooterCol title="Company">
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/reviews">Reviews</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterCol>

        <FooterCol title="Legal">
          <FooterLink href="/terms">Terms</FooterLink>
          <FooterLink href="/privacy">Privacy</FooterLink>
        </FooterCol>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-sm">
          <p>© {new Date().getFullYear()} happy.embroji. All rights reserved.</p>
          <p className="text-muted-foreground">Made with care.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 text-sm font-semibold">{title}</div>
      <ul className="space-y-2">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={href} className="text-sm text-foreground/80 hover:text-foreground">
        {children}
      </Link>
    </li>
  )
}

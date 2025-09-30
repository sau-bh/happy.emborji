import { Facebook, Heart, Instagram, Twitter, User } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import { Link } from "react-router-dom"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <ContactBar />
      <NavBar />
    </header>
  )
}

function ContactBar() {
  return (
    <div className="border-b bg-secondary text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <a
          href="mailto:happy.embroji@gmail.com"
          className="text-pretty hover:underline"
          aria-label="Email happy.embroji@gmail.com"
        >
          happy.embroji@gmail.com
        </a>
        <nav
          className="flex items-center gap-3 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none]"
          aria-label="Social links"
        >
          <SocialIcon href="https://instagram.com/" label="Instagram">
            <Instagram className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/" label="Twitter">
            <Twitter className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="https://facebook.com/" label="Facebook">
            <Facebook className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="https://wa.me/" label="WhatsApp">
            <img src="/whatsapp-icon.jpg" alt="WhatsApp" className="h-4 w-4" />
          </SocialIcon>
        </nav>
      </div>
    </div>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground transition hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </a>
  )
}

function NavBar() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-serif text-xl font-semibold tracking-tight">
          happy.embroji
        </Link>
      </div>

      <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
        <NavLink href="/products">All Products</NavLink>
        <NavLink href="/crochet">Crochet</NavLink>
        <NavLink href="/embroidery">Embroidery</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/reviews">Reviews</NavLink>
      </nav>

      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="icon" aria-label="Wishlist">
          <Link to="/wishlist">
            <Heart className="h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" aria-label="Login">
          <Link to="/login">
            <User className="h-5 w-5" />
          </Link>
        </Button>
        <Button asChild className="ml-2 bg-primary text-primary-foreground hover:opacity-90">
          <Link to="/products">Shop</Link>
        </Button>
      </div>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link to={href} className={cn("text-sm font-medium text-foreground/80 transition hover:text-foreground")}>
      {children}
    </Link>
  )
}

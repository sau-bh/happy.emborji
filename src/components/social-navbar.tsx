import { Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function SocialNavbar() {
  return (
    <nav className="w-full border-b bg-background text-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        {/* Left: Contact */}
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <a
            href="mailto:happy.embroji@gmail.com"
            className="hover:underline"
          >
            happy.embroji@gmail.com
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}

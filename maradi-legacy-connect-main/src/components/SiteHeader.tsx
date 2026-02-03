import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import siteLogo from "@/assets/WhatsApp Image 2026-02-01 at 12.45.21.jpeg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Education", to: "/education" },
  { label: "Yoga Center", to: "/yoga" },
  { label: "Trust", to: "/trust" },
  { label: "Contact", to: "/contact" },
] as const;

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home page, header style depends on scroll; on other pages, always use "scrolled" style
  const isHome = location.pathname === "/";
  const showScrolledStyle = !isHome || scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showScrolledStyle
          ? "bg-white/95 backdrop-blur-md border-b border-[hsl(172,18%,88%)] shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            className={cn(
              "flex items-center gap-3 group",
              showScrolledStyle ? "text-[hsl(175,35%,14%)]" : "text-white"
            )}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/95 shadow-md border border-heritage-gold/20 p-1.5 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src={siteLogo}
                alt="Maradi Subbaiah Trust"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={cn(
                "font-serif text-lg md:text-xl font-bold hidden sm:block",
                showScrolledStyle ? "text-[hsl(175,35%,14%)]" : "text-white drop-shadow-md"
              )}
            >
              Maradi Subbaiah Trust
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  showScrolledStyle
                    ? "text-[hsl(175,35%,14%)] hover:text-teal-600 hover:bg-teal-500/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden",
                  showScrolledStyle ? "text-foreground" : "text-white"
                )}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="font-serif text-[hsl(175,35%,14%)]">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-8">
                {NAV_LINKS.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className="text-left px-4 py-3 rounded-lg text-foreground hover:bg-teal-500/10 hover:text-teal-700 font-medium transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

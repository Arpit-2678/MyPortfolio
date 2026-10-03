import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  const scrollTo = (name: string) => {
    document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={"fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-2xl border px-2 transition-all duration-300 " + (scrolled ? "border-white/10 bg-background/75 shadow-2xl backdrop-blur-2xl" : "border-transparent bg-transparent")}>
      <div className="flex h-12 items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-sm font-semibold text-foreground transition-transform hover:scale-105">
          AD
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground">
              {item}
            </button>
          ))}
        </div>

        <Button variant="outline" size="sm" onClick={() => window.open("/MyPortfolio/resume.pdf", "_blank")} className="hidden rounded-full border-white/10 bg-white/[0.03] md:flex">
          <Download className="mr-2 h-4 w-4" /> Resume
        </Button>

        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="rounded-xl md:hidden" aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 px-2 pb-2 pt-2 md:hidden">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="block w-full rounded-xl px-3 py-2.5 text-left text-sm text-muted-foreground hover:bg-white/[0.05] hover:text-foreground">
              {item}
            </button>
          ))}
          <Button variant="outline" size="sm" onClick={() => window.open("/MyPortfolio/resume.pdf", "_blank")} className="mt-1 w-full rounded-xl">
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#about", label: "О нас" },
  { href: "#how-it-works", label: "Как работает" },
  { href: "#franchise-packages", label: "Пакеты" },
  { href: "#comparison-table-section", label: "Сравнение" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#calculator-section", label: "Калькулятор" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакты" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a
              href="#main"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#main");
              }}
              className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              TeleBizNet
            </a>
          </div>
          <nav className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground/60 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="tel:+79361112277"
              className="text-sm font-medium text-foreground/70 hover:text-primary flex items-center transition-colors"
            >
              <Phone className="w-5 h-5 mr-1" />
              +7 936 111-22-77
            </a>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 font-semibold"
            >
              Консультация
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground/60 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block text-foreground/60 hover:bg-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+79361112277"
              className="block text-foreground/60 hover:bg-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium mt-2 transition-colors"
            >
              +7 936 111-22-77
            </a>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="w-full mt-3 bg-primary hover:bg-primary/90"
            >
              Получить консультацию
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

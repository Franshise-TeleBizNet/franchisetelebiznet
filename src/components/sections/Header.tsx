import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#about", label: "О нас" },
  { href: "/#how-it-works", label: "Как работает" },
  { href: "/#franchise-packages", label: "Пакеты" },
  { href: "/#comparison-table-section", label: "Сравнение" },
  { href: "/#calculator-section", label: "Калькулятор" },
  { href: "/#testimonials", label: "Отзывы" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Контакты" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              TeleBizNet
            </Link>
          </div>
          <nav className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => {
              const sectionId = item.href.split("#")[1];
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors relative",
                    isActive
                      ? "text-primary font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-foreground/60 hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="tel:+79361112277"
              className="text-sm font-medium text-foreground/70 hover:text-primary flex items-center transition-colors"
            >
              <Phone className="w-5 h-5 mr-1" />
              +7 936 111-22-77
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 font-semibold">
              <Link to="/#contact">Консультация</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground/60 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const sectionId = item.href.split("#")[1];
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-primary font-semibold"
                      : "text-foreground/60 hover:bg-secondary hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center w-full text-foreground/60 hover:bg-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium mt-2 transition-colors"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-5 h-5 mr-2" />
                  Светлая тема
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 mr-2" />
                  Темная тема
                </>
              )}
            </button>
            <a
              href="tel:+79361112277"
              className="block text-foreground/60 hover:bg-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium mt-2 transition-colors"
            >
              +7 936 111-22-77
            </a>
            <Button asChild className="w-full mt-3 bg-primary hover:bg-primary/90">
              <Link to="/#contact" onClick={() => setMobileMenuOpen(false)}>
                Получить консультацию
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

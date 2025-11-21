import { Link } from "react-router-dom";

const navLinks = [
  { href: "#about", label: "О компании" },
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#franchise-packages", label: "Пакеты франшизы" },
  { href: "#testimonials", label: "Истории успеха" },
  { href: "#calculator-section", label: "Калькулятор дохода" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Связаться с нами" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              TeleBizNet
            </h3>
            <p className="text-sm mb-4">
              Ваш надежный партнер в создании пассивного дохода через
              автоматизированные медиаканалы.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Навигация
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Правовая информация
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/partner-program" className="hover:text-accent transition-colors">
                  Партнерская программа
                </Link>
              </li>
              <li>
                <Link to="/ambassador-club" className="hover:text-accent transition-colors">
                  Клуб Амбассадоров
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-accent transition-colors">
                  Пользовательское соглашение
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/public-offer" className="hover:text-accent transition-colors">
                  Публичная оферта
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <p className="text-sm mb-2">ООО "ТелеБизНет"</p>
            <p className="text-sm mb-2">
              <a
                href="tel:+79361112277"
                className="hover:text-accent font-semibold transition-colors"
              >
                +7 936 111-22-77
              </a>
            </p>
            <p className="text-sm">
              <a
                href="mailto:info@telebiznet.ru"
                className="hover:text-accent transition-colors"
              >
                info@telebiznet.ru
              </a>
            </p>
            <p className="text-sm mt-2">
              Управляющий партнер: Серж Пустовойтов
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} TeleBizNet. Все права защищены.
            Информация на сайте не является публичной офертой.
          </p>
        </div>
      </div>
    </footer>
  );
};

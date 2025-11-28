import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Clock, Shield } from "lucide-react";
import Iridescence from "@/components/Iridescence";

const features = [
  { icon: CheckCircle2, text: "Готовый бизнес" },
  { icon: TrendingUp, text: "Пассивный доход" },
  { icon: Clock, text: "Минимум времени" },
  { icon: Shield, text: "Проверенная модель" },
];

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0">
        <Iridescence
          color={[0.3, 0.3, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-sm font-semibold uppercase tracking-wider bg-white/20 text-white px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
          TeleBizNet: Телекоммуникационная Бизнес Сеть
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
          Создайте свой{" "}
          <span className="underline decoration-accent decoration-4">
            пассивный доход
          </span>
          <br className="hidden md:inline" /> и обретите финансовую свободу
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Готовая франшиза медиаканалов, которая работает на вас 24/7. Минимум
          усилий, максимум результата. Начните путь к стабильному будущему уже
          сегодня!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              <feature.icon className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-white">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button
            size="lg"
            onClick={() => scrollToSection("#franchise-packages")}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-8 text-lg hover:scale-105 transition-transform"
          >
            Смотреть пакеты
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("#contact")}
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-primary font-bold py-3.5 px-8 text-lg hover:scale-105 transition-transform"
          >
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

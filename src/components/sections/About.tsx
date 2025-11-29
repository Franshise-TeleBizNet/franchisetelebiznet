import { Briefcase, DollarSign, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import readyBusinessImg from "@/assets/about-ready-business.jpg";
import automatedIncomeImg from "@/assets/about-automated-income.jpg";
import reliabilityImg from "@/assets/about-reliability.jpg";

const features = [
  {
    icon: Briefcase,
    title: "Готовый бизнес «под ключ»",
    description:
      "Вы получаете от 5 до 400+ полностью настроенных медиаканалов в Telegram, VK, Дзен и других сетях. Вся техническая рутина на нас, первые подписчики – наш подарок вам.",
    color: "bg-primary/10 text-primary",
    image: readyBusinessImg,
  },
  {
    icon: DollarSign,
    title: "Автоматизированный доход",
    description:
      "Искусственный интеллект анализирует тренды, создает уникальный контент и публикует его 24/7. Наша команда маркетологов привлекает аудиторию, а отдел продаж – рекламодателей.",
    color: "bg-success/10 text-success",
    image: automatedIncomeImg,
  },
  {
    icon: Shield,
    title: "Надежность и прозрачность",
    description:
      "Проверенная бизнес-модель (SMaaS, КАПРИЗ), технологии Blockchain и Smart Contracts для 100% контроля ваших финансов. Юридическая чистота и безопасность инвестиций.",
    color: "bg-purple-100 text-purple-600",
    image: reliabilityImg,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Что такое{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TeleBizNet
          </span>
          ?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          TeleBizNet – это франшиза медиаканалов нового поколения, ваш актив для
          пассивного дохода. Мы создали экосистему, где современные технологии
          (включая ИИ и Blockchain) работают на ваше благосостояние.
          <br />
          <br />
          Рынок digital-рекламы в мессенджерах и соцсетях огромен и растет на
          50-70% в год – мы обеспечим вам на нем достойное место.
        </p>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-4 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div
                  className={`absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-full ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

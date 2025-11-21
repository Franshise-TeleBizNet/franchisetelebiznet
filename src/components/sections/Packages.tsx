import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const packages = [
  {
    name: "Активный Старт",
    subtitle: "Для тех, кто хочет максимально участвовать",
    price: "от 900 тыс ₽",
    features: [
      "Минимальный пакет: от 5 каналов",
      "Маркетинг: самостоятельно",
      "Окупаемость: 12-18 мес. (ср. 16)",
      "Доступ к CRM-системе",
      "Максимальное участие в управлении",
    ],
    recommended: false,
  },
  {
    name: "Премиум Инвестор",
    subtitle: "Для тех, кто ценит пассивный доход и минимум усилий",
    price: "от 3 млн ₽",
    priceNote: "+ от 900 тыс. ₽ маркетинг. бюджет",
    features: [
      "Минимальный пакет: от 10 каналов",
      "Окупаемость: 6-12 мес. (ср. 10,5)",
      "Полностью пассивный доход",
      "Персональный ассистент",
      "Приоритет в маркетинге, скидки",
      "Гарантия возврата 50% взноса*",
    ],
    recommended: true,
  },
  {
    name: "Бизнес Рост",
    subtitle: "Для тех, кто готов уделять время и расти",
    price: "от 1,7 млн ₽",
    features: [
      "Минимальный пакет: от 5 каналов",
      "Маркетинг: частично",
      "Окупаемость: 9-15 мес. (ср. 13,5)",
      "Доступ к CRM-системе",
      "Частичная занятость, фокус на маркетинге",
    ],
    recommended: false,
  },
];

export const Packages = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="franchise-packages" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Выберите свой путь к успеху:{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Уровни партнерства
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Мы предлагаем гибкие варианты для разных целей и возможностей – от
          активного участия до полностью пассивного дохода.
        </p>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${
                pkg.recommended
                  ? "border-2 border-primary shadow-2xl scale-105"
                  : ""
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-warning text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Лучший выбор
                  </span>
                </div>
              )}
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-center mb-6 pt-4">
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pkg.subtitle}
                  </p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-extrabold">{pkg.price}</span>
                  <p className="text-muted-foreground text-sm">
                    паушальный взнос
                  </p>
                  {pkg.priceNote && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {pkg.priceNote}
                    </p>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  variant={pkg.recommended ? "default" : "outline"}
                  className="w-full"
                >
                  Выбрать {pkg.name.split(" ")[0]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          *При недостижении прибыли 300 000 руб./мес. в первый год (для пакета
          "Премиум Инвестор"). Дополнительная оплата.
        </p>
        <Card className="mt-10 bg-background">
          <CardContent className="p-6 text-center">
            <h4 className="text-xl font-semibold mb-3">
              Дополнительные возможности для всех партнеров:
            </h4>
            <p className="text-muted-foreground text-sm">
              Независимо от выбранного пакета, вы получаете доступ к нашей{" "}
              <span className="font-semibold text-primary">
                Партнерской Программе
              </span>{" "}
              (конвертируйте контакты в капитал) и{" "}
              <span className="font-semibold text-primary">
                Клубу Амбассадоров
              </span>{" "}
              (особые условия для блогеров с аудиторией от 100 000).
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingUp, Award } from "lucide-react";

const PartnerProgram = () => {
  const benefits = [
    "Комиссия 10% от первого платежа каждого приведенного клиента",
    "Дополнительные 5% от продлений и апгрейдов пакетов",
    "Доступ к эксклюзивным маркетинговым материалам",
    "Персональный реферальный код и ссылка",
    "Статистика и аналитика по вашим рефералам в реальном времени",
    "Выплаты два раза в месяц без минимального порога",
  ];

  const levels = [
    { name: "Бронза", referrals: "1-5", commission: "10%", bonus: "Базовые материалы" },
    { name: "Серебро", referrals: "6-15", commission: "12%", bonus: "+2% к комиссии" },
    { name: "Золото", referrals: "16-30", commission: "15%", bonus: "+5% к комиссии" },
    { name: "Платина", referrals: "31+", commission: "20%", bonus: "VIP поддержка" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Партнерская{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  программа
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Зарабатывайте, рекомендуя TeleBizNet. Получайте до 20% комиссии с каждого приведенного клиента!
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Стать партнером
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Преимущества программы
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Уровни партнерства
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Чем больше клиентов вы приводите, тем выше ваш уровень и комиссия
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {levels.map((level, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">{level.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {level.referrals} рефералов
                    </p>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {level.commission}
                    </div>
                    <p className="text-sm text-muted-foreground">{level.bonus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Как это работает
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Users, title: "Регистрация", text: "Заполните форму и получите уникальную реферальную ссылку" },
                  { icon: TrendingUp, title: "Продвижение", text: "Делитесь ссылкой с вашей аудиторией через любые каналы" },
                  { icon: Award, title: "Заработок", text: "Получайте комиссию с каждого клиента, который купит франшизу" },
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerProgram;

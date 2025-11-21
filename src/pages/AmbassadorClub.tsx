import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Gift, Users, Zap, Star, Trophy } from "lucide-react";

const AmbassadorClub = () => {
  const benefits = [
    { icon: Crown, title: "VIP статус", text: "Приоритетная поддержка и прямой доступ к руководству" },
    { icon: Gift, title: "Эксклюзивные бонусы", text: "Специальные предложения и подарки от партнеров" },
    { icon: Users, title: "Закрытое сообщество", text: "Доступ к приватному чату амбассадоров" },
    { icon: Zap, title: "Ранний доступ", text: "Первыми узнавайте о новых продуктах и функциях" },
    { icon: Star, title: "Повышенная комиссия", text: "До 25% от каждого приведенного клиента" },
    { icon: Trophy, title: "Конкурсы и призы", text: "Участие в эксклюзивных конкурсах с ценными призами" },
  ];

  const requirements = [
    "Приведено минимум 50 клиентов через партнерскую программу",
    "Активное участие в сообществе TeleBizNet",
    "Публикация качественного контента о TeleBizNet (обзоры, кейсы)",
    "Соблюдение этических норм и бренд-гайдлайнов",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-b from-accent/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Crown className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Клуб{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Амбассадоров
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Элитная программа для самых активных и успешных партнеров TeleBizNet. 
                Получайте эксклюзивные привилегии и дополнительные бонусы!
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Подать заявку
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Привилегии амбассадоров
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <benefit.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Как стать амбассадором
              </h2>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Требования для вступления:</h3>
                  <ul className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                          <span className="text-sm font-bold text-accent">{index + 1}</span>
                        </div>
                        <p className="text-foreground/80">{requirement}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                    <p className="text-sm text-foreground/80">
                      <strong>Обратите внимание:</strong> Статус амбассадора присваивается по результатам 
                      рассмотрения заявки нашей командой. Мы ищем партнеров, которые разделяют наши 
                      ценности и готовы активно развивать сообщество TeleBizNet.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Истории успеха
              </h2>
              <div className="space-y-6">
                {[
                  { name: "Алексей К.", achievement: "Привел 127 клиентов за 6 месяцев", income: "2,4 млн ₽" },
                  { name: "Мария Д.", achievement: "Создала сообщество из 5000+ подписчиков", income: "1,8 млн ₽" },
                  { name: "Дмитрий С.", achievement: "Запустил YouTube-канал о TeleBizNet", income: "3,1 млн ₽" },
                ].map((story, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl">
                        {story.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">{story.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{story.achievement}</p>
                        <p className="text-sm font-semibold text-accent">Заработано: {story.income}</p>
                      </div>
                    </CardContent>
                  </Card>
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

export default AmbassadorClub;

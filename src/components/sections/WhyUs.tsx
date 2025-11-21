import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Shield, Zap, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Инновационная digital-модель",
    description:
      "Работа на самых перспективных платформах (Telegram, VK, Дзен и др.) с использованием передовых технологий ИИ и автоматизации.",
  },
  {
    icon: Users,
    title: "Экспертная команда",
    description:
      "Профессионалы в маркетинге, продажах и разработке работают на ваш успех ежедневно.",
  },
  {
    icon: Shield,
    title: "Юридическая защита",
    description:
      "Blockchain, Smart Contracts и полная прозрачность финансов гарантируют безопасность ваших инвестиций.",
  },
  {
    icon: Zap,
    title: "Полная автоматизация",
    description:
      "ИИ создает контент, команда привлекает аудиторию и продает рекламу - вы просто контролируете процесс.",
  },
  {
    icon: TrendingUp,
    title: "Растущий рынок",
    description:
      "Digital-реклама растет на 50-70% ежегодно. Мы помогаем вам занять выгодную позицию в этом тренде.",
  },
  {
    icon: Award,
    title: "100% лояльность",
    description:
      "НИ ОДИН франчайзи не покинул систему! Все работают, развиваются и растут вместе с нами.",
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Почему выбирают{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TeleBizNet
          </span>
          ?
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Наша цель – не просто быть частью цифрового мира, а формировать его
          будущее через новые идеи и технологии.
        </p>
        <Card className="mb-12 border-2 border-dashed border-primary/30 bg-primary/5">
          <CardContent className="p-6 sm:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              <span className="text-4xl sm:text-5xl block mb-2">💰</span>
              Наша гордость: <span className="underline">НИ ОДИН</span> из наших
              франчайзи не покинул систему!
            </h3>
            <p className="text-primary/80 mt-2 text-sm sm:text-base">
              Все работают, развиваются и растут вместе с нами. Это лучшее
              подтверждение надежности.
            </p>
          </CardContent>
        </Card>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

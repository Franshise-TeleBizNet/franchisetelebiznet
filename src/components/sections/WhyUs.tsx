import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Shield, Zap, TrendingUp, Award } from "lucide-react";
import innovationImg from "@/assets/whyus-innovation.jpg";
import teamImg from "@/assets/whyus-team.jpg";
import legalImg from "@/assets/whyus-legal.jpg";
import automationImg from "@/assets/whyus-automation.jpg";
import growthImg from "@/assets/whyus-growth.jpg";
import loyaltyImg from "@/assets/whyus-loyalty.jpg";

const reasons = [
  {
    icon: Sparkles,
    title: "Инновационная digital-модель",
    description:
      "Работа на самых перспективных платформах (Telegram, VK, Дзен и др.) с использованием передовых технологий ИИ и автоматизации.",
    image: innovationImg,
  },
  {
    icon: Users,
    title: "Экспертная команда",
    description:
      "Профессионалы в маркетинге, продажах и разработке работают на ваш успех ежедневно.",
    image: teamImg,
  },
  {
    icon: Shield,
    title: "Юридическая защита",
    description:
      "Blockchain, Smart Contracts и полная прозрачность финансов гарантируют безопасность ваших инвестиций.",
    image: legalImg,
  },
  {
    icon: Zap,
    title: "Полная автоматизация",
    description:
      "ИИ создает контент, команда привлекает аудиторию и продает рекламу - вы просто контролируете процесс.",
    image: automationImg,
  },
  {
    icon: TrendingUp,
    title: "Растущий рынок",
    description:
      "Digital-реклама растет на 50-70% ежегодно. Мы помогаем вам занять выгодную позицию в этом тренде.",
    image: growthImg,
  },
  {
    icon: Award,
    title: "100% лояльность",
    description:
      "НИ ОДИН франчайзи не покинул систему! Все работают, развиваются и растут вместе с нами.",
    image: loyaltyImg,
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
              className="hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={reason.image} 
                  alt={reason.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

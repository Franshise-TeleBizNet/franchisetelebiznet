import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Users, Shield, Zap, TrendingUp, Award, X, Check } from "lucide-react";
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

const comparisonData = [
  {
    feature: "Начальные инвестиции",
    telebiznet: "От 3 млн ₽",
    franchise: "От 5-10 млн ₽",
    own: "От 2-15 млн ₽",
  },
  {
    feature: "Срок запуска",
    telebiznet: "1-2 недели",
    franchise: "3-6 месяцев",
    own: "6-12 месяцев",
  },
  {
    feature: "Окупаемость",
    telebiznet: "6-12 месяцев",
    franchise: "12-24 месяца",
    own: "18-36+ месяцев",
  },
  {
    feature: "Ежедневная занятость",
    telebiznet: "15-30 мин",
    franchise: "4-8 часов",
    own: "8-12+ часов",
  },
  {
    feature: "Технологии и автоматизация",
    telebiznet: true,
    franchise: false,
    own: false,
  },
  {
    feature: "Поддержка и обучение",
    telebiznet: true,
    franchise: true,
    own: false,
  },
  {
    feature: "Масштабируемость",
    telebiznet: true,
    franchise: false,
    own: false,
  },
  {
    feature: "Географическая привязка",
    telebiznet: false,
    franchise: true,
    own: true,
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
        
        <Tabs defaultValue="advantages" className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2">
            <TabsTrigger value="advantages">Наши преимущества</TabsTrigger>
            <TabsTrigger value="comparison">Сравнение</TabsTrigger>
          </TabsList>
          
          <TabsContent value="advantages" className="space-y-8">
            <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
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
          </TabsContent>
          
          <TabsContent value="comparison">
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-bold">Параметр</th>
                        <th className="text-center p-3 font-bold text-primary">TeleBizNet</th>
                        <th className="text-center p-3 font-bold text-muted-foreground">Традиционная франшиза</th>
                        <th className="text-center p-3 font-bold text-muted-foreground">Свой бизнес</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                          <td className="p-3 font-medium">{row.feature}</td>
                          <td className="p-3 text-center">
                            {typeof row.telebiznet === 'boolean' ? (
                              row.telebiznet ? (
                                <Check className="w-5 h-5 text-success mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-destructive mx-auto" />
                              )
                            ) : (
                              <span className="text-primary font-semibold">{row.telebiznet}</span>
                            )}
                          </td>
                          <td className="p-3 text-center text-muted-foreground">
                            {typeof row.franchise === 'boolean' ? (
                              row.franchise ? (
                                <Check className="w-5 h-5 text-success mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-destructive mx-auto" />
                              )
                            ) : (
                              row.franchise
                            )}
                          </td>
                          <td className="p-3 text-center text-muted-foreground">
                            {typeof row.own === 'boolean' ? (
                              row.own ? (
                                <Check className="w-5 h-5 text-success mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-destructive mx-auto" />
                              )
                            ) : (
                              row.own
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

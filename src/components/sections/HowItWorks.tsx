import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const notToDo = [
  "Самостоятельно создавать контент и следить за трендами – это делает наш ИИ и контент-отдел.",
  "Искать рекламодателей и вести переговоры – этим занимается наш профессиональный отдел продаж.",
  "Быть экспертом в SMM, маркетинге и SEO – наша команда маркетологов обеспечит рост аудитории.",
  "Решать сложные технические вопросы и заниматься поддержкой каналов – это наша забота.",
];

const toDo = [
  "Управляете своей медиасетью через удобный личный кабинет (CRM-систему).",
  "Принимаете стратегические решения о развитии и масштабировании своего бизнеса.",
  "Контролируете доходы и ключевые показатели (в среднем 1-2 часа в неделю).",
  "Получаете стабильно растущий пассивный доход и наслаждаетесь свободой!",
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Как это{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            работает
          </span>
          ? Все просто!
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Мы используем модель SMaaS (Social Media as a Service) и авторскую
          технологию КАПРИЗ. Вы получаете готовый бизнес, а 99% операционной
          работы делаем мы. Ваше участие – всего 1-2 часа в неделю!
        </p>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-destructive flex items-center gap-2">
                <X className="w-7 h-7" />
                Что НЕ придется делать:
              </h3>
              <ul className="space-y-3">
                {notToDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-success flex items-center gap-2">
                <CheckCircle2 className="w-7 h-7" />
                Что ДЕЛАЕТЕ ВЫ:
              </h3>
              <ul className="space-y-3">
                {toDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">
                      ▶
                    </span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Подробнее о бизнес-модели
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/5" />
              <div className="relative h-full flex flex-col items-center justify-center space-y-6">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    КАПРИЗ
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">Технология автоматизации</p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { label: "КОНТЕНТ", icon: "📝", delay: "0s" },
                    { label: "АУДИТОРИЯ", icon: "👥", delay: "0.5s" },
                    { label: "ПРОДАЖИ", icon: "💰", delay: "1s" },
                    { label: "ЗАРАБОТОК", icon: "📈", delay: "1.5s" },
                    { label: "ИЗДЕРЖКИ", icon: "📊", delay: "2s" },
                    { label: "РЕИНВЕСТ", icon: "♻️", delay: "2.5s" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-background/50 backdrop-blur-sm rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 hover:bg-primary/10 animate-fade-in border border-primary/20"
                      style={{ animationDelay: item.delay }}
                    >
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-xs font-semibold text-foreground/80">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

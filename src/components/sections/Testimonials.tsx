import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ирина В.",
    city: "Москва",
    role: "Мама в декрете, ранее бухгалтер",
    quote:
      "Получила наследство, вложила 4 млн ₽ в TeleBizNet (10 каналов). Через 10,5 месяцев вложения вернулись! Пассивный доход более 350 000 ₽/мес. Трачу 15 минут 2-3 раза в неделю на отчеты.",
  },
  {
    name: "Дмитрий С.",
    city: "Казань",
    role: "Опытный бизнесмен (ремонтный бизнес)",
    quote:
      "Устал от стресса офлайн-бизнеса. В марте 2024 получил пакет из 15 каналов. Через 8,5 месяцев вложения окупились. Доход ~550 000 ₽/мес. На 30% меньше работы, на 40% больше дохода.",
  },
  {
    name: "Иван Н.",
    city: "Новосибирск (живет на Бали)",
    role: "Инвестор (ранее криптовалюты)",
    quote:
      "Искал стабильность после криптогорок. Взял пакет из 25 каналов. Окупился за 6,5 месяцев! 25 каналов приносят ~900 000 ₽/мес чистой прибыли. Заказал еще 25.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Они уже{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            зарабатывают с нами
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 italic">
          "Я хотела, чтобы мои деньги служили мне, а не я им." - Ирина, Москва.
          "Это как магия: бизнес растёт, а я просто наблюдаю." - Дмитрий,
          Казань.
        </p>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">
                    {testimonial.name},{" "}
                    <span className="text-muted-foreground font-medium">
                      {testimonial.city}
                    </span>
                  </h3>
                  <p className="text-sm text-primary font-semibold">
                    {testimonial.role}
                  </p>
                </div>
                <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4 py-2 text-sm">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Больше историй успеха
          </Button>
        </div>
      </div>
    </section>
  );
};

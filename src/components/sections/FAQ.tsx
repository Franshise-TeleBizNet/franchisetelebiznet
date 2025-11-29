import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Какие гарантии вы предоставляете?",
    a: "Главная гарантия – наша репутация: ни один франчайзи не покинул систему. Мы используем портфельный подход, создаем резервный фонд, постоянно мониторим тренды. Для Премиум-партнеров есть опция страхования рисков с гарантией возврата 50% паушального взноса.",
  },
  {
    q: "Сколько времени нужно уделять бизнесу?",
    a: "После первоначальной настройки и обучения, управление бизнесом занимает в среднем 1-2 часа в неделю. Автоматизация позволяет сосредоточиться на стратегических решениях.",
  },
  {
    q: "Что если я ничего не понимаю в маркетинге?",
    a: "Это не проблема! Созданием контента занимается наш ИИ и контент-отдел. Маркетингом – команда профессионалов. Продажами – опытный отдел продаж. Вам не нужно быть экспертом.",
  },
  {
    q: "Насколько прозрачна финансовая система?",
    a: "Мы используем технологии Blockchain и Smart Contracts для полной прозрачности. Все финансовые потоки отображаются в личном кабинете в режиме реального времени.",
  },
  {
    q: "Какие стартовые вложения?",
    a: "Стартовые инвестиции включают паушальный взнос (зависит от пакета) и, для некоторых пакетов, маркетинговый бюджет. Все условия четко прописываются в договоре, никаких скрытых платежей нет.",
  },
  {
    q: "Могу ли я продать свой бизнес?",
    a: "Да, все медиаканалы находятся в вашей полной собственности. Это ликвидный актив, который можно продать в любой момент, часто с существенной прибылью.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Остались вопросы?{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Мы на них ответили!
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Здесь собраны ответы на самые популярные вопросы о франшизе
          TeleBizNet.
        </p>
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

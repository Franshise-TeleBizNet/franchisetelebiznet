import { Card, CardContent } from "@/components/ui/card";

export const LongTermProspects = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Долгосрочные{" "}
          <span className="underline decoration-accent decoration-wavy">
            перспективы
          </span>
        </h2>
        <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
          TeleBizNet – это не только текущий доход. Это ваш вклад в будущее и
          возможность стать акционером крупной технологической компании.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-white">
              <div className="text-6xl font-extrabold text-accent mb-3">
                2028
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Закрытое акционирование УК
              </h3>
              <p className="text-blue-200">
                Франчайзи получат приоритетное право на участие в рамках
                ограниченной подписки.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-white">
              <div className="text-6xl font-extrabold text-accent mb-3">
                2030
              </div>
              <h3 className="text-2xl font-bold mb-2">Выход на IPO</h3>
              <p className="text-blue-200">
                Планируемый вывод акций управляющей компании на биржевой
                фондовый рынок.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="mt-12 text-2xl md:text-3xl font-bold">
          Сегодня франчайзи – <span className="text-warning">завтра акционер!</span>
        </p>
      </div>
    </section>
  );
};

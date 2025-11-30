import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Технологии и автоматизация",
    telebiznet: true,
    franchise: false,
    own: false,
  },
  {
    feature: "Возможность полностью пассивного дохода",
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
    feature: "Быстрая масштабируемость",
    telebiznet: true,
    franchise: false,
    own: false,
  },
  {
    feature: "Отсутствие рисков физического (офлайн) бизнеса",
    telebiznet: true,
    franchise: false,
    own: false,
  },
  {
    feature: "Понятный размер необходимого капитала",
    telebiznet: true,
    franchise: false,
    own: false,
  },
  {
    feature: "Быстрый запуск",
    telebiznet: true,
    franchise: false,
    own: false,
  },
  {
    feature: "Минимальная ежедневная занятость",
    telebiznet: true,
    franchise: false,
    own: false,
  },
];

export const Comparison = () => {
  return (
    <section id="comparison" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Сравнение с{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            другими вариантами
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Почему TeleBizNet — лучший выбор для вашего бизнеса</p>

        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-4 sm:p-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
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
                        {row.telebiznet ? (
                          <Check className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-destructive mx-auto" />
                        )}
                      </td>
                      <td className="p-3 text-center text-muted-foreground">
                        {row.franchise ? (
                          <Check className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-destructive mx-auto" />
                        )}
                      </td>
                      <td className="p-3 text-center text-muted-foreground">
                        {row.own ? (
                          <Check className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-destructive mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

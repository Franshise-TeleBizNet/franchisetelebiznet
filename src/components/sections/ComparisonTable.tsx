import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";

export const ComparisonTable = () => {
  return (
    <section
      id="comparison-table-section"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Сравнение{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            всех пакетов
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Выберите оптимальный для вас вариант франшизы TeleBizNet.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left font-bold">
                  Характеристика
                </th>
                <th className="px-4 py-3 text-center font-bold">
                  Активный Старт
                </th>
                <th className="px-4 py-3 text-center font-bold">Бизнес Рост</th>
                <th className="px-4 py-3 text-center font-bold bg-primary/10">
                  Премиум Инвестор
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 font-semibold">Паушальный взнос</td>
                <td className="px-4 py-3 text-center">от 900 тыс ₽</td>
                <td className="px-4 py-3 text-center">от 1,7 млн ₽</td>
                <td className="px-4 py-3 text-center bg-primary/5">
                  от 3 млн ₽
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Минимум каналов</td>
                <td className="px-4 py-3 text-center">от 5</td>
                <td className="px-4 py-3 text-center">от 5</td>
                <td className="px-4 py-3 text-center bg-primary/5">от 10</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">
                  Срок окупаемости (мес.)
                </td>
                <td className="px-4 py-3 text-center">12-18 (ср. 16)</td>
                <td className="px-4 py-3 text-center">9-15 (ср. 13,5)</td>
                <td className="px-4 py-3 text-center bg-primary/5">
                  6-12 (ср. 10,5)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">
                  Персональный ассистент
                </td>
                <td className="px-4 py-3 text-center">ИИ ассистент</td>
                <td className="px-4 py-3 text-center">
                  ИИ + консультации
                </td>
                <td className="px-4 py-3 text-center bg-primary/5">
                  <CheckCircle2 className="w-6 h-6 text-success inline" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">
                  Гарантия возврата 50%
                </td>
                <td className="px-4 py-3 text-center">
                  <X className="w-6 h-6 text-destructive inline" />
                </td>
                <td className="px-4 py-3 text-center">
                  <X className="w-6 h-6 text-destructive inline" />
                </td>
                <td className="px-4 py-3 text-center bg-primary/5">
                  <CheckCircle2 className="w-6 h-6 text-success inline" />
                </td>
              </tr>
            </tbody>
            <tfoot className="bg-muted">
              <tr>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Выбрать
                  </Button>
                </td>
                <td className="px-4 py-4 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Выбрать
                  </Button>
                </td>
                <td className="px-4 py-4 text-center">
                  <Button
                    size="sm"
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Выбрать
                  </Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

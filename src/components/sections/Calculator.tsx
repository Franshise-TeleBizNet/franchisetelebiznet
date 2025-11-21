import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Calculator = () => {
  const [channels, setChannels] = useState(10);
  const [investment, setInvestment] = useState("medium");
  const [result, setResult] = useState<number | null>(null);

  const calculateIncome = () => {
    let income = 0;
    if (investment === "low") income = channels * 10000;
    else if (investment === "medium") income = channels * 16000;
    else if (investment === "high") income = channels * 35000;
    setResult(Math.round(income / 1000) * 1000);
  };

  return (
    <section
      id="calculator-section"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[image:var(--hero-gradient)] opacity-90" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ваш финансовый{" "}
            <span className="bg-gradient-to-r from-blue-200 to-accent bg-clip-text text-transparent">
              потенциал
            </span>
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Сеть из 10 медиаканалов приносит от 1,2 до 1,65 млн рублей выручки
            ежемесячно.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square max-w-md bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <p className="text-white/60 text-center px-4">
                [График роста дохода]
              </p>
            </div>
          </div>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Рассчитайте ваш{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  потенциальный доход
                </span>
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Количество каналов в пакете:
                  </label>
                  <Slider
                    value={[channels]}
                    onValueChange={(value) => setChannels(value[0])}
                    min={5}
                    max={50}
                    step={5}
                    className="mb-2"
                  />
                  <div className="text-center text-lg font-semibold text-primary">
                    {channels} каналов
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Уровень стартовых инвестиций в маркетинг:
                  </label>
                  <Select value={investment} onValueChange={setInvestment}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">
                        Минимальный (для пакета "Активный старт")
                      </SelectItem>
                      <SelectItem value="medium">
                        Средний (для пакета "Бизнес Рост")
                      </SelectItem>
                      <SelectItem value="high">
                        Высокий (для пакета "Премиум Инвестор")
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateIncome} className="w-full" size="lg">
                  Рассчитать
                </Button>
                {result !== null && (
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      Ваш примерный ежемесячный пассивный доход:
                    </p>
                    <p className="text-3xl font-extrabold text-primary my-2">
                      ~{result.toLocaleString("ru-RU")} ₽
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Это ориентировочный расчет. Точные цифры зависят от
                      множества факторов.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Получить подробную финансовую модель
          </Button>
        </div>
      </div>
    </section>
  );
};

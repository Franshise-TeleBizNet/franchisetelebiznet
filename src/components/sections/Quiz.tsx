import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

export const Quiz = () => {
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [goal, setGoal] = useState("");
  const [investment, setInvestment] = useState("");

  const getRecommendation = () => {
    if (
      goal === "passive_income" &&
      (investment === "yes_max" || investment === "yes_moderate")
    ) {
      return 'Для максимального пассивного дохода и готовности к инвестициям, вам идеально подойдет наш пакет "Премиум Инвестор". Он обеспечит самый быстрый рост и максимальную отдачу.';
    } else if (goal === "start_business" && investment === "no_minimal") {
      return 'Для старта вашего первого онлайн-бизнеса с минимальными вложениями, мы рекомендуем пакет "Активный Старт". Это отличный способ войти в мир цифрового предпринимательства с максимальным вашим участием.';
    } else if (goal === "diversification") {
      return 'Для диверсификации вашего текущего бизнеса и создания дополнительного источника дохода, обратите внимание на пакет "Бизнес Рост". Он сбалансирован по инвестициям и потенциальной прибыли.';
    }
    return 'Мы рекомендуем вам пакет "Премиум Инвестор", который предлагает лучший баланс между инвестициями и потенциальным доходом. Свяжитесь с нами для индивидуального подбора!';
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setStep(1);
    setShowResult(false);
    setGoal("");
    setInvestment("");
  };

  return (
    <section id="quiz-section" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Какой пакет TeleBizNet{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              подходит вам
            </span>
            ?
          </h2>
          <p className="text-muted-foreground mb-12">
            Ответьте на несколько вопросов, и мы поможем подобрать оптимальное
            решение для ваших целей.
          </p>
        </div>
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6 sm:p-8">
            {!showResult && step === 1 && (
              <div className="space-y-4">
                <label className="block text-lg font-semibold">
                  1. Ваша основная цель?
                </label>
                <Select value={goal} onValueChange={setGoal}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите цель" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="passive_income">
                      Максимальный пассивный доход с минимальным участием
                    </SelectItem>
                    <SelectItem value="diversification">
                      Диверсификация текущего бизнеса, новый источник дохода
                    </SelectItem>
                    <SelectItem value="start_business">
                      Начать свой первый онлайн-бизнес с поддержкой
                    </SelectItem>
                    <SelectItem value="time_freedom">
                      Больше свободного времени для себя и семьи
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  onClick={handleNext}
                  className="w-full"
                  disabled={!goal}
                >
                  Далее
                </Button>
              </div>
            )}

            {!showResult && step === 2 && (
              <div className="space-y-4">
                <label className="block text-lg font-semibold">
                  2. Готовы ли вы инвестировать в маркетинг для ускоренного
                  роста?
                </label>
                <Select value={investment} onValueChange={setInvestment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите вариант" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes_max">
                      Да, готов к значительным вложениям для быстрого старта
                    </SelectItem>
                    <SelectItem value="yes_moderate">
                      Да, готов к умеренным стартовым вложениям
                    </SelectItem>
                    <SelectItem value="no_minimal">
                      Предпочитаю минимальные начальные вложения в маркетинг
                    </SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="w-1/2"
                  >
                    Назад
                  </Button>
                  <Button
                    onClick={handleShowResult}
                    className="w-1/2"
                    disabled={!investment}
                  >
                    Узнать результат
                  </Button>
                </div>
              </div>
            )}

            {showResult && (
              <div className="text-center relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleReset}
                  className="absolute right-0 top-0"
                  aria-label="Закрыть"
                >
                  <X className="h-4 w-4" />
                </Button>
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  Рекомендация для вас:
                </h3>
                <p className="text-foreground mb-4">{getRecommendation()}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Это предварительная рекомендация. Для точного подбора
                  свяжитесь с нами.
                </p>
                <Button
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Обсудить с экспертом
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
